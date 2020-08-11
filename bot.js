//Vars
const Discord = require('discord.js')
const client = new Discord.Client()
var fs = require('fs');

//Bot Init
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity(":)help"); 
})

client.on('message', (msg) => {
    if (msg.author != client.user) {
        if  (msg.content.startsWith(":)")) {
            ProcessCmd(msg)
        }
    }
})

//Command Processing
function ProcessCmd(msg) {
    let fullCommand = msg.content.substr(2)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (primaryCommand == "help") {
        HelpCmd(msg, arguments)
    }
}

//Commmands

//Help Command
function HelpCmd(msg, args) {
    msg.channel.send("You Have Been Helped")
}

//Grab Token and Run Bot
fs.readFile('token.txt', 'utf8', function(err, Token) {
    if (err) throw err;
    client.login(Token)
});