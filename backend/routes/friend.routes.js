import express from 'express';
import protectUser from '../middleware/protectUser.js';
import { sendFriendRequest, acceptFriendRequest, getFriends, getFriendRequests } from '../controllers/friend.controllers.js';

const router = express.Router(); // A Router object is an isolated instance of middleware and routes

router.post('/sendRequest/:id', protectUser, sendFriendRequest);
router.get('/acceptRequest/:id', protectUser, acceptFriendRequest);
router.get('/getFriends', protectUser, getFriends);
router.get('/getFriendRequests', protectUser, getFriendRequests);

export default router;