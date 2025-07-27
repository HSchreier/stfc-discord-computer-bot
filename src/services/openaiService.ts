import { OpenAI } from 'openai';
import config from '../config';
import LoggerService from './LoggerService';
import MemoryService from './MemoryService';

class OpenAIService {
  private static instance: OpenAIService;
  private openai: OpenAI;

  private constructor() {
    this.openai = new OpenAI({
      apiKey: config.openaiApiKey,
    });
  }

  public static getInstance(): OpenAIService {
    if (!OpenAIService.instance) {
      OpenAIService.instance = new OpenAIService();
    }
    return OpenAIService.instance;
  }

  public async askQuestion(question: string, userId: string): Promise<string> {
    try {
      const memoryService = MemoryService.getInstance();
      const conversationContext = await memoryService.getConversationContext(userId);

      const messages = [
        { role: 'system', content: config.systemPrompt },
        ...conversationContext.map(msg => ({ role: 'assistant' as const, content: msg })),
        { role: 'user', content: question }
      ];

      // @ts-ignore
      const response = await this.openai.chat.completions.create({
        model: config.model,
        messages,
        temperature: config.temperature,
      });

      const reply = response.choices[0].message.content?.trim() || "I'm unable to respond at this time.";

      // Save the conversation context
      await memoryService.saveConversationContext(
        userId,
        [...conversationContext.slice(-4), reply] // Keep last 4 messages for context
      );

      return reply;
    } catch (error) {
      LoggerService.getInstance().error('OpenAI Error:', error);
      throw error;
    }
  }
}

export default OpenAIService;
