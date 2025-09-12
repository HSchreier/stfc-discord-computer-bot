interface RoadmapItem {
  version: string;
  status: string;
  features: string;
}

export interface BotConfig {
  // 🌍 Internationalization
  supportedLocales: string[];       // e.g. ['en', 'es', 'de', 'uk']
  defaultLocale: string;            // fallback locale, e.g. 'en'
  unsupportedLanguageMessage: string;

  // 🔑 Environment
  discordToken: string;
  openaiApiKey: string;
  redisUrl: string;
  announcementChannelId: string;

  // 🤖 Bot settings
  botName: string;
  botPrefix: string;
  model: string;
  temperature: number;
  systemPrompt: string;

  // 📦 Meta
  version: string;
  roadmap: RoadmapItem[];
}
