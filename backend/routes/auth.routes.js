import express from 'express';
import { loginUser, logoutUser, signupUser } from '../controllers/auth.controllers.js';
const router = express.Router(); // A Router object is an isolated instance of middleware and routes

/**
 * A Router object is an isolated instance of middleware and routes.
 * It is a mini express application without all the bells and whistles of an express application,
 * just the routing and middleware functionalities.
 * 
 * Middleware functions are functions that have access to the request object (req), the response object (res),
 * and the next middleware function in the application’s request-response cycle. These functions can perform
 * a variety of tasks such as executing code, modifying the request and response objects, ending the request-response cycle,
 * and calling the next middleware function in the stack.
 */

// They simplify routes, controllers simplify routers even more

router.post("/login", loginUser); // When a GET request is made to /login, the loginUser function will be called in the controllers

router.post("/signup", signupUser);

router.post("/logout", logoutUser);

export default router; // Export the router object to be used in other files