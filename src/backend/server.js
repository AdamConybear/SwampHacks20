import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import morgan from 'morgan';
import router from './router.js';
import bodyParser from 'body-parser'
import fetch from "node-fetch";

const app = express();

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true});

// Logger that outputs all requests into the console
app.use(morgan('combined'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(router);

const server = app.listen(3000, "127.0.0.1", () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
  });

export async function addUser(data) {
    fetch('http://127.0.0.1:3000/addUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: data.username,
            needHelp: data.needHelp,
            gender: data.gender,
            above18: data.above18,
            problem: data.problem,
        }),
    });
}

export async function addMatch(data) {
    fetch('http://127.0.0.1:3000/addMatch', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            matchID: data.matchID,
            user1: data.user1,
            user2: data.user2,
            messages: []
        }),
    });
}

export async function addMessage(data) {
    fetch('http://127.0.0.1:3000/addMessage', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sender: data.sender,
            reciever: data.reciever,
            text: data.text,
            time: data.time,
        }),
    });
}

export async function getUsers() {
    fetch('http://127.0.0.1:3000/users.json', {
        method: 'GET',
    }).then(result => {
        return result.json();
    }).then(data => {
        return data;
    });
}

export async function getMatches() {
    fetch('http://127.0.0.1:3000/matches.json', {
        method: 'GET',
    }).then(result => {
        return result.json();
    }).then(data => {
        return data;;
    });
}