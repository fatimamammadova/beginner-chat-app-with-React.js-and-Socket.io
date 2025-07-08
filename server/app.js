const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const messages = [];

io.on("connection", (socket) => {
  console.log("We are connected");

  socket.emit("chatHistory", messages);

  socket.on("chat", (chat) => {
    socket.broadcast.emit("chat", chat); 
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(5001, () => console.log("Listening to port 5001"));
