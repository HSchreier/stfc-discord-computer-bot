import { Client, GatewayIntentBits } from 'discord.js';
import config from '../config';
import LoggerService from './LoggerService';

class DiscordService {
  private static instance: DiscordService;
  public client: Client;

  private constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
  }

  public static getInstance(): DiscordService {
    if (!DiscordService.instance) {
      DiscordService.instance = new DiscordService();
    }
    return DiscordService.instance;
  }

  public async login(): Promise<void> {
    try {
      await this.client.login(config.discordToken);
      LoggerService.getInstance().info(`${config.botName} is online`);
    } catch (error) {
      LoggerService.getInstance().error('Discord login error:', error);
      process.exit(1);
    }
  }

  public async sendAnnouncement(message: string): Promise<void> {
    try {
      const channel = await this.client.channels.fetch(config.announcementChannelId);
      if (channel && channel.isTextBased()) {
        if ("send" in channel) {
          await channel.send(message);
        }
      }
    } catch (error) {
      LoggerService.getInstance().error('Announcement error:', error);
    }
  }
}

export default DiscordService;
