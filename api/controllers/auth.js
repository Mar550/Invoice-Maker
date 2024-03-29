const router = require("express").Router();
var mongoose = require('mongoose');
const User = require("../models/user");
const Guest = require("../models/guest");
const CryptoJS = require("crypto-js");
const { restart } = require("nodemon");
const jwt = require("jsonwebtoken"); 
const { verify } = require("./verifyToken");
const session = require('express-session');
const uuid = require('uuid')


//Register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES
        .encrypt(req.body.password, process.env.PASS_SECRET_KEY)
        .toString()    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        console.log(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post("/session", async(req,res) => {
    const newGuest = new Guest({ id: req.body.id })
    try {
        const savedGuest = await newGuest.save();
        res.status(201).json(savedGuest)
    } catch(err){
        res.status(500).json(err)
    }
})
    

//Login 
router.post("/login", async(req,res) => {
    try {
        const user = await User.findOne({ email:req.body.email })
        
        if (!user){
            res.status(401).json("Error, Wrong credentials !");
        }
        
        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SECRET_KEY
        )
        
        const savedPassword = decryptedPassword.toString(CryptoJS.enc.Utf8)
        
        if (savedPassword !== req.body.password){
            return res.status(401).json("Wrong Credentials")
        }
        
        const accessToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn:"2d"}
        )

        const { password, ...otherData } = user;
        res.cookie('auth',accessToken);
        res.status(200).json({...otherData, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
})



//Logout
let refreshTokens = [];
router.post('/logout', (req,res)=>{
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("You logged out successfully.");
})




module.exports = router;
