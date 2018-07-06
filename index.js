const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/")
var random = 0

bot.on('ready', function() {
    bot.user.setUsername("GuildeRP")
    bot.user.setPresence({ game: { name: 'Préparer les Requêtes'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {

if (message.content === "/coffre"){
    random();
if (randnum == 1){
    message.channel.send(`Vous trouvez dans ce coffre un **pompe**`);
}
if (randnum == 2){
    message.channel.send(`Vous trouvez dans ce coffre un **sniper**`);
}
if (randnum == 3){
    message.channel.send(`Vous trouvez dans ce coffre un **fusil d'assaut**`);
}
if (randnum == 4){
    message.channel.send(`Vous trouvez dans ce coffre un **pistolet**`);
}
if (randnum == 5){
    message.channel.send(`Vous trouvez dans ce coffre un **Kit de soin**`);
}
if (randnum == 6){
    message.channel.send(`Vous trouvez dans ce coffre un **kit de soin**`);
}
if (randnum == 7){
    message.channel.send(`Vous trouvez dans ce coffre un **kit de soin**`);
}
if (randnum == 8){
    message.channel.send(`Vous trouvez dans ce coffre un **kit de soin**`);
}
if (randnum == 9){
    message.channel.send(`Vous trouvez dans ce coffre de la **nourriture**`);
}
if (randnum == 10){
    message.channel.send(`Vous trouvez dans ce coffre de la **nourriture**`);
}
if (randnum == 11){
    message.channel.send(`Vous trouvez dans ce coffre de la **nourriture**`);
}
if (randnum == 12){
    message.channel.send(`Vous ne trouvez rien dans ce coffre`);
}
if (randnum == 13){
    message.channel.send(`Vous ne trouvez rien dans ce coffre`);
}
if (randnum == 14){
    message.channel.send(`Vous ne trouvez rien dans ce coffre`);
}
if (randnum == 15){
    message.channel.send(`Vous ne trouvez rien dans ce coffre`);
}
if (randnum == 16){
    message.channel.send(`Vous ne trouvez rien dans ce coffre`);
}
if (randnum == 17){
    message.channel.send(`Vous ne trouvez rien dans ce coffre à part un os ...`);
}
if (randnum == 18){
    message.channel.send(`Vous ne trouvez rien dans ce coffre ... quoi que ... à non , c'est un rat ! `);
}
if (randnum == 19){
    message.channel.send(`Vous trouvez dans ce coffre de **l'équipement de protection**`);
}
if (randnum == 20){
    message.channel.send(`Vous trouvez dans ce coffre de **l'équipement de protection**`);
}}
}
)

function random(min, max) {
    min = Math.ceil(1)
    max = Math.floor(20)
    randnum = Math.floor(Math.random() * (max - min +1) + min);
 }
