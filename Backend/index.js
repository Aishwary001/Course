const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, (req, res)=>{
    console.log("Server is running on " + port);
})