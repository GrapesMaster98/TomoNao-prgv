const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TwitchCommand extends BaseCommand {
  constructor() {
    super('Twitch', 'links', ['twitch']);
  }

  run(client, message, args) {
    let canal = client.channels.cache.get('785727008533250119');
    canal.send('@everyone **Grapes está en vivo**\nhttps://twitch.tv/grapesgames');
  }
}