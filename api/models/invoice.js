const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    address: {type: String, required: true},
    country: {type: String},
    city: {type: String},
    postcode: {type: String},
    client_name: {type: String, required: true},
    client_email: {type: String, required: true},
    client_address: {type: String},
    client_country: {type: String},
    client_city: {type: String},
    client_code: {type: String},
    date: {type: Date, required: true},
    term: {type: Date, required: true},
    description: {type: String},
    items: [{
            name: String,
            quantity: Number,
            price: Number,
    }],
    status: {
        type: String,
        enum: ['Paid', 'Pending', 'Draft']
    }  
},  
{ timestamp: true }
)

module.exports = mongoose.model("Invoice", invoiceSchema)