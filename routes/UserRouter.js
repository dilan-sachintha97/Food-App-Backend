const express = require('express');
const { check} = require('express-validator');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Validation middleware
const emailValidation = [
    check('email')
        .isEmail()
        .withMessage('Invalid email address')
        .normalizeEmail(),
];

const passwordValidation = [
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
];


router.post('/create-user', emailValidation, passwordValidation, UserController.createUser);

router.post('/login', emailValidation, passwordValidation, UserController.loginUser);


module.exports = router;