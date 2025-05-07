import { catchAsync } from "../lib/catchAsync.js";
import Order from "../models/order.model.js";
import mongoose from "mongoose";

export const getAllOrders = catchAsync(async (req, res, next) => {
  const { id: idToFetchOrders } = req.params;
  const result = await Order.aggregate([
    {
      $match: { customerId: new mongoose.Types.ObjectId(idToFetchOrders) },
    },
    {
      $group: { _id: null, totalQuantity: { $sum: "$quantity" } },
    },
  ]);
  const totalQuantity = result[0]?.totalQuantity;
  res.status(200).json({ idToFetchOrders, totalQuantity });
});
