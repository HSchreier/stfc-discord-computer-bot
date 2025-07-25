import { Message } from "discord.js";
import { handleSTFC } from "./stfcCommand";
import { handleHelp } from "./helpCommand";
import { handleEasterEgg } from "./easterEggCommand";
import { isAbusive } from "../middleware/abuseFilter";

export async function handleMessage(message: Message) {
  if (message.author.bot || !message.content.toLowerCase().startsWith("computer")) return;

  const query = message.content.slice("computer".length).trim().toLowerCase();

  if (!query) return message.reply("Ask something about Star Trek Fleet Command!");

  if (query === "help") return handleHelp(message);
  if (isAbusive(query)) return message.reply("That's inappropriate. Query blocked.");
  if (await handleEasterEgg(message, query)) return;

  return handleSTFC(message, query);
}