const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();


// ✅ SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();
console.log("JWT_SECRET SIGNUP:", process.env.JWT_SECRET);

        res.json({ message: "Signup successful" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ✅ DASHBOARD (PROTECTED)
router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to protected dashboard",
        user: req.user
    });
});


// ✅ PROFILE
router.get("/profile", authMiddleware, async (req, res) => {

    const user = await User.findById(req.user.userId).select("-password");

    res.json(user);
});


// ✅ ADMIN ROUTE
router.get("/admin", authMiddleware, adminMiddleware, (req, res) => {
    res.json({ message: "Admin only route" });
});


module.exports = router;