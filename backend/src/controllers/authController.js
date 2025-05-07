import { catchAsync } from "../lib/catchAsync.js";
import User from "../models/user.model.js";

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    password: req.body.password,
    role: req.body.role,
  });
  res.status(201).json({ status: "success", data: { user } });
}); 
