# Better-DJS-template
A template that is better suited for discord.js v14   
Will be uploaded soon. Jasbot (another project) will likely shift to this template too.   
      
      
This repository has not yet been fully tested!      


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
