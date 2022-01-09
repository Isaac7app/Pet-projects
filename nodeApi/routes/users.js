import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {createUser, getUser } from '../controllers/users.js';


const router = express.Router();

let users = [];

router.get('/', createUser)

router.post('/', getUser)

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(req.params);


    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id !== id);

    res.send(`Sucess! ${id} has been deleted.`)

})

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    const user = users.find((user)=> user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`user with the id:${id} has been updated`)
})

export default router;