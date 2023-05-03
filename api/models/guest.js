const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
    id: {type: String, unique:true}
    },
    { timestamp: true }
)

module.exports = mongoose.model("Guest", guestSchema)