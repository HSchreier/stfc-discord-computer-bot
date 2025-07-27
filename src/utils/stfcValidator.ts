export function isSTFCRelated(input: string): boolean {
  const stfcKeywords = [
    'star trek fleet command', 'stfc', 'officer', 'crew', 'synergy', 'armada', 'hostile',
    'research', 'battleship', 'interceptor', 'explorer', 'faction', 'g3', 'g4', 'g5',
    'base', 'mining', 'borg', 'event', 'mission', 'prime', 'away team', 'latinum', 'drydock', 'jellyfish', 'vidar', 'officer ability'
  ];
  const lowerInput = input.toLowerCase();
  return stfcKeywords.some(keyword => lowerInput.includes(keyword));
}
