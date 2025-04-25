import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";


dotenv.config();
const app = express();

const PORT = 4000;
app.use(express.json()); 
app.use(cookieParser());
 
app.get("/", (req, res) => {
    res.send("Server is alive!");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

  