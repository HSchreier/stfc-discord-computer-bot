import DiscordService from './services/DiscordService';
import LoggerService from './services/LoggerService';
import { handleMessageCreate } from './events/messageCreate';
import config from './config';

const discordService = DiscordService.getInstance();
const logger = LoggerService.getInstance();

discordService.client.on('ready', async () => {
  logger.info(`🖖 ${config.botName} is online`);
  await discordService.sendAnnouncement(`${config.botName} online. Standing by for Starfleet Fleet Command queries.`);
});

discordService.client.on('messageCreate', handleMessageCreate);

discordService.login().catch(error => {
  logger.error('Failed to start bot:', error);
  process.exit(1);
});

process.on('SIGINT', () => {
  logger.info('Shutting down...');
  discordService.client.destroy();
  process.exit(0);
});
