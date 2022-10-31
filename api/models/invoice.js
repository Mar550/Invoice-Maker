const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    adress: { type: String, required:true},
    country: { type: String},
    city: { type: String},
    postcode: {type: String},
    client_name: {type:String, required:true},
    client_email: {type:String, required:true},
    client_adress: {type: String},
    client_country: {type: String},
    client_postcode: {type: String},
    date: {type: Date, required:true},
    term: {type: Date, required:true},
    description: {type:String},
    name: {type:String, required:true},
    quantity: {type:Number, required:true},
    price: {type:Number, required:true}
},  
{ timestamp: true }
)

module.exports = mongoose.model("Invoice", invoiceSchema)