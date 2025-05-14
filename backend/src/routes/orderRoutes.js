import express from "express"
import { getAllCustomers, getAllOrders } from "../controllers/orderController.js"

const router = express.Router()

router.get("/customers",getAllCustomers)
router.get("/customer/total-orders",getAllOrders)
export default router