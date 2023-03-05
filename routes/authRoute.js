import express from "express";
import {  loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();


//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

// login route
router.post('/login', loginController);

// test route
router.get('/test',requireSignIn,isAdmin ,testController)



export default router;