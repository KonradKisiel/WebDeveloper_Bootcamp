const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const put_image = require('./controllers/put_image');

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

//dependency injection
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt) })
//simplified functions verison, req, res passed automaticaly
app.post('/register', register.handleRegister(db, bcrypt));

app.get('/profile/:id',profile.handleGetProfile(db));

app.put('/image', put_image.handlePutImage(db));

app.listen(3001, ()=>{
    console.log(process.env)
    console.log('app is running on port 3001');
})
