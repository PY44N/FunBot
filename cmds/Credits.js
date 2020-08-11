const Embed = require('../util/Embed')

var cmd = {}

const CreditsEmbed = Embed.Create('Credits', '', [{name: 'Creators', value: 'Pyan and Green726'}, {name: 'Contributors', value: 'Anyone who contributed on our github at https://github.com/PY44N/FunBot'}])

cmd.Run = function(msg, args) {
    msg.channel.send(CreditsEmbed)
}

module.exports = cmd;