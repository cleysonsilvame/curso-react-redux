const port = 3003;

const express = require("express");
const cors = require("./cors");
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors);


server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
