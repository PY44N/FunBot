const Embed = require('../util/Embed')
const Hero = require('./Deps/OverwatchHeroGen/Generator')

function Emb(txt) {
    return Embed.Create("Overwatch Hero Generator", "Generates a random Overwatch Hero", [{name: "Hero:", value: txt}])
}

var cmd = function(msg, args) {
    if (args[0]) {
        if (args[0].toLowerCase() == "all") {
            msg.channel.send(Emb("`" + Hero.Gen() + "`"))
        } else if (args[0].toLowerCase() == "tank") {
            msg.channel.send(Emb("`" + Hero.GenTank() + "`"))
        } else if (args[0].toLowerCase() == "damage") {
            msg.channel.send(Emb("`" + Hero.GenDamage() + "`"))
        } else if (args[0].toLowerCase() == "support") {
            msg.channel.send(Emb("`" + Hero.GenSupport() + "`"))
        } else {
            msg.channel.send(Embed.Create("Error",  "", [{name: "Invialid Hero Class, Hero Classes are", value: "`All` `Tank` `Damage` `Support`"}]))
        }
    } else {
        msg.channel.send(Embed.Create("Error",  "", [{name: "Please Include a Hero Class, The Hero Classes", value: "`All` `Tank` `Damage` `Support`"}]))
    }
}

module.exports = cmd