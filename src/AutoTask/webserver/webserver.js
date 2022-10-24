module.exports = async (Jasbot) => {
	const express = require("express")
	const env = require("dotenv").config
	const password = process.env.password
	const os = require("os-utils")
	const app = express()
	const port = process.env.port
	app.get("/", async (req, res) => {
		if(req.query.key != password || ! req.query.key) return res.send("YOU CANNOT ACCESS THIS!")
		let desc = `Serving ${Jasbot.guilds.cache.size} guilds and ${Jasbot.users.cache.size} users.`
		res.send(desc)
	})

	app.get("/botusage", async (req, res) => {
		if(req.query.key != password || ! req.query.key) return res.send("YOU CANNOT ACCESS THIS!")
		os.cpuUsage(function(v){
			const arr = [ 1,2,3,4,5,6,7,8,9,10 ]
			arr.reverse()
			const used = process.memoryUsage().heapUsed /1024 /1024
			const memory = `Approx memory usage: ${Math.round(used * 100) / 100} MB`
			const usage = `CPU: ${Math.round(v * 100) / 100}<br>${memory}<br> Process: ${process.pid}`
			res.send(usage)
		})
	})
//Example: the port is on 8000
//http://localhost:8000/botusage/?key=PASSWORD HERE
	app.listen(port)
}