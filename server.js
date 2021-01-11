
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);

server.listen(port, () => console.log('Server listening on port ' + port));

function onConnect(socket){
  console.log('Connect ' + socket.id);
  socket.on('disconnect', () => console.log('Disconnect ' + socket.id));
  socket.on('add-value', data => {
    io.emit('update-value', data);
  });
}
