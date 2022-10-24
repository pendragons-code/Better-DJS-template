const { Jasbot } = require("../bot.js")
const { decorpiece, decorpiece2 } = require("./Commands.js")
const fs = require("fs")
function AutoTasker(){
	console.log(`${decorpiece} Automatic Tasks ${decorpiece2}`)
	fs.readdirSync("./src/AutoTask").forEach(dirs => {
		const autotask = fs.readdirSync(`./src/AutoTask/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of autotask){
			require(`../src/AutoTask/${dirs}/${file}`)(Jasbot)
			console.log(`Loading Task: ${file} from ${dirs} succeeded`)
		}
	})
	console.log(`${decorpiece} End of Automatic Tasks ${decorpiece2}`)
} 
module.exports = { AutoTasker: AutoTasker }
