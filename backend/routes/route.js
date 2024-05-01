import express from 'express'
import { allUser, signin, signup } from '../controller/user.js'

const route = express.Router()

route.post('/signup',signup)
route.post('/signin',signin)
route.get('/profile/:id/',allUser)


export default route