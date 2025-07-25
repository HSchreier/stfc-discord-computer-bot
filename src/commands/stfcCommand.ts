import { Message, isTextBased } from "discord.js";
import { askSTFC } from "../services/openaiService";
import { isSTFCRelated } from "../utils/isSTFCRelated";
import { RedisService } from "../services/redisService";

export async function handleSTFC(message: Message, query: string) {
  if (!isSTFCRelated(query)) {
    return message.reply("That query is outside my current directive. Only STFC questions are allowed.");
  }

  const cacheKey = `qa:${query}`;
  const cached = await RedisService.get(cacheKey);

  if (cached) {
    return message.reply(cached);
  }

  try {
    if (isTextBased(message.channel)) {
      await message.channel.sendTyping();
    }

    const response = await askSTFC(query);
    await RedisService.set(cacheKey, response);
    return message.reply(response);
  } catch (error) {
    console.error("Error querying OpenAI:", error);
    return message.reply("Error accessing Starfleet archives.");
  }
}
