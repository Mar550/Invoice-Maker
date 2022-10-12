const router = require("express").Router();
const Chart = require("../models/chart");
const { verify } = require("./verifyToken");


//Create Chart
router.post("/create", async(req,res) => {
    const newChart = new Chart(req.body);
    try{
        const savedChart = await newChart.save();
        res.status(200).json(savedChart);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get Chart
router.get("/find/:id", async (req, res) => {
    try {
        const chart = await Chart.findById(req.params.id);
        res.status(200).json(chart);
    }   catch(err) {
        res.status(500).json(err);
    }
})



module.exports = router;