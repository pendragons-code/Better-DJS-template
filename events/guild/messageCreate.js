module.exports = async (Jasbot, messageCreate) =>{
	const { prefix } = require("../../config.json")
	if(messageCreate.author.bot || messageCreate.channel.type == "dm") return
	let mainprefix = messageCreate.content.includes(prefix) ? prefix : `<@${botid}>`
	if(messageCreate.content.indexOf(prefix) !==0) return
	const args = messageCreate.content.slice(mainprefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = Jasbot.commands.get(command) || Jasbot.command.find(cmd => cmd.aliases && cmd.aliases.includes(command))
	if(!cmd) return
	let maxargs = cmd.maxargs
	let minperms = cmd.minperms
	if(maxargs) for(let i = 0; i < maxargs; i  ++) if(args[i+1]) return messageCreate.channel.send("Too many arguments were provided!!!!")
	if(minperms) for(let i = 0; i < minperms.length; i ++) if(!messageCreate.member.permissions.has(minperms[i])) return messageCreate.channel.send(`You are missing permissions! Come back when you have ${minperms[i].slice(26)}`)
	let tokensec = Jasbot.structures.get("tokensec")
	tokensec.execute(Jasbot, messageCreate, args, mainprefix)
	cmd.execute(Jasbot, messageCreate, args, mainprefix)
	console.log(`${messageCreate.author.username} ran ${cmd.name} in ${messageCreate.guild.id}`).catch(() => {
		messageCreate.channel.send("Something went wrong! Try again later!")
		console.log(messageCreate.content)
		return console.error()
	})
}
