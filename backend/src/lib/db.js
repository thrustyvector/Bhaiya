import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Db connected successfully on ${connect.connection.host}`)
    } catch (error) {
        console.log("Error connecting to mongoDb", error)
    }
}