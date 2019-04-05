// ==================================================================

 // THIS BOT [SHADDIX] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================

const prefix ="$";
const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '480540559233122324'
let cooldown = new Set();
let cdseconds = 5;

// ==================================================================

////////////////// [ 🔰 CONSOL SHADDIX LOGS 🔰 ] //////////////////

client.on('warn', console.warn);

client.on('error', console.error);

client.on('disconnect', () => console.log('🔰 I Just Disconnected, Making SureYyou Know, I Will Reconnect Now... 🔰'));

client.on('reconnecting', () => console.log('🔰 I Am Reconnecting Now ! 🔰'));

client.on('ready', function() {

    console.log(`🔰 [ ${client.user.username} ] : IS READY TO FIGHT NOW 🔰`);

});

// ==================================================================

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
var version = '2.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "SHADDIX IS BACK ONLINE NOW")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 HI, IM BACK [ONLINE] NOW & [UPDATED] 🚀**')
	    .addField('``Bot Name :``' , `★ SHADDIX - 2077 ★` , true)
	    .addField('``Bot Version :``' , `[ v2.0 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TDN™ - Servers :``', [ client.guilds.size ], true)
            .addField('``TDN™ - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TDN™ - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TDN™ Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ $ ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
});

// ==================================================================


client.on('ready', function(){
client.channels.get("529660118934224896").send("$SHADDIX IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });


// ==================================================================

client.on("message", async message => {
	
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
    const command = args.shift().toLowerCase();
	
    if(message.author.id != "480540559233122324") return;
	
    if(message.author.bot) return;
	
    if (command == "leaveserver") {
	    
        if(!args[0] || args[1]) return message.reply(`| Type : **${prefix}leaveserver & <guild_id>** | :x:`);
	    	  
        let GuildId = client.guilds.get(args[0])
	
        if(!GuildId) return message.reply(`**:x: | Guild "ID" Is Not Detected | :x:**`);
	    
        GuildId.leave().then(m => message.channel.send("Done | I Have Left : **["+GuildId.name+"]** Server | ✅"))
    }     
})

// ==================================================================

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
var version = '2.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {
      if(!message.content.startsWith(prefix)) return;
        if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // } 
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[SHADDIX] STATS** ')
	    .addField('``Bot Version :``' , `[ v2.0 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
	    .addField('``Bot Name :``' , `★ SHADDIX - 2077 ★` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TDN™ - Servers :``', [ client.guilds.size ] , true)
            .addField('``TDN™ - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TDN™ - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TDN™ - Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ $ ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
});

// ==================================================================

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    .addField('**● Bot Version** :robot: :' , `**[ v2.0 ]**`)
    .addField('**● Bot CMD** :keyboard: :' , `**Use $help For Bot Commands**`)
    .addField('**● Bot Owner** 👑 :' , `**[<@480540559233122324>]**`)
    .addField('**● Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
    .setTimestamp()
        guild.owner.send(embed)
  });

// ==================================================================

 client.on('message', message => {
    if(message.content === prefix + "shutdown") {
	    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));    
            client.channels.get("529660118934224896").send({
	    embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('dc322f')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [SHADDIX] IS SHUTDOWN NOW BY THE OWNERS !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		    });
            console.log(`${message.author.tag} [ ${message.author.id} ] Shaddix Has ShutDown Successfully.`);
            setTimeout(() => {
            client.destroy();
            },3000);
}
});    

// ==================================================================

client.on('message', message => {
    if(message.content === prefix + "restart") {
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("529660118934224896").send({
	     embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('b58900')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [SHADDIX] IS REBOOTING NOW !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		 });
	    console.log(`${message.author.tag} [ ${message.author.id} ] Shaddix Has Restarted Successfully.`);
            console.log(`Shaddix Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});

// ==================================================================

client.on('message', message => {
  if (message.content === ('$Shaddix')) {
    if(!message.content.startsWith(prefix)) return;
        if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // } 
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping** 🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
	  .addField('**Bot Version** :robot: :' , `[ v2.0 ]` , true)
          .addField('**Servers** 📚 :', [client.guilds.size], true)
          .addField('**Channels** 📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users** 🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name** 🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner** 👑 :' , `[ <@480540559233122324> ]` , true)
          .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
          .setTimestamp()
  })
}
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
});

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
       if(!message.content.startsWith(prefix)) return;
         if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }  
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .addField('**● BOT - VERSION** :robot: :' , `**[ v2.0 ]**`)
  .addField('**● BOT - OWNER** 👑 :' , `**[ <@480540559233122324> ]**`)
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:rainbow: [❖═══ ● Shaddix Rainbow Bot Commands ● ════❖] :rainbow:  
  
❖═════════════════════════════════════❖  

● :signal_strength: : $Shaddix :arrow_right: STATS BOT ●

● :rainbow: : $TDN :arrow_right: $TDN (Role Name) ●

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

❖═════════════════════════════════════❖  

:hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts:**`) 

.setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
.setTimestamp()
message.author.sendEmbed(embed)
	   
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	   
  }
	
});

// ==================================================================

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
    if(command === "TDN") {
      if(!message.content.startsWith(prefix)) return;
        if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }      
        if(!message.member.hasPermission("ADMINISTRATOR")) {
		
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription("**:warning: | You Must Have The Administrator Permission | :warning:**")
	    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	    .addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription("**:warning: | : I Must Have The Administrator Permission**")
	    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	    .addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

		if(!message.member.guild.roles.find(role => role.name === args.join(" "))) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(":rainbow: | Type : **`$TDN (Role Name)`** | :rainbow:")
	    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	    .addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }

        if(message.member.guild.roles.find(role => role.name === args.join(" ")) === null) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription(":warning: : | **Something Went Wrong** | :warning:")
	    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	    .addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }


        if(message.member.guild.roles.find(role => role.name === args.join(" ")).position >= message.guild.me.highestRole.position) {
            const embed = new Discord.RichEmbed()
	    .setThumbnail(client.user.avatarURL)
            .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
            .setColor('RANDOM')
            .setDescription("**:warning: : | (SHADDIX) Role Must Be Higher Than The Mentioned Role !**")
	    .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	    .addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	    .setTimestamp()
            message.channel.send({embed});
            return;
        }


        const embed = new Discord.RichEmbed()
        .setAuthor("★ SHADDIX - RAINBOWBOT ★", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setDescription("**:white_check_mark: | : Successfully Applied Shaddix Rainbow Colors To : **`" + args.join(" ") + "`**" + "\n" +
        ":warning: | : This Only Lasts (72) Hours, Then it Will Stop Working. You Can Still Apply it Whenever You'd Like !**")
	.setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
	.addField(':robot: | SHADDIX - VERSION :' , `**[ v2.0 ]**`)
	.addField('👑 | BOT - OWNER :' , `**[ <@480540559233122324> ]**`)
        .addField(':keyboard: | BOT - CMD :' , `**Use $help For Bot Commands**`)
	.setTimestamp()
        message.channel.send({embed});

        client.colors[message.guild.name] = {
            guild: message.guild.id,
            role: args.join(" "),
            date: new Date().getTime()
        }

    }
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
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

// ==================================================================

client.on('ready', function(){//npm i ms 
 client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ $help | RainBowBot ★`,`★ SERVERS : [${client.guilds.size}] ★`,`★ THE TDN™ ★`];
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

});

// ==================================================================

client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [SHADDIX] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
