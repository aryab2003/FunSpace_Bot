const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply({
    content: "Hey Arya Has set me up just for your assistance! Feel Free!!",
  });
});

client.on("interactionCreate", (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "ping") {
      interaction.reply("Pong!");
    } else if (commandName === "hello") {
      interaction.reply("Hello there!");
    } else if (commandName === "serverinfo") {
      const guild = interaction.guild;
      const memberCount = guild.memberCount;
      const serverName = guild.name;

      interaction.reply(
        `Server Name: ${serverName}\nMember Count: ${memberCount}`
      );
    } else if (commandName === "github") {
      interaction.reply(
        "Here's the link to GitHub:https://github.com/aryab2003/FunSpace_Bot"
      );
    } else if (commandName === "emoji") {
      const emoji = getRandomEmoji();
      interaction.reply(emoji);
    }
  } catch (error) {
    console.error("Error processing interaction:", error);
  }
});

function getRandomEmoji() {
  const emojis = ["😄", "😎", "🥳", "🤖", "🎉", "🚀", "👾", "🤗"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

client.login(
  "MTIyMDc4ODM4NjczNTA2MzE2MA.GkKYN4.xAHpwWZTi7tekDLT9jNIzWBo0qXxvraMiPBFT0"
);
