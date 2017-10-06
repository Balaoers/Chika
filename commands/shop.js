exports.run = (client, message, args) => {
	if (args[0] === "sell") {
		message.channel.send("I do not have money to buy that!");
		return;
	} else 
	if (args[0] === "buy") {
		message.channel.send("Sorry, store is closed!");
		return;
	}
	message.channel.send("c!shop <buy | sell>");
}