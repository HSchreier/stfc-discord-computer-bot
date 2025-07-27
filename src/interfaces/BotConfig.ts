interface RoadmapItem {
  version: string;
  status: string;
  features: string;
}
export interface BotConfig {
  discordToken: string;
  openaiApiKey: string;
  redisUrl: string;
  announcementChannelId: string;
  botName: string;
  botPrefix: string;
  model: string;
  temperature: number;
  systemPrompt: string;
  version: string;
  roadmap: RoadmapItem[];
}
