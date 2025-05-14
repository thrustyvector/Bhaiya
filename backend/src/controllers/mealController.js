import { catchAsync } from "../lib/catchAsync.js";
import Meal from "../models/meal.model.js";

export const addMeal = catchAsync(async (req, res, next) => {
  const { name, description, rate, category, image, vendorId } = req.body;
  const newMeal = await Meal.create({
    name,
    description,
    rate,
    category,
    image,
    vendorId,
  });
  res.status(201).json({
    data:{
        meal:newMeal
    }
  })
});
