module.exports = async (Jasbot, messageCreate) =>{
	const { prefix, botid } = require("../../config.json")
	if(messageCreate.author.bot || messageCreate.channel.type == "dm") return
	let mainprefix = messageCreate.content.includes(prefix) ? prefix : `<@${botid}>`
	if(messageCreate.content.indexOf(prefix) !==0) return
	const args = messageCreate.content.slice(mainprefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = Jasbot.commands.get(command) || Jasbot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
	if(!cmd) return
	let maxargs = cmd.maxargs
	if(maxargs) for(let i = 0; i < maxargs; i  ++) if(args[i+1]) return messageCreate.channel.send("Too many args!")
	let minperms = cmd.minperms
	if(minperms) for(let i = 0; i < minperms.length; i++) if(!messageCreate.member.permissions.has(minperms[i])){
		const PermList = require("../../permissions.json")
		let query = minperms[i]
		if(Array.isArray(minperms[i])) query = minperms[i][0]

		return messageCreate.channel.send(`You do not have the right permissions! \`${PermList[query]}\``)
}
	let tokensec = Jasbot.structures.get("tokensec")
	tokensec.execute(Jasbot, messageCreate, args, mainprefix)
	cmd.execute(Jasbot, messageCreate, args, mainprefix).catch(() => {
		console.error()
		console.log(messageCreate.content)
		return messageCreate.channel.send("Something went wrong!")
	})
	console.log(`${messageCreate.author.username} ran ${cmd.name} in ${messageCreate.guild.id}`)
}
