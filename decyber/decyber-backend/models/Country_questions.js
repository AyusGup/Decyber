const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountrySchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ques: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    pts: {
        type: Number,
        required: true
    },
    ans: {
        type: String,
        required: true
    },
})
const Country_questions = mongoose.model('Country_questions', CountrySchema);
module.exports = Country_questions;