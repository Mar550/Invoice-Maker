const router = require("express").Router();
const Expense = require("../models/expense");
const { verify } = require("./verifyToken");


//Create Expense
router.post("/create", async(req,res) => {
    const newExpense = new Expense(req.body);
    try{
        const savedExpense = await newExpense.save();
        res.status(200).json(savedExpense);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Update expense
router.put("/:id", async(req,res) => {
    try{
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedExpense);
    } catch (err) {
        res.status(500).json(err);
    }
})

// FIND Expense
router.get("/find/:id", async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        res.status(200).json(expense);
    }   catch(err) {
        res.status(500).json(err);
    }
})

// FIND ALL Expenses

router.get("/all", async (req, res) => {
    try {
        let expenses;
        expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch(err) {
        res.status(500).json(err);
    }
})

// DELETE Expense

router.delete("/delete/:id", async (req,res) => {
    try{
        await Expense.findByIdAndDelete(req.params.id) ;
    } catch(err) {
        res.status(500).json(err);
    }
})




module.exports = router;