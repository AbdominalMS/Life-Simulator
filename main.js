const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '!-';



    



client.once('ready', () => {
    console.log('im online');
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
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
   
           if (command === 'hi'){
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
            
              let rps = ["scissors", "paper", "rock"];
let i;
if(!rps.includes(args[0])) return message.reply("Please choose rock, paper or scissor.");
if(args[0].includes("rock")) {
i = 2;
}
if(args[0].includes("paper")) {
i = 1;
}
if(args[0].includes("scissors")) {
i = 0;
}
if(rps[i]) {
let comp = Math.floor((Math.random() * 3) + 1);
let comp_res = parseInt(comp) - parseInt("1");
let comp_val = rps[parseInt(comp_res)];
  if(i === comp_res) {
    return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and we tied, wanna try again?`); 
  }
  if(i > comp_res) {
    return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and I won! Well played.`);
  } 
  if(i < comp_res) {
    return message.channel.send(`You chose **${args[0]}** and I chose **${comp_val}** and I lost! Congrats on winning!`);
  }
}
        } else if (command == 'ban'){
            const { member, mentions } = postMessage
            const tag = `<@${member.id}>`
            
            if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')){
                const target = mentions.users.first()
                if (target){
                    const targetMember = message.guild.members.cache.get(target.id)
                    targetMember.ban()
                    message.channel.send(`${tag}`)
                }
                else {
                    message.channel.send(`${tag}please specify someone to ban`)
                }
            }
            else {
                message.channel.send(`${tag}you do not have permission to use this command`)
            }
            
        }  else if (command == 'clear'){ 
            if (guild.member.hasPermisssion('ADMINISTRATOR')){
            if(!args[0]) return message.channel.reply("please Enter the amout of messages that you want to clear")
            if(isNaN(args[0])) return message.reply("please Enter a real number")
            if (args[0] > 100) return message.reply("you can't delete more than 100 messages!")
            if (args[0] < 1)   return message.reply("you must delete atleast one message!")
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
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