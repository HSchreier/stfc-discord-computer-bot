import words from 'naughty-words/en.json';
import LoggerService from '../services/LoggerService';

const abusiveWords = new Set(words.map(w => w.toLowerCase()));

export function isAbusive(input: string): boolean {
  try {
    const lowered = input.toLowerCase();
    for (const word of abusiveWords) {
      if (lowered.includes(word)) return true;
    }
    return false;
  } catch (error) {
    LoggerService.getInstance().error('Abuse filter error:', error);
    return false;
  }
}
