import express from "express";
import authuser from "../middlewares/authuser.js";
import { loginuser, logoutuser, reguser, updateuser } from "../routes/userrotes.js";


const router=express.Router()


router.post('/',reguser)
router.put('/:id',authuser,updateuser)
router.post('/login',loginuser)
router.get('/',authuser,logoutuser)

export default router