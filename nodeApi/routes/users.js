import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {createUser, getUser } from '../controllers/users.js';


const router = express.Router();

let users = [];

router.get('/', createUser)

router.post('/', getUser)

router.get('/:id', findUserWithId)

router.delete('/:id',deleteUser)

router.patch('/:id', updateUser)

export default router;