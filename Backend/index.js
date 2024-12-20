const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

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

app.listen(port, (req, res)=>{
    console.log("Server is running on " + port);
})