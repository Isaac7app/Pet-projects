import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    console.log('[TEST TEST]!');
    res.send('hello from hompage');
})

app.listen(PORT,()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
})