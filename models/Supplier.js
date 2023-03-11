const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    name:{
        type : String,
        required : true 
    },
    age:{
        type : Number,
        required : true
    },
    gender:{
        type : String,
        required : true
    }


})

const supplier = mongoose.model("Supplier",supplierSchema);

module.exports = supplier;