const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname+'/public'))

//middleware
/*
app.use((req, res, next) => {
    console.log('<h1>Helloooo</h1>')
    next()
});
*/

/*
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//path, receives
app.get('/:id', (req, res) => {
    ///?name=Mark&Age=29
    //console.log(req.query);
    //req.body
    //console.log(req.header);
    //:id
    ///1234 return { id: '1234' }
    //console.log(req.params);
    //return status
    res.status(404).send("not found");
    res.send("getting root");
});
*/
app.listen(3000);