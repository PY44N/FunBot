const Discord = require('discord.js')

var Embed = {}

Embed.Create = function(title, fields) {
    const Emb = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(title)
        .setAuthor('Fun Bot', 'https://raw.githubusercontent.com/PY44N/FunBot/master/img/Icon.png')
        .addFields(fields)
        .setTimestamp()
    return Emb
}

module.exports = Embed;