const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';



    



client.once('ready', () => {
    console.log('im online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hi'){
        message.channel.send('hi!');
    } else if(command == 'Admin'){
        message.member.roles.add('778962085366333480');
        message.channel.send('you are Admin now! :)');
    }
})



client.login(process.env.token);