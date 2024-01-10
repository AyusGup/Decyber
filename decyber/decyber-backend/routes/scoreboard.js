const express = require('express');
const router = express.Router();//express ke andar router hota hai
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// Route 1 : Get all the Army_questions using : GET "/api/scoreboard/fetchscores". Login required
router.get('/fetchscores', async (req, res) => {
    try {
        const scores = await User.find({},{team_name:1,_id:0,cp:1});
        res.json(scores);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;