const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    address: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    postcode: {type: String},
    client_name: {type: String, required: true},
    client_email: {type: String, required: true},
    client_address: {type: String, required: true},
    client_country: {type: String, required: true},
    client_city: {type: String, required: true},
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
        default: 'Pending',
        enum: ['Paid', 'Pending', 'Draft']
    }  
},  
{ timestamp: true }
)

module.exports = mongoose.model("Invoice", invoiceSchema)