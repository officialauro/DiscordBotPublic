const { Client, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


//Telling Client/User that the bot is infact turned on and ready. Just a measure to make sure it is infact working
client.on('ready', (c) => {
    console.log(`${c.user.tag}`, 'is turned on')
});

client.on('messageCreate', (message) => {
    if (message.author.bot) { //This is to ensure that the bot does not listen to itself when you say help if message.content and message.reply is the same.
        return;
    }

    if (message.content === 'hello') { //This makes the bot listen for the word "hello" once it see's that someone has said that it'll then reply with something down at message.reply
        message.reply('hi');
    }
});

client.login(token);

