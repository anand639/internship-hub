import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  console.log(req.body, "body");
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ username, email, password });
    await user.save();
    const payload = { user: { id: user?._id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw err;
        }
        // Remove password from user object before sending in response
        const { password, ...userDataWithoutPassword } = user.toObject();
        res.status(200).json({ token, data: userDataWithoutPassword, msg: "Successfully" });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid user" });
  }

  const isMatch = await bcrypt.compare(password, user?.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid password" });
  }
  const payload = { user: { id: user?._id } };
  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
    (err, token) => {
      if (err) {
        throw err;
      }
      // Remove password from user object before sending in response
      const { password, ...userDataWithoutPassword } = user.toObject();
      res.status(200).json({ token, data: userDataWithoutPassword, msg: "Successfully" });
    }
  );
};
