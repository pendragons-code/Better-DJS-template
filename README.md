# Better-DJS-template
A template that is better suited for discord.js v14   
Will be uploaded soon. Jasbot (another project) will likely shift to this template too.   
      
      
This repository has not yet been fully tested!      
The method for getting permissions is really dumb and therefor I advice you do not do it at all!


# How it works: 
It is basically the same but some people complained that the handlers in one `bot.js` file makes it really messy and i agree to some extent.      
Adding autotasks also allow the bot to execute tasks upon called like this: `Jasbot.<taskname>`       
    
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
