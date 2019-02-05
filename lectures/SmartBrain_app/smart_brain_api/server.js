const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '!Memtutour',
      database : 'smart-brain'
    }
});

/*
db.select('*').from('users').then(data=>{
    console.log(data);
});
*/

const app = express();
//if we want to compare incoming json with objects data we need to use bodyParser
app.use(bodyParser.json());
app.use(cors());

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(data => {
        //checking password
       const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
       if (isValid){
           return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/register', (req, res)=>{
    const {email, name, password} = req.body;
    const hash = bcrypt.hashSync(password);
    //https://en.wikipedia.org/wiki/Database_transaction
    db.transaction(trx => {
        //use trx(transaction) insted db
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                entries: 0,
                joined: new Date()
            })
            .then(user => {
                res.json(user[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
})

app.get('/profile/:id', (req, res) => {
    const {id} = req.params;
    let found = false;
    db.select('*').from('users').where({
        id: id
    }).then(user=>{
        //if there is no user we'll get [], returns true  
        //in this case catch will not work
        //to check if user is valid use user.length 
        console.log(user);
        if (user.length){
            res.json(user[0]);
        }else{
            res.status(400).json('error getting user');
        }
    })
   // if (!found) res.status(400).json('not found');
})

app.put('/image', (req, res) =>{
    const {id} = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'));
})

app.listen(3001, ()=>{
    console.log('app is running on port 3001');
})


/*
/ --> res = this is working
/ signin --> POST success/fail
/ register --> POST = user          //return new user object
/ profile/:userId --> GET = user
/ image --> PUT --> user score      //upadting a score
*/