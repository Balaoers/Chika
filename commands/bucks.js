exports.run = (client, message, args) => {
	const fs = require("fs");
	let bucksData = JSON.parse(fs.readFileSync(`./storage/bucksdata.json`, "utf8"));
	let sender = message.author;
	let receiver = message.mentions.users.first();

	if (args.length > 0){
		if (args[0] === "check") {
			message.channel.send(`| **${receveir.username}, have ${bucksData[receiver.id].leanbucks} Leanbucks!**`);
			return;
		}
	}
}