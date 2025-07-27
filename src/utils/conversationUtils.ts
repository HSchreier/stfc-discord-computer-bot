// src/utils/conversationUtils.ts
import MemoryService from '../services/MemoryService';

export function isFollowUpQuestion(input: string): boolean {
  const followUpPhrases = [
    'what about',
    'based on your last answer',
    'following up on',
    'regarding your previous response',
    'you mentioned',
    'earlier you said'
  ];
  const lowerInput = input.toLowerCase();
  return followUpPhrases.some(phrase => lowerInput.includes(phrase));
}

export async function getFollowUpQuestion(userId: string, input: string): Promise<string> {
  const memoryService = MemoryService.getInstance();
  const context = await memoryService.getConversationContext(userId);
  const lastMessage = context.length > 0 ? context[context.length - 1] : '';

  return `${lastMessage} ${input}`.trim();
}