exports.run = (client, message, args) => {
	const Discord = require("discord.js");
	var fs = require('fs');
	let bucksData = JSON.parse(fs.readFileSync(`./storage/bucksdata.json`, 'utf8'));
	//level design 
	//Level = Math.max( Math.floor( constA * Math.log( XP + constC ) + constB ), 1 )
	const constA = 30;
	const constB = -200;
	const constC = 120;
	var xp = bucksData[message.author.id].exp;
	var level = Math.min(Math.max(Math.floor(constA*Math.log(xp +constC )+constB ),1),999);
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username+"'s Profile")
		.addField(`:up: Level: ${level}/999`, `**${xp}** Experience Points`, true)
		.addField(":moneybag: Leanbucks: ", `**${bucksData[message.author.id].leanbucks}**`, true)
		.addField(":crossed_swords: Duels (Win/Loss): ", "0/0", true)
		.addField(":scroll: Dungeons (Success/Fail): ", "0/0", true);
	message.channel.send({embed});
}