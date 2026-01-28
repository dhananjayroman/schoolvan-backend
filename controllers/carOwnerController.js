import bcrypt from "bcryptjs";

// Static credentials (normally stored securely, e.g., in DB or env)
const FIXED_EMAIL = "owner@gmail.com";
const FIXED_PASSWORD = "owner123";
const FIXED_PASSWORD_HASH = bcrypt.hashSync(FIXED_PASSWORD, 10);

// 🔐 Handle Car Owner Login
export const carOwnerLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email !== FIXED_EMAIL) {
    return res.status(401).json({ ok: false, error: "Email not found" });
  }

  const isMatch = await bcrypt.compare(password, FIXED_PASSWORD_HASH);
  if (!isMatch) {
    return res.status(401).json({ ok: false, error: "Incorrect password" });
  }

    req.session.carOwner = { email };
  
  // ✅ Send a token (dummy or JWT later)
  return res.status(200).json({ ok: true, message: "Login success", token: "dummy-token-123" });
};


