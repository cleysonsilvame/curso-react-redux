const port = 3003;

const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`)
})