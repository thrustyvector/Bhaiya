import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./src/lib/db.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())



app.listen(PORT,()=>{
    console.log("Server Runnin at ", PORT)
    connectDb()
})