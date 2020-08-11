const Discord = require('discord.js')

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Fun Bot Help')
    .setAuthor('Fun Bot', '../img/Icon.png')
    .setDescription('Shows you the commands you are able to use with Fun Bot')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

var cmd = {}

cmd.Run = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;