import { connectDb } from "../lib/db.js"
import Order from "../models/order.model.js"
import { config } from "dotenv";
import mongoose from "mongoose";
config()

const seedOrders = [
    {
        customerId:new mongoose.Types.ObjectId('681a566cecd7698917b7c251'),
        quantity:2
    },
    {
        customerId:new mongoose.Types.ObjectId('681a566cecd7698917b7c251'),
        quantity:1
    },
    {
        customerId:new mongoose.Types.ObjectId('681a566cecd7698917b7c251'),
        quantity:5
    },
    {
        customerId:new mongoose.Types.ObjectId('681a566cecd7698917b7c251'),
        quantity:3
    }
]

const seedDatabase = async ()=>{
    try {
        await connectDb()
        await Order.insertMany(seedOrders)
        console.log("Data inserted")        
    } catch (error) {
        console.log("error",error)
    }
}

seedDatabase()