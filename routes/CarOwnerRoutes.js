import express from "express";
import {
  carOwnerLogin,
  
} from "../controllers/carOwnerController.js";

const router = express.Router();

router.post("/login", carOwnerLogin);




export default router;







