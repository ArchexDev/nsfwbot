const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) {
    const embed = new MessageEmbed()
    .setTitle(client._error)
    .setColor(client.color);
    return message.reply({
      embeds: [embed]
    });
  } else {
    client.nsfw.get('https://nekobot.xyz/api/image')
    .query({ type: 'solo' })
    .end((err, res) => {
      const embed = new MessageEmbed()
      .setURL(res.body.message)
      .setImage(res.body.message)
      .setTitle('<:ass:887347257559625798> Click Me!')
      .setColor(client.color)
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
      message.reply({
        embeds: [
          embed
        ]
      });
    });
  }
};