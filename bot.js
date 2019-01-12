const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '480540559233122324'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame( `★ TheDamNation™ ★`,"https://www.twitch.tv/TheRealPredvkill")
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
    console.log('Naomi Is Online Now !')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
});

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.on('message', message => {
  if (message.content === ('!naomi')) {
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
    
   message.channel.send('**:white_check_mark: DONE!! check private   **');
   const embed = new Discord.RichEmbed() 
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:rose:  [❖═════ Naomi Rainbow Bot Commands ═══════❖] :rose: 
  
❖═════════════════════════════════════❖  

● !Naomi :arrow_right: STATS BOT.
● !TDN :arrow_right: !TDN (Role Name).
● !Ping :arrow_right: BOT PING. 

❖═════════════════════════════════════❖

:zap: NAOMI BOT MADE BY : THE RARE RANGER :zap:
 **`);

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
                guild.roles.find("name", client.colors[i].role).setColor(rainbow[place])
                
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
    }, 500)


client.on('message', message => {
    var prefix = "!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
    if(command === "stats") {
        var time = process.uptime();
        var uptime = (time + "").toHHMMSS();

        const embed = new Discord.RichEmbed()
        .setTitle(":tools: Stats")
        .setColor(0x009688)
        .setDescription( 
        ":crown: " +              "Servers: " + client.guilds.size + "\n" + 
        ":bust_in_silhouette: " + "Users: " + client.users.size + "\n" + 
        ":clock12: " +            "Uptime: " + uptime)
        message.channel.send({embed});
    }
    if(command === "TDN") {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("TDN", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("**:warning: You Must Have The Administrator Permission :warning:**")
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
            .setAuthor("TDN", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("**:warning: I Must Have The Administrator Permission :warning:**")
            message.channel.send({embed});
            return;
        }
		
		if(!message.member.guild.roles.find("name", args.join(" "))) {
            const embed = new Discord.RichEmbed()
            .setAuthor("TDN", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription(":warning: Usage : **`!TDN (Role Name)`** :warning:")
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find("name", args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
            .setAuthor("TDN", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription(":warning: Something Went Wrong :warning:")
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find("name", args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
            .setAuthor("TDN", client.user.avatarURL)
            .setColor(0x4336F4)
            .setDescription("Naomi : :warning: **RainColor** Role Must Be Higher Than The Mentioned Role !")
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("Rainbow", client.user.avatarURL)
        .setColor(0xE7F436)
        .setDescription(":white_check_mark: Successfully Applied Naomi Rainbow Colors To **`" + args.join(" ") + "`**" + "\n" +
        "Note : :warning: This Only Lasts 72 Hours, Then it Will Stop Working. You Can Still Apply it Whenever You'd Like !")
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

client.login(process.env.BOT_TOKEN);
