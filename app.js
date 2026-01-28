import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";

import contactRoutes from "./routes/ContactRoutes.js";
import admissionRoutes from "./routes/AdmissionRoutes.js";
import authRoutes from "./routes/UserRoutes.js";
import registerRoutes from "./routes/RegistrationRoutes.js";
import carOwnerRoutes from "./routes/CarOwnerRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Trust Render / proxy
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://schoolvan-frontend.vercel.app",
  "https://schoolvan-frontend-git-main-dhananjayromans-projects.vercel.app",
  "https://schoolvan-frontend-j0n6wc2ff-dhananjayromans-projects.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Session (FIXED)
app.use(
  session({
    name: "schoolvan.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,      // HTTPS only (Render/Vercel)
      httpOnly: true,    // safer
      sameSite: "none",  // cross-site cookies
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

//MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/ReactSchoolvan")
//   .then(() => console.log("✅ MongoDB connected successfully"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ MongoDB Atlas (FIXED)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/carowner", carOwnerRoutes);

// Root
app.get("/", (req, res) => {
  res.send("🚗 School Van Booking API is running!");
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
