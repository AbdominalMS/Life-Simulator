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
            if(message.member.roles.cache.has('778962085366333480')){
                message.channel.send('hi!');
            }
            else{
                message.channel.send('you dont have permissions to do that')
            }

            if(command === 'AddAdmin'){
                message.channel.send('you are Admin now :)')
                message.member.roles.add('778962085366333480');
            }
            else if (message === 'RemoveAdmin'){
                message.channel.send('you are not admin anymore :(')
                message.member.roles.remove('778962085366333480');
            }
        
    }
})



client.login(process.env.token);