const prefix ="$";
const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '529387209078472704'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log('GEM Is Online Now !')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
});

 client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You Aren\'t The Bot Owner !**');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Shaddix Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Shaddix Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] Shaddix Has Restarted Successfully.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});

client.on('message', message => {
  if (message.content === ('$Shaddix')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers**📚 :', [client.guilds.size], true)
          .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner**👑 :' , `[<@480540559233122324>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
   if(message.author.id !== "480540559233122324") return message.reply('**:x: SORRY MATE THIS COMMANDS ONLY FOR BOT OWNER :x:**');
 
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**');
   const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:rainbow: [❖═════ ● Shaddix Rainbow Bot Commands ● ═══════❖] :rainbow:  
  
❖═════════════════════════════════════❖  

● :signal_strength: : $Shaddix :arrow_right: STATS BOT ●

● :rainbow: : $TG :arrow_right: $TG (Role Name) ●

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

❖═════════════════════════════════════❖  

:hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts: 

:zap: ─══ {✯ ● Bot Made By ŦĐŇ™漫Ranger√ ⚡#4474 ● ✯} ══─ :zap:

● The DamNation™ - Official :copyright: **`);

message.author.sendEmbed(embed)
  }
});


client.colors = {}

//let rainbow = 20;

 client.on("ready", async () => {

  });
    client.setInterval(() =>{

        //adding this so it doesnt start doing weird stuff
        //try to change role color for every server
        for(let i in client.colors) {
            let guildId = client.colors[i].guild;
            let guild = client.guilds.get(guildId);
            let date = client.colors[i].date;


            //if 72 hours have passed, remove from config
            if(date < new Date().getTime() - 259200000) {
                 delete client.colors[i];
                return;
            }

            //if server gets deleted or bot gets kicked, remove from config
            if(guild === null) {
                delete client.colors[i];
                return;
            }
            //try to change the role
            try{
                guild.roles.find(role => role.name === client.colors[i].role).setColor(rainbow[place])
                
                .catch(err => { 
                    delete client.colors[i]
                   
                    return;
                });
            }catch(err){
                delete client.colors[i]
                return;
            }
        }
        	if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
        //Every 10 seconds change it
    }, 2000)


client.on('message', message => {
    var prefix = "$"
  if (!message.content.startsWith(prefix)) return; 
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
    if(command === "TG") {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("**:warning: You Must Have The Administrator Permission :warning:**")
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("**:warning: : I Must Have The Administrator Permission :warning:**")
            message.channel.send({embed});
            return;
        }

		if(!message.member.guild.roles.find(role => role.name === args.join(" "))) {
            const embed = new Discord.RichEmbed()
            .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription(":rainbow: Usage : **`$TG (Role Name)`** :rainbow:")
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find(role => role.name === args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
            .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription(":warning: : **Something Went Wrong** :warning:")
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find(role => role.name === args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
            .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription(":warning: : **SHADDIX : (RainColor) Role Must Be Higher Than The Mentioned Role !** :warning: :")
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("SHADDIX - RAINBOWBOT", client.user.avatarURL)
        .setColor(0xE7F436)
        .setDescription("**:white_check_mark: : Successfully Applied Shaddix Rainbow Colors To **`" + args.join(" ") + "`**" + "\n" +
        ":warning: : This Only Lasts (72) Hours, Then it Will Stop Working. You Can Still Apply it Whenever You'd Like !**")
        message.channel.send({embed});

        client.colors[message.guild.name] = {
            guild: message.guild.id,
            role: args.join(" "),
            date: new Date().getTime()
        }

    }
});


const size    = 12
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
	rainbow[i] = '#'+ red + green + blue;
}
function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / size * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? '0'+hex : hex;
}
let place = 0;

client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = ['★ $help | RainBowBot ★','★ TDN™ | Server ★ ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

})

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

var version = '1.3';
client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
    if(!message.channel.guild) return message.reply('** :x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``SHADDIX STATS`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField('``Node``' , `[${process.version} ]` , true)
                  .addField('``My Prefix``' , `$` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | TheRareRanger')
    })
}
});

client.login(process.env.BOT_TOKEN);
