const Discord = require("discord.js");
const bot = new Discord.Client();

const TOKEN = "MzkzNzc4Njg5NDUzNTg4NDgw.DR72vg.SeAAsgdm8wWf9kNFIMMT5aLTdBA";

eventenabled = false;

bot.on("ready", function(){
    console.log("[PARADOX NETWORK UPDATER] This bot has now initiated! Thanks for choosing me, the best bot in the entire web!");
    console.log("[STATUS] I am currently in 'Do not Disturb'");
    console.log("[PLAYING] I am currently playing 'PDX-MC.com'")
    console.log("[PLEASE NOTE] If you notice any inperfections in my infostructure, please contact a bot developer so they can mend my flux capacitor!")
    bot.user.setGame("PDX-MC.com");
    bot.user.setStatus("dnd");
});



bot.on("message", function(message) {
    const args = message.content.split(/ +/g);
    const msg = args.splice(1).join(' ').toString().toLowerCase();
    const admin = message.member.hasPermission("ADMINISTRATOR");

    if (message.author.equals(bot.user)) return;
    

        if (message.content.startsWith("$update")){

            if (!admin){
                
                message.channel.send("You don't have the required role!")

            }else{

            args[0] = msg;
            
            message.guild.channels.find("name", "announcements").send(msg);
            
            message.channel.send("An update has been posted!");

            if (message.content.startsWith("$"))
            message.delete();
            }
        }
    
        if (message.content.startsWith("$event")){

            if (!admin){
                
                message.channel.send("You don't have the required role!")

            }else{

            args[0] = msg;
            
            message.guild.channels.find("name", "announcements").send(msg);
            
            message.channel.send("An update has been posted!");

            if (message.content.startsWith("$"))
            message.delete();
            }
        }
});

bot.login(process.env.BOT_TOKEN);
