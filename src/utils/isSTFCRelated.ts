export function isSTFCRelated(input: string): boolean {
  const keywords = ["fleet command", "officer", "armada", "ship", "borg", "vidar", "mining"];
  const lower = input.toLowerCase();
  return keywords.some(k => lower.includes(k));
}