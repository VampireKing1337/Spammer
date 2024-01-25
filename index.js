const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
  checkUpdate: false,
});

client.on('ready', () => {
  console.log('Bot is ready!');
  const channel = client.channels.cache.get('1172119759425392710');
  setInterval(() => {
    console.log('Sending message at', new Date());
    channel.send("# COSMIC ON TOP")
      .then(() => console.log('Message sent successfully'))
      .catch(error => console.error('Error sending message:', error.message));
  }, 400); // Adjust the interval to 700 milliseconds
});

const token = 'MTE3NzExNzQzNTcwMzM0NTI0Mw.GLIqcL.lqZLHAduRDuDvGgtKedF0y6a7VkCKrQT5Edn0I';
client.login(token);
