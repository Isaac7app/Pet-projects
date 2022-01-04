const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('getting root');
})


app.listen(3005);