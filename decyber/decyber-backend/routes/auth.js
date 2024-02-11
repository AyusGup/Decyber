const express = require('express');
const User = require('../models/User');
const router = express.Router();//express ke andar router hota hai
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// JWT enables a very secure verification between user and backend/server
const JWT_Secret = "Amanisagoodbb$oy";// Idealy you should keep this safe not here. You may keep it in .env.variable file
const fetch_user = require('../middleware/fetchUser');


// Route 1 : Create a User using : POST "/api/auth/createUser". No login required
// Use POST  not GET bcoz GET se URL me information chipakar aati hai and then your password won't be safe
router.post('/createUser', [
    body('team_name', 'Enter a valid country name').isLength({ min: 3 }),
    body('team_password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('team_leader', 'Enter a valid name').isLength({ min: 3 }),
    body('team_leader_email', 'Enter a valid email').isEmail(),
    body('team_leader_contact', 'Enter a valid contact').isMobilePhone(),
    body('team_leader_college', 'College must be atleast 3 characters').isLength({ min: 3 }),
    body('team_member_1', 'Enter a valid name').isLength({ min: 3 }),
    body('team_member_1_email', 'Enter a valid email').isEmail(),
    body('team_member_1_contact', 'Enter a valid contact').isMobilePhone(),
    body('team_member_1_college', 'College must be atleast 3 characters').isLength({ min: 3 }),
    body('team_member_2', 'Enter a valid name').isLength({ min: 3 }),
    body('team_member_2_email', 'Enter a valid email').isEmail(),
    body('team_member_2_contact', 'Enter a valid contact').isMobilePhone(),
    body('team_member_2_college', 'College must be atleast 3 characters').isLength({ min: 3 }),
], async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the team already exists
    try {
        let success = false;
        let user = await User.findOne({ team_name: req.body.team_name });
        if (user) {
            return res.status(400).json({ success, error: 'Sorry a team with this name already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const secured_password = await bcrypt.hash(req.body.team_password, salt);
        // Create a new user
        user = await User.create({
            team_name: req.body.team_name,
            team_password: secured_password,
            team_leader: req.body.team_leader,
            team_leader_email: req.body.team_leader_email,
            team_leader_college: req.body.team_leader_college,
            team_member_1: req.body.team_member_1,
            team_member_1_email: req.body.team_member_1_email,
            team_member_1_contact: req.body.team_member_1_contact,
            team_member_1_college: req.body.team_member_1_college,
            team_member_2: req.body.team_member_2,
            team_member_2_email: req.body.team_member_2_email,
            team_member_2_contact: req.body.team_member_2_contact,
            team_member_2_college: req.body.team_member_2_college,
            ap: 2925
        })
        const data = {//accessing data by using object id because it will be the fastest access
            user: {
                id: user.id
            }
        }
        success = true;
        const auth_token = jwt.sign(data, JWT_Secret);
        res.json({ success, auth_token });


    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some error occured');
    }
})


// Route 2 : Authinticating a User using : POST "/api/auth/login". No login required
// Use POST  not GET bcoz GET se URL me information chipakar aati hai and then your password won't be safe
router.post('/login', [
    body('team_name', 'No such team exist').isLength({ min: 3 }),
    body('team_password', 'Password cannot be empty').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let success = false;
        let user = await User.findOne({ team_name: req.body.team_name });//returns true or falase //I am in (ES6>=) hence I can write {email} instead of {email: email} if both the names are same
        if (!user) {
            return res.status(400).json('Invalid Credentials'); // I will show this not invalid email. Bcoz I don't want to tell the user that what is incorrect as the user might be a hacker
        }
        const password_compare = await bcrypt.compare(req.body.team_password, user.team_password);//returns true or fasle
        if (!password_compare) {
            return res.status(400).json('Invalid Credentials'); // I will show this not invalid password. Bcoz I don't want to tell the user that what is incorrect as the user might be a hacker
        }
        const data = {//accessing data by using object id because it will be the fastest access
            user: {
                id: user.id
            }
        }
        success = true;
        const auth_token = jwt.sign(data, JWT_Secret);
        res.json({ success, auth_token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error Occurred');
    }
})


// Route 3 : Get logged in User details using POST : "api/auth/getUser" . Login Required
router.post('/getUser', fetch_user, async (req, res) => {
    // MiddleWare ek function hota hai jo ki tab tab call hoga jab bhi aapke login vaale route  pe request aayegi
    // We make middleware so as to make our project scaleable. For eg-> if user want to go to payment or blog or shop
    // on the same website then he should not login again and again hence this thing will be handled by a middleware.

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-team_password");// Fetch every data instead of password
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error Occurred');
    }
})

// Route 4 : Update user details using : PUT "/api/auth/updateUser". Login required
router.put('/updateUser', fetch_user, async (req, res) => {
    try {
        userId = req.user.id;
        const { ap, cp } = req.body;
        const newPoints = {};
        newPoints.ap = ap;
        newPoints.cp = cp;

        if (userId !== req.user.id) {
            return res.status(401).send('Not Allowed');
        }
        const user = await User.findByIdAndUpdate(userId, { $set: newPoints }, { new: true });// The default is to return the original, unaltered document. If you want the new, updated document to be returned you have to pass an additional argument: an object with the new property set to true.
        // new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// Route 5 : Update countries_captured by the user using : PUT "/api/auth/updateCountryData". Login required
router.put('/updateCountryData', fetch_user, async (req, res) => {
    try {
        userId = req.user.id;

        if (userId !== req.user.id) {
            return res.status(401).send('Not Allowed');
        }
        const {name} = req.body;
        console.log(name);
        const user = await User.findByIdAndUpdate(userId, { $push: { countries_captured: name, }, }, { new: true });// The default is to return the original, unaltered document. If you want the new, updated document to be returned you have to pass an additional argument: an object with the new property set to true.
        // new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
        res.json({ user });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;