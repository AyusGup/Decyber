const express = require('express');
const router = express.Router();//express ke andar router hota hai
const fetch_user = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const Country_questions = require('../models/Country_questions');

// Route 1 : Get all the Country_questions using : GET "/api/cp_questions/fetchcp_question". Login required
router.get('/fetchcp_question/:country', fetch_user, async (req, res) => {
    try {
        const country_question = await Country_questions.find({ name: req.params.country }).select("-ans");
        res.json(country_question);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// Route 2 : Get single Country_question using : GET "/api/cp_questions/fetchcp_question". Login required
router.get('/fetchsinglecp_question/:country', fetch_user, async (req, res) => {
    try {
        const country_question = await Country_questions.find({ name: req.params.country }).select("-ans");
        res.json(country_question);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Checking the answer received by the user
router.post('/checkCPQ', fetch_user, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let success = false;
        let cpq = await Country_questions.find({ code: req.body.code });
        if (cpq[0].ans !== req.body.ans) {
            return res.status(400).json({success: false});
        }
        success = true;
        res.json({ success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error Occurred');
    }
})

// Route 4 : Update user details using : PUT "/api/cp_questions/updateCPQ". Login required
router.put('/updateCPQ', fetch_user, async (req, res) => {
    try {

        const { code, type } = req.body;
        const newCPQ = {};
        newCPQ.type = type;
        // Find the country question to be updated and update it
        let cpq = await Country_questions.find({ code: code }).select("-ans");
        if (!cpq) {
            return res.status(404).send('Not found');
        }
        cpq = await Country_questions.findByIdAndUpdate(cpq[0]._id, { $set: newCPQ }, { new: true }).select("-ans");// The default is to return the original, unaltered document. If you want the new, updated document to be returned you have to pass an additional argument: an object with the new property set to true.
        // new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
        res.json({ cpq });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;