const badWords = ["badword1", "badword2", "anotherbadword"]; // Replace with real abusive terms

export function isAbusive(text: string): boolean {
  const lower = text.toLowerCase();
  return badWords.some(word => lower.includes(word));
}