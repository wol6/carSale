import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import route from './routes/route.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/',route)

mongoose.connect("mongodb://localhost:27017/userfile").then(()=>{
    app.listen(8080,()=>{
        console.log("Connected to Database")
    })
}).catch((err)=>{
    console.log(err)
})