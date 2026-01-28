import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  parentPhone: String,
  email: String,
  password: String,
});

const UserRegister = mongoose.model("UserRegister", userSchema);

export default UserRegister;



