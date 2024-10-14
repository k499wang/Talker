import express from "express";
import protectUser from "../middleware/protectUser.js";
import { getUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/getusers", protectUser, getUsers)

export default router