const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArmySchema = new Schema({
    type: {
        type: Number,
        required: true
    },
    qid: {
        type: Number,
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
const Army_questions = mongoose.model('Army_questions', ArmySchema);
module.exports = Army_questions;