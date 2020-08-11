const Embed = require('../util/Embed')

const HelpEmbed = Embed.Create('Help', 'Prifix = :)', [{ name: '`help`', value: 'Shows You All The Commmands You Can Use With Fun Bot'}, {name: '`redits`', value: 'Shows the credits for Fun Bot'}])

var cmd = {}

cmd.Run = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;