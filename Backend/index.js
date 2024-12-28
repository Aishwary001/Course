const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const port = process.env.port || 3000;
const jwt = require('jsonwebtoken');

const { authenticateToken } = require("./utilities");

// Middleware to validate JWT
app.use(
    cors({
        origin: "*",
    })
);

const User = require("./models/user.model");
const Course = require("./models/course.model");

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Connected to mongoDB"))
.catch((err)=> console.log("Could not connect to mongoDB", err))

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post("/create-account", async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName) {
        return res
            .status(400)
            .json({ error: true, message: "Full Name is required" });
    }

    if (!email) {
        return res.status(400).json({ error: true, message: "Email is required" });
    }

    if (!password) {
        return res.status(400)
            .json({ error: true, message: "Password is required" });
    }

    const isUser = await User.findOne({ email: email });

    if (isUser) {
        return res.json({
            error: true,
            message: "User already exists",
        });
    }

    const user = new User({
        fullName,
        email,
        password
    });

    await user.save();

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "36000m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registration Successful"
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    const userInfo = await User.findOne({ email: email });

    if (!userInfo) {
        return res.status(400).json({ message: "User not found" });
    }

    if (userInfo.email == email && userInfo.password == password) {
        const user = { user: userInfo };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        })

        return res.json({
            error: false,
            message: "Login Successful",
            email,
            accessToken,
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials",
        })
    }
})

app.get("/get-user",authenticateToken, async (req, res) => {
    const { user } = req.user;
    const isUser = await User.findOne({_id:user._id});

    if(!isUser){
        return res.sendStatus(401);
    }

    return res.json({
        user:{fullName:isUser.fullName,email:isUser.email,"_id": isUser._id,createdOn : isUser.createdOn},
        message:"",
    });
});

app.listen(port, (req, res)=>{
    console.log("Server is running on " + port);
})