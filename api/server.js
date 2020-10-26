const express = require("express")

const project = require("./project")

const server = express()

server.use(express.json());

//endpoints go Here!
server.use('/api/project', project);

module.exports = server