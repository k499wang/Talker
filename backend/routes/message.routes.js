import express from 'express';
import {sendMessage} from '../controllers/message.controllers.js'

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage) // protect this route before you run this function, authorization process


export default router;