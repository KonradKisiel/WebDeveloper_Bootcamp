const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//middleware
/*
app.use((req, res, next) => {
    console.log('<h1>Helloooo</h1>')
    next()
});
*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//path, receives
app.get('/', (req, res) => {
    res.send("getting root");
});

app.get('/profile', (req, res) => {
    res.send("<h2>Getting profile </h2>");
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Success');
});

app.listen(3000);