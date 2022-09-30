const router = require("express").Router();
const Income = require("../models/income");
const { verify } = require("./verifyToken");


//CREATE Income
router.post("/create", async(req,res) => {
    const newIncome = new Income(req.body);
    try{
        const savedIncome = await newIncome.save();
        res.status(200).json(savedIncome);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE Income
router.put("/:id", async(req,res) => {
    try{
        const updatedIncome = await Income.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedIncome);
    } catch (err) {
        res.status(500).json(err);
    }
})

// FIND Product
router.get("/find/:id", async (req, res) => {
    try {
        const income = await Income.findById(req.params.id);
        res.status(200).json(income);
    }   catch(err) {
        res.status(500).json(err);
    }
})

// FIND ALL Incomes

router.get("/", async (req, res) => {
    try {
        let incomes;
        incomes = await Income.find();
        res.status(200).json(incomes);
    } catch(err) {
        res.status(500).json(err);
    }
})

// DELETE Income

router.delete("/delete/:id", async (req,res) => {
    try{
        await Income.findByIdAndDelete(req.params.id) ;
    } catch(err) {
        res.status(500).json(err);
    }
})






module.exports = router