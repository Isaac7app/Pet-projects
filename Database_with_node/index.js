const express = require('express');
const app = express();
const connection = require('/database');

const PORT = 4000;

app.get('/',(req,res)=>{
    res.send('working!')
})



app.listen(PORT,()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
})