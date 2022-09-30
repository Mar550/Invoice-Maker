const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userController = require("./controllers/user");
const authController = require("./controllers/auth");


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


app.use(express.json());

//Routes
app.use("/api/auth", authController);
app.use("/api/user", userController);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running")
})