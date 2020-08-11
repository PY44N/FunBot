const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity(":)help"); 
})

client.login("NzQyNTQ2NjI5ODgxNjI2NzI1.XzHscA.3ak2HRCXWyuliJlX0fCdq68CrGY")