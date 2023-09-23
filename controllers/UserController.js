const UserSchema = require('../models/User');
const { validationResult } = require('express-validator');

const createUser = async (request, response) => {
    try {
        
        // Check for validation errors
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        // Check if a user with the same email already exists
        const existingUser = await UserSchema.findOne({ email: request.body.email });
        
        if (existingUser) {
            // User with the same email already exists
            return response.status(409).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new UserSchema({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            location: request.body.location,
        });

        // Save the user to the database
        const result = await newUser.save();

        // Send a success response with token
        const responseUserData = {
            userEmail: result.email,
            status: 201,
            message: 'Success',
        };

        response.status(201).json(responseUserData);

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};



module.exports = { createUser };
