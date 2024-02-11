const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    team_password: {
        type: String,
        required: true
    },
    team_leader: {
        type: String,
        required: true
    },
    team_leader_email: {
        type: String,
        required: true,
        unique: true
    },
    team_leader_college: {
        type: String,
        required: true
    },
    team_member_1: {
        type: String,
        required: true
    },
    team_member_1_email: {
        type: String,
        required: true,
        unique: true
    },
    team_member_1_contact: {
        type: String,
        required: true,
        unique: true
    },
    team_member_1_college: {
        type: String,
        required: true
    },
    team_member_2: {
        type: String,
        required: true
    },
    team_member_2_email: {
        type: String,
        unique: true
    },
    team_member_2_contact: {
        type: String,
        unique: true
    },
    team_member_2_college: {
        type: String,
        required: true
    },
    ap: {
        type: Number,
        default:2925
    },
    cp: {
        type: Number,
        default: 0
    },
    countries_captured: {
        type: [String]
    },
    date: {
        type: Date,
        default: Date.now
    },
})
const User = mongoose.model('User', UserSchema);
module.exports = User;