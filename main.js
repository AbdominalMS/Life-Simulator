const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});


const prefix = '!-';



    
const fs = require("fs");
client.msgs = require("./msgs.json");



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
        } else if (command == 'kick'){
            if(message.member.hasPermission("KICK_MEMBERS")){
      // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
            }
    }
    
      else if (command == 'ban'){
                     if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you dont have permissions')
            let user = message.mentions.users.first();
            
            let member = message.guild.member(user);
            let reason = args.slice(1).join(" ");
            
            if(!user) return message.channel.send("please mention the user");
            if(user.id === message.author.id) return message.channel.send("you cant ban yourself");
            if(user.id === client.user.id) return message.channel.send("you can't ban me")
            if(!reason) reason = "No reason specified"
            
            member.ban(reason).then(() => {
                message.channel.send(`successfuly banned ${user.tag}`);
            }).catch(err => {
                message.reply("I was unable to ban the member.");
            })
      }

            
         else if (command == 'clear'){ 
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_ROLES ')){
            if(!args[0]) return message.channel.reply("please Enter the amout of messages that you want to clear")
            if(isNaN(args[0])) return message.reply("please Enter a real number")
            if (args[0] > 100) return message.reply("you can't delete more than 100 messages!")
            if (args[0] < 1)   return message.reply("you must delete atleast one message!")
                const deleted = args[0];
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
                setTimeout(() =>{
                    message.channel.send(`${deleted}Messages Deleted`)
                },1000)
                setTimeout(() => {
                    message.delete()
                },2000)
            }
        } 
          else if (command == 'love'){
            if (args[0] === 'you' || args[0] === 'u'){
                if (args[1] == 'bot'){
                    message.channel.send('love you too!')
                }
            }
        }
               else if (command == 'how'){
                   if (args[0] === 'are' || args[0] === 'r'){
                       if (args[1] == 'you' || args[1] == 'you?'){
                           let replies = ["i'm good","i'm fine","i'm ok"]
                           let random = Math.floor(Math.random() * 3);
                           
                           message.channel.send(`${replies[random]},what about you?`)
                       }
                   }
               } else if (command == 'sosasosi'){
                   message.channel.send('sosasosi!!!');
               } else if (command == 'bad'){
                   message.channel.send('oh,why?');
               } else if (command == 'yes' || command == 'yes!'){
                   message.channel.send('no!')
               } else if (command == 'no' || command == 'no!'){
                   message.channel.send('yes');
               } else if (command == 'good'){
                   let replies = ["what is ur fav cake?", "how is ur day?", "what is ur favourite color?"];
                   let random = Math.floor(Math.random() * 3);
                   
                   message.channel.send(replies[random]);
                   
                  
               }
                else if (command == 'fav'){
                    let replies = ["omg, i love it too!", "oh, i like it too!", "oh i don't like it ;-;"];
                    let random = Math.floor(Math.random() * 3);
                    if (args[0] === 'cake'){
                        message.channel.send(replies[random]);
                    }
                    else if (args[0] == 'color'){
                        message.channel.send(replies[random]);
                    }
                } else if (command == 'game'){
                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#304281')
                    .setTitle('Games')
                    .setDescription('choose a game')
                    .addFields(
                        {name: 'Game1',value: 'RPS'},
                        {name: 'Game2', value: 'Guess'}
                    )
                    .setFooter('if u want to know how to know how use games command type !-help <command>');
                    message.channel.send(newEmbed);
                    
                } else if (command == 'guess'){
                    
                   let numbers = [1,2,3,4,5,6,7,8,9,10]
                   let random = Math.floor(Math.random() * numbers.length)
                   const answer = args[0];
                   if (isNaN(answer)){
                       message.channel.send('please enter a number between 1 -10')
                   } else {
                       if (answer < 11){

                    if (answer == numbers[random]){
                        message.channel.send(`Correct it was ${numbers[random]}`);
                    }
                    else if (answer !== numbers[random]){
                        message.channel.send(`Wrong it was ${numbers[random]}`);
                    }
                    }
                }
                    
                   
                    
                    
                } else if (command == 'write'){
                    editedmessage = message.content.slice (7);
                    
                    client.msgs [message.author.username] = {
                        message: editedmessage
                    }
                    fs.writeFile ("./msgs.json", JSON.stringfy (client.msgs, null, 4), err =>{
                        if (err) throw err;
                        message.channel.send("message written");
                        
                    });
                    
                } else if (command == 'get'){
                    let _message = client.msgs[message.author.username].message;
                     const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Note')
    .setDescription('this is your text')
    .addFields(
        {name: 'message is:', value: _message}
    ) 
                    message.channel.send(newEmbed);
                } 
    
    else if (command == 'help'){
                    if (args[0] == 'rps'){
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor('#304281')
                        .setTitle('rps command')
                        .addFields(
                    {name: 'type', value: '!-rps <your choice>'}
                            
                        );
                        message.channel.send(newEmbed);
                    } else if (args[0] == 'guess'){
                        const guessEmbed = new Discord.MessageEmbed()
                        .setColor('#304281')
                        .setTitle('Guess command')
                        .addFields(
                        {name: 'type', value: '!-guess <a number from 1 - 10>'}
                        );
                        message.channel.send(guessEmbed);
                    }
              
                }
                else if (command == 'hug'){
                    const hug = ['https://images-ext-1.discordapp.net/external/RamYa5u0Pzqr4_KwCMf0YNEF-vDTZGAhWEjHWVJ2bRs/https/cdn.weeb.sh/images/SywetdQvZ.gif','https://tenor.com/view/noragami-kofuku-daikoku-hugging-love-gif-14637016']
                    const random = Math.floor(Math.random() * hug.length)
                    message.channel.send(`${message.author} sent a hug to ${message.mentions.members.first()} ${hug[random]}`);
                }
                else if (command == 'kill'){
                   const kill = ['https://tenor.com/view/fire-arm-fire-destroy-destruction-anime-gif-17223062','https://giphy.com/gifs/halloween-costumes-3oEduSQonFIXK55aQo','https://tenor.com/view/akame-ga-kill-anime-fight-shoot-girl-gif-17763115','https://tenor.com/view/kill-smack-anime-gif-9955653' ]
                    const random = Math.floor(Math.random() * kill.length)
                    message.channel.send(`${message.author} Killed ${message.mentions.members.first()}${kill[random]} `);
                } else if (command == 'pat'){
                    const pat = ['https://tenor.com/view/anime-good-girl-pet-pat-gif-9200932','https://tenor.com/view/pat-cute-kawaii-anime-asterisk-gif-13792462','https://tenor.com/view/kanna-kamui-pat-head-pat-gif-12018819','https://tenor.com/view/anime-pat-smile-cute-blush-gif-16456868','https://tenor.com/view/charlotte-pat-blush-embarrassed-shy-gif-5081286','https://tenor.com/view/neet-anime-cute-kawaii-pat-gif-9332926'];
                    const random = Math.floor(Math.random() * pat.length);
                    message.channel.send(`${message.author} sent a pat to ${message.mentions.members.first()}${pat[random]}`)
                }
                else if (command == 'friend'){
                    if (!message.mentions.members.first()){
                        message.channel.send('who you want to friends?!')
                    }
                    else if (message.mentions.members.first()){
                    message.channel.send(`${message.author} Sent you friend request do you accept? ${message.mentions.members.first()}`)
                }
            } else if (command == 'slap'){
            const slap = ['https://tenor.com/view/bunny-girl-slap-angry-girlfriend-anime-gif-15144612','https://tenor.com/view/girl-slap-anime-mad-student-gif-17423278','https://tenor.com/view/no-angry-anime-slap-gif-7355956','https://tenor.com/view/anime-slap-slap-in-the-face-smash-gif-17314633','https://tenor.com/view/anime-manga-japanese-anime-japanese-manga-toradora-gif-5373994','https://tenor.com/view/anime-slap-hit-hurt-angry-gif-12396060'];
                const random = Math.floor(Math.random() * slap.length);
                message.channel.send(`${message.author} Slapped you!! ${message.mentions.members.first()}${slap[random]}`)
            }   else if (command == 'punch'){
            const punch = ['https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446','https://tenor.com/view/toradora-punch-gif-10769541'];
            const random = Math.floor(Math.random() * punch.length);
            message.channel.send(`${message.author} Punch!! ${message.mentions.members.first()}${punch[random]}`)
                
            } else if (command == 'dm'){
                const user = message.author;
                const mention = message.mentions.members.first();
                if (!mention){
                    message.channel.send('Done!')
                user.send('ok');
                }
                if (mention){
                    const send = args.join(" ");
                    if (!send){
                        message.channel.send(`what you want to send to ${mention}`);
                    }
                    if (send){
                        
                         mention.send(`${user} send you this "${send}"`)
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