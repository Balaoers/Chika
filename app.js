const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var fs = require('fs');

let bucksData = JSON.parse(fs.readFileSync(`./storage/bucksdata.json`, 'utf8'));

client.on("ready", () => {
    client.user.setPresence({game: {name: "Code Simulator", type: 0}});
});

const talkedRecently = new Set();
client.on("message", (message) => {

	//anti-botception
	if (message.author.bot) return;

	//args definition
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	//command loader
	if (message.content.startsWith(config.prefix.toLowerCase())) {
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, message, args);
		} catch (err) {
			console.error(err);
		}
	}

	//data initializer
	if (!bucksData[message.author.id]) bucksData[message.author.id] = {
	    leanbucks: 0,
	    exp: 0
  	};

  	//adding points
  	if (!(talkedRecently.has(message.author.id))){
  		bucksData[message.author.id].leanbucks += Math.floor((Math.random()*5)+5);
  		bucksData[message.author.id].exp += Math.floor((Math.random()*5)+10);
  	}
  	talkedRecently.add(message.author.id);
  	setTimeout(() => {
	  	talkedRecently.delete(message.author.id);
	}, 300000);

  	//save data to database
  	fs.writeFile("./storage/bucksdata.json", JSON.stringify(bucksData), (err) => {
  		if (err) console.log(err);
  	});
});

client.login(config.token);