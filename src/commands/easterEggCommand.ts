import { Message } from "discord.js";

const triggers = [
  "who is r3d1c3",
  "tell me about r3d1c3",
  "what is demons red ashes",
  "what is dra alliance",
  "who runs dra",
];

export async function handleEasterEgg(message: Message, query: string): Promise<boolean> {
  if (triggers.some(t => query.includes(t))) {
    await message.reply("** r3d1c3 **\nVolume One, Issue 7, Phile 3 of 10");
    return true;
  }
  return false;
}