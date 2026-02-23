import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173", "https://tracksphere-backend-npmh.onrender.com"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))
// Import Routes
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.routes.js";


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", adminRoutes);
app.use("/api", authRoutes);
app.use("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "API is healthy" });
});

// Default endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Tracksphere API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});