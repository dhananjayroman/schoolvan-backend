import express from "express";
import { registerStudent } from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", registerStudent);

export default router;







