const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")

bot.on('ready', function() {
    bot.user.setUsername("GuildeRP")
    bot.user.setPresence({ game: { name: 'Préparer les Requêtes'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
     if(message.content.startsWith("/destructor")){
        message.channel.send(`**${message.author.username}** lance destructor (type dark) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
        file: "http://img.maxisciences.com/article/planete/que-se-passera-t-il-si-la-terre-s-arrete-de-tourner_7615fcfc450f978e6ad0da439cd7a69e419b5846.jpg"
    })
}
if(message.content.startsWith("/tempete solaire")){
    message.channel.send(`**${message.author.username}** lance tempète solaire (type feu) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://static.usbeketrica.com/images/thumb_840xh/58fdff01a0c68.jpg"
})
}
if(message.content.startsWith("/1000 tsunami")){
    message.channel.send(`**${message.author.username}** lance les 1000 tsunami (type eau) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://socialunderground.com/wp-content/uploads/2016/06/feature_tsunami.jpg"
})
}
if(message.content.startsWith("/dragon cry")){
    message.channel.send(`**${message.author.username}** lance le dragon cry (type dragon) !\nDégâts : 200 \nDégâts sur utilisateur : 100`,{
    file: "https://i0.wp.com/www.leretourdesdragons.com/wp-content/uploads/2015/02/065-energie-dragon-esprit-dragon.jpg?resize=750%2C400&ssl=1"
})
}
}
)
