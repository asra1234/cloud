const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.createUser(email, hashed);
  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [users] = await User.findUserByEmail(email);
  if (!users.length) {
    return res.status(401).json({ message: "Invalid login" });
  }

  const user = users[0]; // 👈 FIX HERE

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Invalid login" });
  }

  const token = jwt.sign(
    {
      id: user.id,       // ✅ NOW WORKS
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

