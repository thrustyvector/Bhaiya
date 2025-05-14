import mongoose from "mongoose";
import User from "./user.model.js";

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    required: true,
  },
  image: {
    type: String,
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

const Meal = mongoose.model("Meal",mealSchema)
export default Meal;