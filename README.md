# Better-DJS-template
A template that is better suited for discord.js v14                   
Fixed minor errors, new features will be added soon!

# How it works: 
It is basically the same but some people complained that the handlers in one `bot.js` file makes it really messy and i agree to some extent.      
Adding autotasks also allow the bot to execute tasks upon called like this: `bot.<taskname>`       
    
when the bot is online and if the `.env` file is fully filled up it should look like this:        
```
token = 
password =
port =
```

If you see in the `webserver.js` file, you will notice a webserver being hosted as well. This can serve as a basic information board.
If you combine this with quick.db (any db really, this is how things are done in most cases, not exactly like this tho, cuz security), you would be able to get the items from the db and make changes through the site. In summary you can turn it into a dashboard. But if you do ecurity is a big player so yes.


# getting started:
Like I have said before, I have not yet fully tested this, if you find any issues, please go ahead and make an issue for me to fix!       

Downloading the repo:
```
git clone https://github.com/pendragons-code/Better-DJS-template/
```

Fill in the items in the `.env` file.           
Download the repos:
```
npm i
```

Run:
```
npm run deploy
```

# Permissions!
As you can see in the badly written code, that will be changed in the future when I do have the time for it, you may notice something interesting. While there are better ways to implement thi, I'm just too lazy. And that is why I will be explaining some stuff here!
```
// You can add minperms (Minimum Permissions) to commands
module.exports = {
	name: "help",
	minperms: [PermissionsBitField.Flags.KickMembers]
}


// However this means that only users with KickMembers can use this command. (above)
// We can change this by adding another PermissionsBitField to the array, thus creating an || logic

module.exports = {
	name: "help",
	minperms: [PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.BanMembers]
}


// This (above) creates an or logic because the code in messageCreate.js checks if the user does not have at least 1 permission in the array and returns with missing permissions with .includes( creates an or logic because the code in messageCreate.js checks if the user does not have at least 1 permission in the array and returns with missing permissions with.
// This however, becomes a problem. Let's say I want only moderators with KickMembers and BanMembers to use this command, but that would require an && logic. I can implement it like this:

module.exports = {
	name: "help",
	minperms: [[PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.BanMembers]]
}

// In messageCreate.js, we have this section over here:
// if(!messageCreate.member.permissions.has(minperms[i]))
// minperms[i] is used to represent the permissions of the `minperms` array we defined above!
// This makes it push the item for check and would look like this (with reference from above):

if(!messageCreate.member.permissions.has([PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.BanMembers]))




// And of course, you can mix the && and || logic as much as you like!
// There is also a part that takes items from `permissions.json` to convert the BitFields (53bit) to Permission names.
// There are better ways to do it, but there are a few NPM packages the break as most of them are made for older versions. While I'm not sure why this makes it break, It often returns wrong permissions or fail to convert it at all! If you find a working method better than what I have here, PLEASE DO SEND A PR!
```




# ESM
May implment esm in the future.
