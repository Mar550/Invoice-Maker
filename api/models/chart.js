const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
        type: { type: String, enum: ['Income', 'Expense', 'Gross Revenue'], required:true},
        periodicity: { type: String, enum: ['Yearly', 'Monthly', 'Weekly', 'Daily'], required:true},
        start: {type: Date, required:true},
        end: {type: Date, required:true},
    },
    { timestamp: true }
)

module.exports = mongoose.model("Chart", chartSchema)