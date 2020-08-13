//Commands
const HelpCmd = require('./cmds/Help')
const CreditsCmd = require('./cmds/Credits')
const OverWatchHeroGenCmd = require('./cmds/OverwatchHeroGen')

//Command Processing
var CMDS = function(msg) {
    let fullCommand = msg.content.substr(2)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (primaryCommand == "help") {
        HelpCmd(msg, arguments)
    }
    if (primaryCommand == "credits") {
        CreditsCmd(msg, arguments)
    }
    if (primaryCommand == "gen") {
        OverWatchHeroGenCmd(msg, arguments)
    }
}

//Export To Main File
module.exports = CMDS;