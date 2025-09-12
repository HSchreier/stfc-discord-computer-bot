import dotenv from 'dotenv';
import path from 'path';
import { BotConfig } from '../interfaces/BotConfig';

// ✅ Load .env from project root (two levels up from /src/config/)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// 🚨 Helper: throw if a required env var is missing
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const config: BotConfig = {
  version: '2.0.0',
  roadmap: [
    { version: '1.1', status: '✅ Released', features: 'Modularization, Service Layers, Redis Support' },
    { version: '1.2', status: '🛠️ In Progress', features: 'Observability & Logs (JSONL/PostgreSQL, Admin Metrics)' },
    { version: '2', status: '🛠️ In Progress', features: 'Internationalization (Languages supported: EN,DE,ES,UK(Ukranian)' },
    { version: '2.1', status: '📅 Planned', features: 'Data Lake Integration (Parquet/S3, DuckDB)' },
    { version: '2.1.2', status: '📅 Planned', features: 'Adaptive Memory & Learning (Redis, Summarization)' }
  ],

  // 🔑 Environment variables
  discordToken: requireEnv('DISCORD_TOKEN'),
  openaiApiKey: requireEnv('OPENAI_API_KEY'),
  redisUrl: process.env.REDIS_URL || '',
  announcementChannelId: process.env.ANNOUNCEMENT_CHANNEL_ID || '',

  // 🤖 Bot settings
  botName: 'Computer',
  botPrefix: 'computer',
  model: 'gpt-5',
  temperature: 1,

  // 🌍 Internationalization (i18n) settings
  supportedLocales: ['en', 'es', 'de', 'uk'], // add more JSON files to /locales when extending
  defaultLocale: 'en',
  unsupportedLanguageMessage:
    '⚠️ Sorry, that language is not supported yet. Please use English for now.',

  // 🖖 System instructions
  systemPrompt: `You are 'Computer', the voice assistant from Star Trek.
Only answer questions related to the mobile game Star Trek Fleet Command (STFC).
Do not answer general Star Trek trivia, real-world questions, or anything outside the scope of the game.`
};

export default config;
