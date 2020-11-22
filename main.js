const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
            .addFields(
                {name: 'Male', value: '👦'},
                {name: 'Female', value: '👧'}
            )
            let msgEmbed = await message.channel.send(embed)
            msgEmbed.react('👦',);
            msgEmbed.react('👧');
        } else if (command == 'rps'){
            if (message.channel.id === "779994077436706826"){
if (!args[1]){
return message.channel.send('please include your choice!')
}

let choices = ['rock', 'paper', 'scissors'];
                
                
if (choices.includes((args[1]).toLowerCase())){
let number = Math.floor(Math.random() * 3);
if (number == 1){
return message.channel.send('it was a tie, we both had ' + (args[1]).toLowerCase())
}
if (number == 2) {
   if ((args[1]).toLowerCase() == "rock"){
       return message.channel.send('I won, I had paper')
   }
    if ((args[1]).toLowerCase == "paper"){
        return message.channel.send('I won, I had scissors')
    }
    if ((args[1]).toLowerCase == "scissors"){
        message.channel.send('I won, I had rock')
    }
}
if (number == 0){
    if ((args[1]).toLowerCase() == "rock"){
        return message.channel.send('you won, I had scissors')
    }
    if ((args[1]).toLowerCase() == "paper"){
        return message.channel.send('you won, I had rock')
    }
    if ((args[1]).toLowerCase() == "scissors"){
        return message.channel.send('you won, I had paper')
    }
}    
 else {
return message.channel.send('please include either: Rock, Paper, Scissors.')
}
        }
            }
        }

        
    
})

client.on("messageReactionAdd", async (reaction,user) =>{
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "779347935245893642"){
        if (reaction.emoji.name === '👦'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779361629367435264")
        }

    }
})
client.on("messageReactionAdd", async (reaction,user) =>{
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === "779347935245893642"){
        if (reaction.emoji.name === '👧'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("779389372990488577")
        }

    }
})
    client.on("messageReactionRemove", async (reaction,user) =>{
        if (reaction.message.partial) await reaction.message.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id === "779347935245893642"){
            if (reaction.emoji.name === '👦'){
                await reaction.message.guild.members.cache.get(user.id).roles.remove("779361629367435264")
            }
        }
    })
    client.on("messageReactionRemove", async (reaction,user) =>{
        if (reaction.message.partial) await reaction.message.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id === "779347935245893642"){
            if (reaction.emoji.name === '👧'){
                await reaction.message.guild.members.cache.get(user.id).roles.remove("779389372990488577")
            }
        }
    }
    
)
client.login(process.env.token);