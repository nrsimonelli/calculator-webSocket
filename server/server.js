const express = require("express");

const app = express();
const bodyParser = require("body-parser");


const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', ws => {
  console.log('new client connection');

  ws.on('message', data => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  ws.on('close', () => {
    console.log('client disconnected');
    
  })

});



// Route includes
const calculatorRouter = require("./routes/calculator.router");


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* Routes */
app.use("/api/calculator", calculatorRouter);


// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});