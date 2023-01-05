const router = require("express").Router();
const Invoice = require("../models/invoice");


//CREATE
router.post("/create", async(req,res) => {
    const newInvoice = new Invoice(req.body);
    try{
        const savedInvoice = await newInvoice.save();
        res.status(200).json(savedInvoice);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/update/:id", async(req,res) => {
    try{
        const updatedInvoice = await Invoice.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedInvoice);
    } catch (err) {
        res.status(500).json(err);
    }
})

//EDIT
router.get("/edit/:id", async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        res.status(200).json(invoice);
    }   catch(err) {
        res.status(500).json(err);
    }
})

//FIND
router.get("/find/:id", async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        res.status(200).json(invoice);
    }   catch(err) {
        res.status(500).json(err);
    }
})

//FIND ALL

router.get("/all", async (req, res) => {
    try {
        let invoices;
        invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch(err) {
        res.status(500).json(err);
    }
})

//DELETE

router.delete("/delete/:id", async (req,res) => {
    try{
        await Invoice.findByIdAndDelete(req.params.id) ;
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router;