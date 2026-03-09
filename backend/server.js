import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import chatRoutes from "./routes/chatRoutes.js"
import { logger } from "./middleware/middleware.js"

dotenv.config()

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(logger)


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once("open", () => {
  console.log("MongoDB connected")
})

mongoose.connection.on("error", (err) => {
  console.log("MongoDB error:", err)
})


// routes
app.use("/api", chatRoutes)


// test route
app.get("/", (req, res) => {
  res.send("OpsMind AI Backend Running")
})


// port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})