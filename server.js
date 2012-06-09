var App = function() {
    this.setHeartbeat = function(s) {
        var s = s;
        setInterval(function() {
            s.emit('hi', {connection: 'listening for heartbeat'});
        }, 2000);
    }
}

var fs = require('fs'),
    express = require('express'),
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app);
    
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
    
io.configure(function () {
    io.set("transports", ["xhr-polling"]); 
    io.set("polling duration", 10); 
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.get('/iphone', function(req, res) {
    res.sendfile(__dirname + '/public/iphone.html');
});

var a = new App();
io.sockets.on('connection', function(socket) {
    
    socket.on('hi back', function(data) {
        console.log(data);
    });
    
    socket.on('down', function(data) {
        console.log(data);
        socket.broadcast.emit('button', data);
    });
    
});