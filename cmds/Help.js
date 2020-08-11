const Embed = require('../util/Embed')

const HelpEmbed = Embed.Create('Help', { name: '`:)help`', value: 'Shows You All The Commmands You Can Use With Fun Bot'})

var cmd = {}

cmd.Run = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;