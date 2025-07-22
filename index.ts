/**
 * @file index.ts
 * @description Entry point for the Star Trek Fleet Command Discord bot named "Computer".
 *              This bot responds only to game-related queries and filters inappropriate messages.
 *
 * @module index.ts (main bot handler)
 * @requires discord.js
 * @requires openai
 * @requires dotenv
 * @requires abuseFilter
 * @author
 * @license MIT
 */

import { Client, GatewayIntentBits, Message, type TextBasedChannel } from "discord.js";
import { config } from "dotenv";
import OpenAI from "openai";
import { isAbusive } from "./abuseFilter";

config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const easterEggTriggers = [
  "who are the dras",
  "tell me about ÐŘÅŠ",
  "what is demons red ashes",
  "what is dra alliance",
  "who runs dra",
];


function isSTFCRelated(input: string): boolean {
  const stfcKeywords = [
    "star trek fleet command", "stfc", "officer", "crew", "synergy", "armada", "hostile",
    "research", "battleship", "interceptor", "explorer", "faction", "g3", "g4", "g5",
    "base", "mining", "borg", "event", "mission", "prime", "away team", "latinum", "drydock", "jellyfish", "vidar", "officer ability"
  ];
  const lowerInput = input.toLowerCase();
  return stfcKeywords.some(keyword => lowerInput.includes(keyword));
}


async function askOpenAI(question: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are 'Computer', the voice assistant from Star Trek.
Only answer questions related to the mobile game Star Trek Fleet Command (STFC).
Do not answer general Star Trek trivia, real-world questions, or anything outside the scope of the game.`,
      },
      { role: "user", content: question },
    ],
    temperature: 0.6,
  });

  return response.choices[0].message.content?.trim() || "I'm unable to respond at this time.";
}

client.once("ready", () => {
  console.log(`🖖 Computer is online as ${client.user?.tag}`);
});

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot || !message.content.toLowerCase().startsWith("computer")) return;

  const userInput = message.content.slice("computer".length).trim();
  const normalizedInput = userInput.toLowerCase();
  if (easterEggTriggers.some(trigger => normalizedInput.includes(trigger))) {
    await message.reply(
      "**🍁 ÐŘÅŠ — Ðemons's Řed ÅŠhes 🍁**\n" +
      "An elite alliance of fearless captains, strategic minds, and relentless warriors in **Star Trek Fleet Command**.\n" +
      "Forged in fire, bonded by loyalty, feared across the galaxy. 💥\n\n" +
      "_'From ashes, we rise.'_ 🔥"
    );
    return;
  }

  if (!userInput) {
    await message.reply("Please ask a question related to Star Trek Fleet Command.");
    return;
  }
  if (userInput.toLowerCase() === "help") {
    await message.reply(
      "**🧠 Computer Help**\n" +
      "I'm your [DRAS] assistant for **Star Trek Fleet Command (STFC)**.\n\n" +
      "**How to use me:**\n" +
      "• Start any message with `computer`\n" +
      "• Then ask a question about STFC — officers, ships, crew, missions, events, and more!\n\n" +
      "**Examples:**\n" +
      "• `computer what's the best crew for borg armadas?`\n" +
      "• `computer how do I get jellyfish blueprints?`\n\n" +
      "**Limits:**\n" +
      "• I won’t answer non-STFC questions\n" +
      "• Abusive or off-topic language is blocked\n\n" +
      "_Live long and prosper. 🖖_"
    );
    return;
  }

  if (isAbusive(userInput)) {
    await message.reply("That language is inappropriate. Query blocked.");
    return;
  }

  if (!isSTFCRelated(userInput)) {
    await message.reply("That query is outside my current directive. I can only assist with Star Trek Fleet Command.");
    return;
  }

  try {
    if ("sendTyping" in message.channel && typeof message.channel.sendTyping === "function") {
      await message.channel.sendTyping();
    }
    const reply = await askOpenAI(userInput);
    await message.reply(reply);
  } catch (error) {
    console.error("OpenAI Error:", error);
    await message.reply("An error occurred while accessing Starfleet archives.");
  }
});

client.login(process.env.DISCORD_TOKEN);
client.once("ready", async () => {
  console.log(`🖖 Computer is online as ${client.user?.tag}`);

  const channelId = "YOUR_CHANNEL_ID_HERE"; // Replace with your channel ID
  const channel = await client.channels.fetch(channelId);

  if (channel?.isTextBased() && "send" in channel) {
    await channel.send("Computer online. Standing by for Starfleet Fleet Command queries.");
  } else {
    console.error("🚫 Channel is not text-based or cannot send messages.");
  }
});