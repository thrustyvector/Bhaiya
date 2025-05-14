import { catchAsync } from "../lib/catchAsync.js";
import Order from "../models/order.model.js";
import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getAllCustomers = catchAsync(async (req, res) => {
  const customers = await User.find({ role: "user" }).select(
    "name email mobileNumber createdAt"
  );
  res.status(200).json({
    data: customers,
  });
});

export const getAllOrders = catchAsync(async (req, res, next) => {
  const { idToFetchOrders } = req.body;
  const result = await Order.aggregate([
    {
      $match: { customerId: new mongoose.Types.ObjectId(idToFetchOrders) },
    },
    {
      $group: {
        _id: null,
        totalQuantity: { $sum: "$quantity" },
        orderDates: { $push: "$orderedAt" },
      },
    },
  ]);
  const totalQuantity = result[0]?.totalQuantity;
  const orderDates = result[0]?.orderDates;
  res.status(200).json({ idToFetchOrders, totalQuantity, orderDates });
});
