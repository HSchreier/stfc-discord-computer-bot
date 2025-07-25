import { config } from "dotenv";
import { client } from "./config/client";
import { handleMessage } from "./commands/dispatcher";

config();

client.once("ready", () => {
  console.log(`🖖 Computer is online as ${client.user?.tag}`);
});

client.on("messageCreate", async (message) => {
  handleMessage(message);
});

client.login(process.env.DISCORD_TOKEN);