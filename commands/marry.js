exports.run = (client, message, args) => {
    if (args[0] === "accept") {
		message.channel.send("Congratulation! You are now married");
		return;
	} else
	if (args[0] === "reject") {
		message.channel.send("There's still 7 Billion people out there");
		return;
	}
	message.channel.send("c!marry <accept @user_name | reject @user_name>");
}