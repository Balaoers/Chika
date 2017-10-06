exports.run = (client, message, args) => {
	var dungeons = new Array(18);
	dungeons[0] = "Virtua Forest";
	dungeons[1] = "Monster Cave";
	dungeons[2] = "West Wind Valley";
	dungeons[3] = "Thelad Sanctuary";
	dungeons[4] = "Avenir Storage No.3";
	dungeons[5] = "MS Mountain";
	dungeons[6] = "Marubaco Forest";
	dungeons[7] = "Halo Mountain";
	dungeons[8] = "Lowee Snowfield";
	dungeons[9] = "Avenir Storage No.4";
	dungeons[10] = "Hyrarule Snowfield";
	dungeons[11] = "Stella Plains";
	dungeons[12] = "Fantasy Zone";
	dungeons[13] = "Neo-Geofront";
	dungeons[14] = "Factory No.459";
	dungeons[15] = "M-Fronteir Cave";
	dungeons[16] = "Gheytz Forest";
	dungeons[17] = "Road to Celestia";

	var prompt = "";
	for (var i = 0; i < dungeons.length; i++) {
		prompt += ("[" + (i+1) + "]: " + dungeons[i] + "\n");
	};

	if (args.length > 1) {
		if ((args[1].toLowerCase() === "check")&&((parseInt(args[0])>0) && (parseInt(args[0])<19))) {
			const Discord =  require("discord.js");
			const embed = new Discord.RichEmbed()
				.setTitle("Dungeon stats")
				.setColor(0x32CD32)
				.addField(dungeons[parseInt(args[0]-1)], checkDungeon(args[0]-1));
			message.channel.send({embed});
		return;
		}

		try {
			if ((parseInt(args[0])>0) && (parseInt(args[0])<19)) {
				message.channel.send("Exploring " + dungeons[parseInt(args[0])-1]);
				return;
			}
		} catch (err) {
			console.log(err);
		}
	}

	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setTitle("Chika's Dungeon")
		.setColor(0x32CD32)
		.addField("Please type c!dungeon <number> [check]", prompt + "\n<required>\n[optional]");
	message.channel.send({embed});

	function checkDungeon(num) {
		const mob_list = require("./json/mob_list.json");
		var list = "";
		for (var i = 0; i < mob_list.stats[num]["normal"].length; i++) {
			if (i === 0) {
				list += "Normal: \n";
			}
			list += "[" + (i+1) + "]: " + mob_list.stats[num]["normal"][i] + "\n";
			if (i === mob_list.stats[num]["normal"].length-1) {
				list += "\n"
			}
		};
		for (var i = 0; i < mob_list.stats[num]["dangerous"].length; i++) {
			if (i === 0) {
				list += "Dangerous: \n";
			}
			list += "[" + (i+1) + "]: " + mob_list.stats[num]["dangerous"][i] + "\n";
			if (i === mob_list.stats[num]["dangerous"].length-1) {
				list += "\n"
			}
		};
		for (var i = 0; i < mob_list.stats[num]["epic"].length; i++) {
			if (i === 0) {
				list += "Epic: \n";
			}
			list += "[" + (i+1) + "]: " + mob_list.stats[num]["epic"][i] + "\n";
			if (i === mob_list.stats[num]["epic"].length-1) {
				list += "\n"
			}
		};
		return (list);
	}
}