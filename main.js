const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';



    



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
        } else if (command == 'snakegame'){
            const WIDTH = 15;
const HEIGHT = 10;
const gameBoard = [];
const apple = { x: 1, y: 1 };

class SnakeGame {
    constructor() {
        this.snake = [{ x: 5, y: 5 }];
        this.snakeLength = 1;
        this.score = 0;
        this.gameEmbed = null;
        this.inGame = false;
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                gameBoard[y * WIDTH + x] = "🟦";
            }
        }
    }

    gameBoardToString() {
        let str = ""
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                if (x == apple.x && y == apple.y) {
                    str += "🍎";
                    continue;
                }

                let flag = true;
                for (let s = 0; s < this.snake.length; s++) {
                    if (x == this.snake[s].x && y == this.snake[s].y) {
                        str += "🟩";
                        flag = false;
                    }
                }

                if (flag)
                    str += gameBoard[y * WIDTH + x];
            }
            str += "\n";
        }
        return str;
    }

    isLocInSnake(pos) {
        return this.snake.find(sPos => sPos.x == pos.x && sPos.y == pos.y);
    };

    newAppleLoc() {
        let newApplePos = { x: 0, y: 0 };
        do {
            newApplePos = { x: parseInt(Math.random() * WIDTH), y: parseInt(Math.random() * HEIGHT) };
        } while (this.isLocInSnake(newApplePos))

        apple.x = newApplePos.x;
        apple.y = newApplePos.y;
    }

    newGame(msg) {
        if (this.inGame)
            return;

        this.inGame = true;
        this.score = 0;
        this.snakeLength = 1;
        this.snake = [{ x: 5, y: 5 }];
        this.newAppleLoc();
        const embed = new Discord.MessageEmbed()
            .setColor('#03ad03')
            .setTitle('Snake Game')
            .setDescription(this.gameBoardToString())
            .setTimestamp();

        msg.channel.send(embed).then(emsg => {
            this.gameEmbed = emsg;
            this.gameEmbed.react('⬅️');
            this.gameEmbed.react('⬆️');
            this.gameEmbed.react('⬇️');
            this.gameEmbed.react('➡️');

            this.waitForReaction();
        });
    }

    step() {
        if (apple.x == this.snake[0].x && apple.y == this.snake[0].y) {
            this.score += 1;
            this.snakeLength++;
            this.newAppleLoc();
        }

        const editEmbed = new Discord.MessageEmbed()
            .setColor('#03ad03')
            .setTitle('Snake Game')
            .setDescription(this.gameBoardToString())
            .setTimestamp();
        this.gameEmbed.edit(editEmbed);

        this.waitForReaction();
    }

    gameOver() {
        this.inGame = false;
        const editEmbed = new Discord.MessageEmbed()
            .setColor('#03ad03')
            .setTitle('Snake Game')
            .setDescription("GAME OVER!\nSCORE: " + this.score)
            .setTimestamp();
        this.gameEmbed.edit(editEmbed);

        this.gameEmbed.reactions.removeAll()
    }

    filter(reaction, user) {
        return ['⬅️', '⬆️', '⬇️', '➡️'].includes(reaction.emoji.name) && user.id !== this.gameEmbed.author.id;
    }

    waitForReaction() {
        this.gameEmbed.awaitReactions((reaction, user) => this.filter(reaction, user), { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                const snakeHead = this.snake[0];
                const nextPos = { x: snakeHead.x, y: snakeHead.y };
                if (reaction.emoji.name === '⬅️') {
                    let nextX = snakeHead.x - 1;
                    if (nextX < 0)
                        nextX = WIDTH - 1;
                    nextPos.x = nextX;
                }
                else if (reaction.emoji.name === '⬆️') {
                    let nextY = snakeHead.y - 1;
                    if (nextY < 0)
                        nextY = HEIGHT - 1;
                    nextPos.y = nextY;
                }
                else if (reaction.emoji.name === '⬇️') {
                    let nextY = snakeHead.y + 1;
                    if (nextY >= HEIGHT)
                        nextY = 0;
                    nextPos.y = nextY;
                }
                else if (reaction.emoji.name === '➡️') {
                    let nextX = snakeHead.x + 1;
                    if (nextX >= WIDTH)
                        nextX = 0;
                    nextPos.x = nextX;
                }

                reaction.users.remove(reaction.users.cache.filter(user => user.id !== this.gameEmbed.author.id).first().id).then(() => {
                    if (this.isLocInSnake(nextPos)) {
                        this.gameOver();
                    }
                    else {
                        this.snake.unshift(nextPos);
                        if (this.snake.length > this.snakeLength)
                            this.snake.pop();

                        this.step();
                    }
                });
            })
            .catch(collected => {
                this.gameOver();
            });
    }
}

        }
            
        
       
   
 else if (command == 'args'){
            if (!args.length) {
                return message.channel.send(`you have not input any arguments, ${message.author}!`)
            }
            
            message.channel.send(`command name: ${command}\nArguments: ${args}`)
        } else if (command == 'clear'){
            if(!args[0]) return message.channel.reply("please Enter the amout of messages that you want to clear")
            if(isNaN(args[0])) return message.reply("please Enter a real number")
            if (args[0] > 100) return message.reply("you can't delete more than 100 messages!")
            if (args[0] < 1)   return message.reply("you must delete atleast one message!")
            
            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            })
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