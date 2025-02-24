const express = require('express'); // Express App
const router = express.Router(); // Router Logic

// Import controllers for routing
const tripsController = require('../controllers/trips');
// Import controller for authentication
const authController = require('../controllers/authentication');

const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});

// Register route
router
    .route('/register')
    .post(authController.register);

// Login route
router
    .route('/login')
    .post(authController.login);

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(auth, tripsController.tripsAddTrip); // POST Method Adds a trip

// Get method routes tripsFind by Code - requires parameters
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsListCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;