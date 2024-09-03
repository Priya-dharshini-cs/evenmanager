import express from "express";
import authuser from "../middlewares/authuser";
import { loginuser, logoutuser, reguser, updateuser } from "../routes/userrotes";


const router=express.Router()


router.post('/',reguser)
router.put('/',authuser,updateuser)
router.post('/login',loginuser)
router.get('/',authuser,logoutuser)

export default router