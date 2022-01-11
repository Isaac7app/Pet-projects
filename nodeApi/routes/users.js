import express from 'express';

//Destructured functions from controllers
import {createUser, getUser, findUserWithId, deleteUser, updateUser } from '../controllers/users.js';


const router = express.Router();

router.get('/', getUser)

router.post('/', createUser)

router.get('/:id', findUserWithId)

router.delete('/:id',deleteUser)

router.patch('/:id', updateUser)

export default router;