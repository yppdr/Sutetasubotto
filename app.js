// Require list
var ping = require('ping');

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