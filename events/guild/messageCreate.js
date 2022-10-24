module.exports = async (Jasbot, messageCreate) =>{
	const { prefix } = require("../../config.json")
	if(messageCreate.author.bot || messageCreate.channel.type == "dm") return
	let mainprefix = messageCreate.content.includes(prefix) ? prefix : `<@${botid}>`
	if(messageCreate.content.indexOf(prefix) !==0) return
	const args = messageCreate.content.slice(mainprefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = Jasbot.commands.get(command) || Jasbot.command.find(cmd => cmd.aliases && cmd.aliases.includes(command))
	if(!cmd) return
	let tokensec = Jasbot.structure.get("tokensec")
	tokensec.execute(Jasbot, messageCreate, args, mainprefix)
	cmd.execute(Jasbot, messageCreate, args, mainprefix)
	console.log(`${messageCreate.author.username} ran ${cmd.name} in ${messageCreate.guild.id}`).catch(() => {
		messageCreate.channel.send("Something went wrong! Try again later!")
		console.log(messageCreate.content)
		return console.error()
	})
}
