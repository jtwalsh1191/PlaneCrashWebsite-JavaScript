const mongoose = require('mongoose');
const Schema = mongoose.Schema


//schema consisting of all the columns in the original csv file that was imported into Mongodb atlas
const crashesSchema = new Schema({

    Date: {
        type: Date,
        required: true
    },
    
    Time: {
        type: String,
        required: true
    },

    Location: {
        type: String,
        required: true
    },

    Aboard: {
        type: Number,
        required: true
    },

    Fatalities: {
        type: Number,
        required: true
    },
    Summary: {
        type: String,
        required: true
    }
}, {timestamps: false }); //timestamps aren't needed for our usecase

const Crash = mongoose.model('Crash', crashesSchema)

//Our Crash module exported to be accessed elsewhere
module.exports = Crash;