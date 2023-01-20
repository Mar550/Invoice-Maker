const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userController = require("./controllers/user");
const authController = require("./controllers/auth");
const invoiceController = require("./controllers/invoice");
const jwt = require("jsonwebtoken");

dotenv.config();

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected:$(con.connection.host)`)
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

connectDB();

var cors = require('cors');
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authController);
app.use("/api/user", userController);
app.use("/api/invoice", invoiceController);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running")
})