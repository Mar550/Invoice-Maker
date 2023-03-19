const router = require("express").Router();
const User = require("../models/user");

router.get('/usertest', (req,res) => {
    res.send("user test is successful");
})

router.post("/testpost", (req, res)=> {
    const username = req.body.username
    res.send("your username is"+ username)
})

module.exports = router;