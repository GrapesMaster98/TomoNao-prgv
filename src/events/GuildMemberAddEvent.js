// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');

const { MessageEmbed } = require('discord.js');

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const embed = new MessageEmbed()
    .setTitle('Bienvenidoooooo')
    .setImage('https://media1.tenor.com/images/83008f290c583b67b179133fb558e146/tenor.gif?itemid=15910457')
    .setColor('PURPLE')
    .setDescription(`Bienvenido ${member} pásala de lo mejor.`);

    let canal = client.channels.cache.get('785727008533250119');    
    canal.send(embed);

    let canal2 = client.channels.cache.get('783188177019207690');
    canal2.send(`${member} se ha unido, saludosssss.`);
  }
}