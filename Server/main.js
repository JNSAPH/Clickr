'use strict';

const WebSocket = require('ws');
const express = require('express')
const cors = require('cors')
const port = 1212

const app = express()
app.use(express.static('public'));
app.use(cors())

// Initialize Socket Server
const wss = new WebSocket.Server({port: 1213});

// Initialize Session Array 
var connections = [];

// Socket On Connection
wss.on('connection', function connection(ws) {
    // Keep track of Session
    ws.id = Math.floor(Math.random()*90000) + 10000;
    connections[ws.id] = ws;

    // Log and send Sessions
    console.log("New Connection with Session ID: " + ws.id);
    ws.send(`You're connected to the Server! \nSession ID: ${ws.id}. Give the Session ID to the Presenters`);

    // Detect if Client Disconnectes and remove ID from Array
    ws.on('close', () => {
        console.log("Closed Session with Session ID " + ws.id);
        delete connections[ws.id];
    })
    
});

app.get('/');

app.get('/previous/:sessionID', (req, res) => {
    try {
        connections[req.params.sessionID].send("back");
        res.status(200).send({ code: 200, message: "Ok" });
    } catch (error) {
        res.status(400).send({code: 400, message: "Invalid Session ID"});
    }
})

app.get('/next/:sessionID', (req, res) => {
    try {
        connections[req.params.sessionID].send("next");
        res.status(200).send({ code: 200, message: "Ok" });
    } catch (error) {
        res.status(400).send({code: 400, message: "Missing sessionID"});
    }
})

app.get('/authenticate/:sessionID', (req, res) => {
    if (!connections[req.params.sessionID]) return res.status(400).send({code: 400, message: "Session does not exist."});
    res.status(200).send({code: 200, sessionDetails: connections[req.params.sessionID]});
})

app.get('/notify/:state/:sessionID', (req, res) => {
    try {
        console.log(!!req.params.state);
        if (req.params.state == "true") {
            // User Joined
            connections[req.params.sessionID].send("A user has joined your session.");
        } else {
            // User Left
            connections[req.params.sessionID].send("A user has left your session.");
        }
        res.status(200).send({ code: 200, message: "Ok" });
    } catch (error) {
        res.status(400).send({code: 400, message: "Missing sessionID"});
    }
})

app.listen(port, () => {
    console.log(`Clicker app listening at http://localhost:${port}`)
})