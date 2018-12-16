const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//if we want to compare incoming json with objects data we need to use bodyParser
app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0, //user score
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0, //user score
            joined: new Date()
        },
    ]
}

app.get('/', (req, res)=>{
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    //res.send('signin');
    //buildin (express) json method
    if (req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password){
        res.json('success');
    } else{
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res)=>{
    const {email, name, password} = req.body;
    database.users.push({
            id: '125',
            name: name,
            email: email,
            password: password,
            entries: 0, //user score
            joined: new Date()
    })
    //always respond, otherwise connection will not be closed
    res.json(database.users[database.users.length-1]);
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})

/*
/ --> res = this is working
/ signin --> POST success/fail
/ register --> POST = user          //return new user object
/ profile/:userId --> GET = user
/ image --> PUT --> user score      //upadting a score

*/