const { botownerid } = require("../../../config.json")
const { EmbedBuilder } = require("discord.js")
const env = require("dotenv").config()
const token = process.env.token
module.exports = {
	name: "tokensec",
	async execute(Jasbot, messageCreate, args, mainprefix){
		if(messageCreate.content.includes(token)){
			const owner = Jasbot.users.cache.get(botownerid)
			const embed = new EmbedBuilder()
			embed.setTitle("Token compromised!!!")
			embed.setDescription(`message author id: ${messageCreate.author.id}\nmessage author name: ${messageCreate.author.tag}\nguild id: ${messageCreate.guild.id}\nguild name: ${messageCreate.guild.name}\nguild id: ${messageCreate.guild.id}\n message content: ${messageCreate.content}`)
			owner.send({ embeds: [embed] })
		}
	}
}
