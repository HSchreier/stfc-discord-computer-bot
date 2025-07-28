import { Message, TextBasedChannel } from 'discord.js';
import OpenAIService from '../services/OpenAIService';
import LoggerService from '../services/LoggerService';
import MemoryService from '../services/MemoryService';
import { isAbusive } from '../utils/abuseFilter';
import { isSTFCRelated } from '../utils/stfcValidator';
import { isFollowUpQuestion, getFollowUpQuestion } from '../utils/conversationUtils';
import { checkEasterEggs } from '../utils/easterEggs';
import { getVersionInfo } from '../utils/version';
import config from '../config';
import { Anonymizer } from '../services/Anonymizer';

export async function handleMessageCreate(message: Message): Promise<void> {
  const logger = LoggerService.getInstance();
  const memoryService = MemoryService.getInstance();
  const anonymizer = new Anonymizer('hash'); // 'mask' or 'hash'

  try {
    if (message.author.bot || !message.content.toLowerCase().startsWith(config.botPrefix)) return;

    const userInput = message.content.slice(config.botPrefix.length).trim();
    const normalizedInput = userInput.toLowerCase();

    const userId = message.author.id;
    const userTag = message.author.tag;
    const anonId = anonymizer.anonymize(userId);
    const anonTag = anonymizer.anonymize(userTag);

    // Easter eggs
    const easterEggResponse = checkEasterEggs(normalizedInput);
    if (easterEggResponse) {
      await message.reply(easterEggResponse);
      return;
    }

    if (!userInput) {
      await message.reply('Please ask a question related to Star Trek Fleet Command.');
      return;
    }

    // Help
    if (normalizedInput === 'help') {
      await message.reply(
        `**🧠 ${config.botName} Help**\n` +
        "I'm your assistant for **Star Trek Fleet Command (STFC)**.\n\n" +
        "**How to use me:**\n" +
        `• Start any message with \`${config.botPrefix}\`\n` +
        "• Then ask a question about STFC — officers, ships, crew, missions, events, and more!\n\n" +
        "**Memory Features:**\n" +
        "• I can remember our conversation for follow-up questions\n" +
        "• Context lasts for 1 hour or until you change topics\n\n" +
        "**Examples:**\n" +
        `• \`${config.botPrefix} what's the best crew for borg armadas?\`\n` +
        `• \`${config.botPrefix} based on that, what about Keenser?\`\n` +
        `• \`${config.botPrefix} version\` - Show version information\n\n` +
        "**Limits:**\n" +
        "• I won't answer non-STFC questions\n" +
        "• Abusive or off-topic language is blocked\n\n" +
        "_Live long and prosper. 🖖_"
      );
      return;
    }

    // Version
    if (normalizedInput === 'version') {
      await message.reply(getVersionInfo());
      return;
    }

    // Abuse
    if (isAbusive(userInput)) {
      await message.reply('That language is inappropriate. Query blocked.');
      await memoryService.set(`abuse:${anonId}`, Date.now().toString());
      return;
    }

    // STFC-related?
    if (!isSTFCRelated(userInput)) {
      await message.reply('That query is outside my current directive. I can only assist with Star Trek Fleet Command.');
      return;
    }

    // Valid question path
    try {
      if (typeof (message.channel as any).sendTyping === 'function') {
        await (message.channel as any).sendTyping();
      }
      const isFollowUp = isFollowUpQuestion(userInput);
      const finalQuestion = isFollowUp
        ? await getFollowUpQuestion(userId, userInput) // userId here required for context
        : userInput;

      await memoryService.set(`last_query:${anonId}`, userInput);

      const openaiService = OpenAIService.getInstance();
      const reply = await openaiService.askQuestion(finalQuestion, anonId); // anonymous ID

      await message.reply(reply);

      logger.info(`Processed query from ${anonTag}: ${userInput}`);
    } catch (error) {
      logger.error('Message processing error:', error);
      await message.reply('An error occurred while accessing Starfleet archives.');
    }
  } catch (error) {
    logger.error('Message handler error:', error);
  }
}
