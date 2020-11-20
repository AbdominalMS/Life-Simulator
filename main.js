const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';



    



client.once('ready', () => {
    console.log('im online');
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Rules')
    .setDescription('this is server Rules')
    .addFields(
        {name: 'Rule1', value: 'Be nice'},
        {name: 'Rule2', value: 'No Spamming'},
        {name: 'Rule3', value: 'Be nice'}
    ) 
    .setImage('https://www.google.com/search?q=Rules+image&sxsrf=ALeKk00o0l4IL6EdYlfUW_4yRJEZVrk49Q:1605877152126&tbm=isch&source=iu&ictx=1&fir=vr6B2BGb-wzU8M%252C8EFsFGDnL3nSyM%252C_&vet=1&usg=AI4_-kQRy4uiqPmR6kQpNuK3Pld8FwD2CQ&sa=X&ved=2ahUKEwiG6NHJlpHtAhWFQxUIHTbfDgsQ9QF6BAgLEFg#imgrc=vr6B2BGb-wzU8M')
    .setFooter('plz follow the rules');
    if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
    if(isNaN(args[0])) return message.reply("please enter a real number!");
    if(args[0] > 100) return message.reply("you can not delete more than 100 message!");
    if(args[0] < 1) return message.reply("you must delete atleast one message!");
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
        } else if(command == 'rules'){
            message.channel.send(newEmbed);

        } else if(command == 'reactions'){
            const embed = new Discord.MessageEmbed()
            .setTitle('Reactions Roles')
            .setDescription('React to gain the role!')
            .setColor('GREEN')
            let msgEmbed = await message.channel.send(embed)
            msgEmbed.react('😎')
        }

        
    
})

client.login(process.env.token);