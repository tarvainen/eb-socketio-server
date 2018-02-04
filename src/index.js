const io = require('socket.io')();

io.on('connection', (socket) => {
  socket.on('notification', (data) => {
    socket.broadcast.emit('notification', {
        data: data
    });
  });
});

io.listen(3000);
