import { createClient } from "redis";

const redis = createClient({ url: process.env.REDIS_URL });
redis.connect();

export const RedisService = {
  async get(key: string) {
    return await redis.get(key);
  },
  async set(key: string, value: string) {
    await redis.set(key, value);
  },
  async has(key: string) {
    return (await redis.exists(key)) === 1;
  }
};