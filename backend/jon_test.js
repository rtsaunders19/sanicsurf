
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/jon_test.html');
});

io.on('connection', function(socket){
  socket.broadcast.emit('user connected')
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



http.listen(5000, function(){
  console.log('listening on *:5000');
});
