const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        min: 1000000000,
        max: 9999999999,
        required: true
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

