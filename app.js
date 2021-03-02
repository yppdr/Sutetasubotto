// Require list
var ping = require('ping');
var Discord = require('discord.js');


// PING


// Hosts list
var hosts = ['192.168.0.1', 'google.com', 'yahoo.com'];


// ForEach hosts list
hosts.forEach(function(host){

    // Call fun ping 
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? host + ' OK' : host + ' PASOK';
        console.log(msg);
    });

});




// DISCORD


var client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
        status: 'online',
        activity: {
            name: 'vous observer ( ಠ ͜ʖಠ)',
            type: 'PLAYING'
        }
    });
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});


// Get token from https://discord.com/developers/applications
client.login('TOKEN');