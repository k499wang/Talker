import express from 'express';
import {sendMessage} from '../controllers/message.controllers.js'
import protectRoute from '../middleware/protectRoute.js'
import {getMessages} from '../controllers/message.controllers.js'

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage) // protect this route before you run this function, authorization process
router.get('/get/:id', protectRoute, getMessages)

export default router;