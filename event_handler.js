//event reader
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		let eventFunction = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		// super-secret recipe to call events with all their proper arguments *after* the `client` var.
		client.on(eventName, (...args) => eventFunction.run(client, ...args));
	});
});