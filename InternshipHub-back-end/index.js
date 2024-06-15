import { config } from "dotenv";
config();
import { connectDB } from "./config/db.js";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import opportunitesRoutes from "./routes/opportunitiesRoutes.js";

const app = express();

// db connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/opportunities", opportunitesRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
