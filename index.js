'use strict';

// Constant Variables
const { Client, MessageEmbed } = require('discord.js');
const token = 'NjkwMDE4NzAxNTgzNzEyMjcz.XnLUbQ.qzP_sgOqaMyNmEEmCFHOpU5DFMQ';
const prefix = "!";
const client = new Client();


client.on('ready', () => {
  console.log('I am ready!');
});


//Basic bot help commands
client.on('message', message => {
 
  if (message.content === (prefix + "help")) {
    
    const helpEmbed = new MessageEmbed()
     .setTitle('----RC Bot Info----')
     .setColor(0xff0000)
     .setDescription('Current Prefix: ' + prefix 
     + '\n Bot Created By: @MrJesseh');

   
    message.channel.send(helpEmbed);
  }
});

client.on('message', message => {
    if(message.content === (prefix + "ping")){
        message.reply("Pong!");
    }
});

// Logs on to the bot.
client.login(token);