const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    email:{
        type: String
    },
});

const Lead = mongoose.model('Lead',leadSchema);
module.exports = Lead;
