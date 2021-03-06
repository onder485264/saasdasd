const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../config.json");
const { Perms } = require("../util/permissions.js");
const moment = require("moment");
moment.locale("tr")





module.exports = async (member) => {
  const date = new Date();
    let girişkanal = member.guild.channels.cache.get(config.girişkanal);
  if(!girişkanal) return;
  const { client } = member;
  const status = {
    dnd:"Rahatsız etmeyin",
    idle:"Boşta",
    online:"Çevrim içi",
    offline:"Görünmez"
  };
  const userName = member.user.username;
  const avatarURL = member.user.avatarURL({ size:4096, dynamic:true });
  const embed = new Discord.MessageEmbed()
  .setAuthor(userName,avatarURL)
  .setDescription(`**${userName}** sunucuya katıldı.\nSunucu ${member.guild.memberCount} üye oldu.`)
  .addField("`Kullanıcı:`",member.user.tag)
  .addField("`ID:`",member.id)
  .addField("`Durum:`",status[member.user.presence.status])
  .setThumbnail(avatarURL);
  client.sendEmbed(girişkanal,embed,false);
};