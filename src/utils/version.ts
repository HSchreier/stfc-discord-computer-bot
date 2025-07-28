import config from '../config';

export function getVersionInfo(): string {
  const versionInfo = `🖖 **${config.botName} v${config.version}**\n\n` +
    `**Current Version Features:**\n` +
    `User data is anonymized via Crypto\n`+
    `**Roadmap:**\n` +
    config.roadmap.map(item =>
      `${item.status} **v${item.version}**: ${item.features}`
    ).join('\n') + '\n\n' +
    `https://github.com/HSchreier/stfc-discord-computer-bot\n\n`+
    `_Live long and prosper._ 🖖`;

  return versionInfo;
}