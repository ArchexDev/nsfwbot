const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
  .setAuthor(`${client.user.username} help!`, client.user.displayAvatarURL({ dynamic: true }), "https://discord.gg/SGdy3jtMCB")
  .setColor(client.color)
  .setDescription(`<a:ghostdc:887348036802576405> **Join the Community** https://discord.gg/SGdy3jtMCB\n🆘 **Need Support?** \`melih#1337\` - \`kaan#1337\`\n\n**Commands**\n\`anal        :\` You can see anal porn gif or png.\n\`4k          :\` You can see 4k porn gif or png.\n\`ass         :\` You can see ass porn gif or png.\n\`feet        :\` You can see feet porn gif or png.\n\`gonewild    :\` You can see gonewild porn gif or png.\n\`hentai-ass  :\` You can see hentai-ass porn gif or png.\n\`hentai      :\` You can see hentai porn gif or png.\n\`pgif        :\` You can see pgif porn gif or png.\n\`pussy       :\` You can see pussy porn gif or png.\n\`solo        :\` You can see solo porn gif or png.\n\`thigh       :\` You can see thigh porn gif or png.`)
  .setFooter(`Help requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp();
  return message.reply({
    embeds: [embed]
  });
};