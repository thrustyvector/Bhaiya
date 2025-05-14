import express from "express"
import { addMeal } from "../controllers/mealController.js"

const router = express.Router()

router.post("/details",addMeal)

export default router