exports.run = (client, message, args) => {
	const rarity = [1,14,35,50];
	var output = [0,0,0,0];
	const type = ["rare", "uncommon", "common", "trash"];
	const emoticon = [":blowfish:", ":tropical_fish:", ":fish:", ":wastebasket:"];

	if (args.length > 0) {
		if (args[0] === "net") {
			for (var i=0; i<10; i++){
				generateFish();
			}
			displayOutput("net");
			return;
		}
		if (args[0] === "pole") {
			generateFish();
			return;
		}
	}
	generateFish();
	displayOutput("pole");

	function generateFish() {
		var range = 0;
		for (var i=0; i<rarity.length; i++) {
			range += rarity[i];
		}

		var rng = Math.random()*range;
		console.log("RNG: " + rng);
		var top = 0;

		for (var i=0; i<rarity.length; i++) {
			top += rarity[i];
			if (rng<top) {
				output[i]++;
				return;
			}
		}
	}

	function displayOutput(met) {
		const Discord = require('discord.js');
		if (met === "pole") {
			for (var i=0; i<output.length; i++) {
				if (output[i]>0) {
					const embed = new Discord.RichEmbed()
						.setColor(0x32CD32)
						.addField("CAUGHT", type[i] + " " +emoticon[i]);
					message.channel.send({embed});
					return;
				}
			}
		}
		if (met === "net") {
			var txt = ":fishing_pole_and_fish: | caught ";
			for (var i = 0; i<output.length; i++) {
				txt += "[" + output[i] + " " + type[i] + " " + emoticon[i] + "]";
			};
			const embed = new Discord.RichEmbed()
				.setColor(0x32CD32)
				.addField("CAUGHT", txt);
			message.channel.send({embed});
		}
	}
}