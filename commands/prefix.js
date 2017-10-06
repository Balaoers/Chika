exports.run = (client, message, args) => {
	const Discord = require('discord.js');
	const embed = new Discord.RichEmbed()
		.addField("PREFIX","current prefix is c!");
	message.channel.send({embed});
}