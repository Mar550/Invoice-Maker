const mongoose = require("mongoose");

const chartSchema = new mongoose.Schema({
        type: { type: String, enum: ['Income', 'Expense', 'Gross Revenue'], required:true},
        periodicity: { type: String, enum: ['Yearly', 'Monthly', 'Weekly', 'Daily'], required:true},
        from: {type: Date, required:true},
        to: {type: Date, required:true},
    },
    { timestamp: true }
)

module.exports = mongoose.model("Chart", chartSchema)