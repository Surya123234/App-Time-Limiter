const ipc = require('electron').ipcRenderer;
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

function blockDiscord(ws) {
  ws.send('block');
}

function unblockDiscord(ws) {
  ws.send('unblock');
}

wss.on('connection', (ws) => {


    ws.on('message', (message) => {
      if (JSON.parse(message).origin === 'discord') {
        // Delay to demonstarte its working
        setTimeout(() => {
          unblockDiscord(ws)
        }, 5000)
        setTimeout(() => {
          blockDiscord(ws)
        }, 10000)
      }
    });

});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});