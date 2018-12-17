const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
//if we want to compare incoming json with objects data we need to use bodyParser
app.use(bodyParser.json());
app.use(cors());

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
    ],
    login: [
        {
            id:'987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res)=>{
    res.send(database.users);

})

app.post('/signin', (req, res) => {
    //res.send('signin');
    //buildin (express) json method

    // Load hash from your password DB.
    bcrypt.compare("apples", '$2a$10$nnwC5KLT3nWIaM.rJlkvxuN0p4h7ulGdy/1mQTJj0vH1LA5iYJYtq', function(err, res) {
        console.log('first guess', res);
    });
    bcrypt.compare("veggies", '$2a$10$nnwC5KLT3nWIaM.rJlkvxuN0p4h7ulGdy/1mQTJj0vH1LA5iYJYtq', function(err, res) {
        console.log('second guess', res);
    });

    if (req.body.email === database.users[0].email 
        && req.body.password === database.users[0].password){
        res.json('success');
    } else{
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res)=>{
    const {email, name, password} = req.body;

    bcrypt.hash(password, null, null, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });

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

app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    let found = false;
    database.users.forEach(user=>{
        if(user.id === id){
            return res.json(user);
        }
    })
    if (!found) res.status(400).json('not found');
})

app.put('/image', (req, res) =>{
    const {id} = req.body;
    let found = false;
    database.users.forEach(user=>{
        if(user.id === id){
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if (!found) res.status(400).json('not found');
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