import bcrypt from "bcryptjs";
import UserRegister from "../models/UserRegister.js";

export const registerStudent = async (req, res) => {
  const { fullName, parentPhone, email, password } = req.body;

  try {
    const existingUser = await UserRegister.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ ok: false, error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserRegister({
      fullName,
      parentPhone,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ ok: true, message: "Registration successful" });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
};
