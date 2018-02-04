const app    = require('express')();
const parser = require('body-parser');
const server = require('http').Server(app);
const io     = require('socket.io')(server);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post('/notification', (req, res) => {
  const content = {
    title:   req.body.title,
    content: req.body.content
  };

  io.sockets.emit('notification', content);

  res.json(content);
});

io.on('connection', (socket) => {
  socket.on('notification', (data) => {
    socket.broadcast.emit('notification', {
        data: data
    });
  });
});

server.listen(3000);
