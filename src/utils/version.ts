import config from '../config';

export function getVersionInfo(): string {
  const versionInfo = `🖖 **${config.botName} v${config.version}**\n\n` +
    `**Current Version Features:**\n` +
    `${config.roadmap.find(item => item.version === config.version)?.features}\n\n` +
    `**Roadmap:**\n` +
    config.roadmap.map(item =>
      `${item.status} **v${item.version}**: ${item.features}`
    ).join('\n') + '\n\n' +
    `_Live long and prosper._ 🖖`;

  return versionInfo;
}