import express from "express";
import protectUser from "../middleware/protectUser.js";
import { getUsers } from "../controllers/user.controllers.js";
import { getRandomUsers } from "../controllers/random.controllers.js";



const router = express.Router();

router.get("/getusers", protectUser, getUsers)
router.get("/getrandomusers", protectUser, getRandomUsers)

export default router