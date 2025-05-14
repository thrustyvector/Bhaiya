import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/lib/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js"
import mealRoutes from "./src/routes/mealRoutes.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Tiffin Pg",
    message: "Test GET request served successfully!!",
  });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/order",orderRoutes)
app.use("/api/meal",mealRoutes)

app.listen(PORT, () => {
  console.log("Server Runnin at ", PORT);
  connectDb();
  //sfds
});
