const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// create a user using: POST "/api/auth/createUser" . No login required

router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter a valid password').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail()
], async (req, res) => {
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // checks whether the user with this email exists already
    try {

        let user = await User.findOne({ email: req.body.email });
        console.log()
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        res.json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");

    }
})
module.exports = router