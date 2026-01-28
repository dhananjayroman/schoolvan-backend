// models/Userlogin.js

import mongoose from "mongoose";

const loginLogSchema = new mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

const LoginLog = mongoose.model("LoginLog", loginLogSchema);

export default LoginLog;
