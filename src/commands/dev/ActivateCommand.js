const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ActivateCommand extends BaseCommand {
  constructor() {
    super('activate', 'dev', []);
  }

  run(client, message, args) {
    //client.emit("guildMemberAdd", message.member);
  }
}