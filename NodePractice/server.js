const { urlencoded, json } = require('body-parser');
const express = require('express')

const app = express();

app.use(urlencoded({extended:false}))
app.use(json())

app.use(express.static(__dirname + '/public'))

// app.get('/:id',(req,res)=>{
//     Mostly used req
//     req.query
//     req.body
//     req.headers
//     console.log(req.params)
//     req.params
    res.send('getting root')
// })


app.listen(3002);

