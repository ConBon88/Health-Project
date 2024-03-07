const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    dateCreated: {
        type: Date,
        required : true,
        default: Date.now // Sets the default value to the current date and time
    },
    doctorName: {
        type:String,
        required: true,
    },
    patientEmail: {
        type:String,
        required: true,

    }
})

const Report = mongoose.model('Report' , schema);

module.exports = Report;

