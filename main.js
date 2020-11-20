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

    if (command === 'admin'){
        if(message.member.roles.cache.has('779120873466101830')){
        message.member.roles.add('778962085366333480');
        message.channel.send('you are Admin now! :)');
        } if(message.member.roles.cache.has('778962085366333480')){
            message.channel.send('you already have an Admin');
        }
     } else if(command == 'admin-'){
         if(message.member.roles.cache.has('778962085366333480')){
        message.member.roles.remove('778962085366333480');
        message.channel.send('you are not Admin anymore!');
        if (message.member.roles.cache.has('779120873466101830'))
           message.channel.send('you are already not an Admin!');
         }
        }  else if(command == 'hi'){
            message.channel.send('hi!'); 
        }
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setDescription('this is server Rules')
        .addFields(
            {name: 'Rule1', value: 'Be nice'},
            {name: 'Rule2', value: 'Be nice'},
            {name: 'Rule3', value: 'Be nice'}
        ) 
        .setImage('https://placekitten.com/200/300')
        .setFooter('plz follow the rules');
         if(command === 'embed'){
             message.channel.send(newEmbed);
        
        }
    
})



.setImage
client.login(process.env.token);