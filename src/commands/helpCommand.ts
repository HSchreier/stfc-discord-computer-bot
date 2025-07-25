import { Message } from "discord.js";

export async function handleHelp(message: Message) {
  return message.reply(
    "**🧠 Computer Help**\n" +
    "I'm your assistant for **Star Trek Fleet Command (STFC)**.\n\n" +
    "• Start any message with `computer`\n" +
    "• Ask about STFC — ships, crew, missions, etc.\n\n" +
    "**Examples:**\n" +
    "• `computer best borg crew`\n" +
    "• `computer how to get vidar`\n\n" +
    "_Live long and prosper. 🖖_"
  );
}