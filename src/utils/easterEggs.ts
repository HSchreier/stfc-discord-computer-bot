export const easterEggTriggers = [
  'who is r3d1c3',
  'tell me about r3d1c3',
  'what is demons red ashes',
  'what is dra alliance',
  'who runs dra',
];

export function checkEasterEggs(input: string): string | null {
  const normalizedInput = input.toLowerCase();
  if (easterEggTriggers.some(trigger => normalizedInput.includes(trigger))) {
    return '** r3d1c3 **\nVolume One, Issue 7, Phile 3 of 10';
  }
  return null;
}
