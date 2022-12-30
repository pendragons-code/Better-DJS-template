module.exports = async (bot, messageCreate) =>{
	const { prefix, botid } = require("../../../config.json")
	if(messageCreate.author.bot || messageCreate.channel.type == "dm") return
	let mainprefix = messageCreate.content.includes(prefix) ? prefix : `<@${botid}>`
	bot.structures.get("tokensec").execute(bot, messageCreate, args, mainprefix)
	if(messageCreate.content.indexOf(mainprefix) !==0) return
	const args = messageCreate.content.slice(mainprefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = bot.commands.get(command) || bot.command.find(cmd => cmd.aliases && cmd.aliases.includes(command))
	if(!cmd) return
	let maxargs = cmd.maxargs
	if(maxargs) if(args[maxargs + 1]) return messageCreate.channel.send("Too many args!")
	let minperms = cmd.minperms
	if(minperms) for(let i = 0; i < minperms.length; i++) if(!messageCreate.member.permissions.has(minperms[i])){
		const PermList = require("../../assets/permissions.json")
		if(Array.isArray(minperms[i])){
			let query = ""
			for(let perarray = 0; perarray < minperms[i].length; perarray++){
				let BitToPerm = PermList[minperms[i][perarray]]
				query + `\`${BitToPerm}\``
				if(minperms[i][perarray + 1]) query + ", "
			}
		}
		let query = PermList[minperms[i]]
		return messageCreate.channel.send(`Missing permissions! \`${query}\``)
	}
	cmd.execute(bot, messageCreate, args, mainprefix).catch((error) => {
		console.error(error)
		console.log(messageCreate.content)
		return messageCreate.channel.send("Something went wrong!")
	})
	console.log(`${messageCreate.author.username} ran ${cmd.name} in ${messageCreate.guild.id}`)
}
