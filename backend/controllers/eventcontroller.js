import express, { Router } from 'express'
import authuser from '../middlewares/authuser.js'
import {createevent, deleteevent, getadminevents, getallevent, getevent, latestevents, updateevent} from '../routes/eventroutes.js'

const router=express.Router()


router.post('/',authuser,createevent)
router.get('/',authuser,getallevent)
router.get('/latest',authuser,latestevents)
router.get('/admin/:id',authuser,getadminevents)
router.put('/:id',authuser,updateevent)
router.delete('/:id',authuser,deleteevent)
router.get('/:id',authuser,getevent)






export default router