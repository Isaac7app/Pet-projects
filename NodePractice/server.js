const { urlencoded, json } = require('body-parser');
const express = require('express')

const app = express();

app.use(urlencoded({extended:false}))
app.use(json())

app.use(express.static(__dirname + '/public'))

// app.get('/:id',(req,res)=>{
//     //Mostly used req
//     // req.query(?)
//     // req.body
//     // req.headers
//     //req.params(/:id)
//    res.status(404).send('Not found');
// })



app.listen(3002);

