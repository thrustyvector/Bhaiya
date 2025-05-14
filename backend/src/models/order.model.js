import mongoose from "mongoose";
import User from "./user.model.js";
const orderSchema = new mongoose.Schema(
    {
        customerId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:User,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        orderedAt:{
            type:Date,
            default:Date.now
        }
    },
    {timestamps:true}
)

const Order= mongoose.model("Order",orderSchema)

export default Order 