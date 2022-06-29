






const messages = ["Ragnarok❤️Valersia"]

module.exports = (client) => {
  console.log(`Bot ${client.user.tag} Ragnarok❤️Valersia`);
  
  client.user.setPresence({
      activity: {
        name: messages[0],
        type:"WATCHING"
      }
    });
};