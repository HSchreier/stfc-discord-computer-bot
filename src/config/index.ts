import dotenv from 'dotenv';
import { BotConfig } from '../interfaces/BotConfig';

dotenv.config();

const config: BotConfig = {
  version: '1.1.0',
  roadmap: [
    { version: '1.1', status: '✅ Released', features: 'Modularization, Service Layers, Redis Support' },
    { version: '1.2', status: '🛠️ In Progress', features: 'Observability & Logs (JSONL/PostgreSQL, Admin Metrics)' },
    { version: '1.3', status: '📅 Planned', features: 'Data Lake Integration (Parquet/S3, DuckDB)' },
    { version: '1.4', status: '📅 Planned', features: 'Adaptive Memory & Learning (Redis, Summarization)' },
    { version: '1.5', status: '📅 Planned', features: 'Internationalization (Multilingual Support)' }
  ],
  discordToken: process.env.DISCORD_TOKEN || '',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  announcementChannelId: process.env.ANNOUNCEMENT_CHANNEL_ID || '1339371469666390192',
  botName: 'Computer',
  botPrefix: 'computer',
  model: 'gpt-4',
  temperature: 0.6,
  systemPrompt: `You are 'Computer', the voice assistant from Star Trek.
Only answer questions related to the mobile game Star Trek Fleet Command (STFC).
Do not answer general Star Trek trivia, real-world questions, or anything outside the scope of the game.`,
};

export default config;
