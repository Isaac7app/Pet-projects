const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
    res.send('working!')
})



app.listen(PORT,()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
})