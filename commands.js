//Commands
const HelpCmd = require('./cmds/Help')

var CMDS = {}

//Command Processing
CMDS.Process = function(msg) {
    let fullCommand = msg.content.substr(2)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (primaryCommand == "help") {
        HelpCmd.Run(msg, arguments)
    }
}

//Export To Main File
module.exports = CMDS;