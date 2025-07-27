import { createClient } from 'redis';
import config from '../config';
import LoggerService from './LoggerService';

class MemoryService {
  private static instance: MemoryService;
  private client: ReturnType<typeof createClient>;

  private constructor() {
    this.client = createClient({ url: config.redisUrl });
    this.connect();
  }

  public static getInstance(): MemoryService {
    if (!MemoryService.instance) {
      MemoryService.instance = new MemoryService();
    }
    return MemoryService.instance;
  }

  public async getConversationContext(userId: string): Promise<string[]> {
    try {
      const context = await this.client.get(`conversation:${userId}`);
      return context ? JSON.parse(context) : [];
    } catch (error) {
      LoggerService.getInstance().error('Redis get conversation error:', error);
      return [];
    }
  }
  public async saveConversationContext(userId: string, messages: string[]): Promise<void> {
    try {
      await this.client.set(`conversation:${userId}`, JSON.stringify(messages), {
        EX: 3600 // Expire after 1 hour
      });
    } catch (error) {
      LoggerService.getInstance().error('Redis save conversation error:', error);
    }
  }

  public async clearConversationContext(userId: string): Promise<void> {
    try {
      await this.client.del(`conversation:${userId}`);
    } catch (error) {
      LoggerService.getInstance().error('Redis clear conversation error:', error);
    }
  }

  private async connect(): Promise<void> {
    try {
      await this.client.connect();
      LoggerService.getInstance().info('Redis connected successfully');
    } catch (error) {
      LoggerService.getInstance().error('Redis connection error:', error);
    }
  }

  public async set(key: string, value: string): Promise<void> {
    try {
      await this.client.set(key, value);
    } catch (error) {
      LoggerService.getInstance().error('Redis set error:', error);
    }
  }

  public async get(key: string): Promise<string | null> {
    try {
      return await this.client.get(key);
    } catch (error) {
      LoggerService.getInstance().error('Redis get error:', error);
      return null;
    }
  }
}

export default MemoryService;
