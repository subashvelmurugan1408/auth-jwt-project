const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("DB Error:", err));

app.get("/", (req, res) => {
    res.send("API running");
});

app.use("/api/auth", require("./routes/auth"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});