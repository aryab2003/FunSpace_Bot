const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "hello",
    description: "Greets the user with a hello message from arya!",
  },
  {
    name: "serverinfo",
    description: "Displays information about the server.",
  },

  {
    name: "github",
    description: "Opens Github",
  },
  {
    name: "emoji",
    description: "Sends a random emoji",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIyMDc4ODM4NjczNTA2MzE2MA.GkKYN4.xAHpwWZTi7tekDLT9jNIzWBo0qXxvraMiPBFT0"
);

async function refreshCommands() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1220788386735063160"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

refreshCommands();
