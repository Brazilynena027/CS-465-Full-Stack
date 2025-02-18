const express = require('express'); // Express App
const router = express.Router(); // Router Logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController. tripsAddTrip); // POST Method Adds a trip

    //Get method routes tripsFind by Code - requires parameters
router
    .route('/trips/:tripCode')
    .get(tripsController.tripslistCode)
    .put(tripsController.tripsUpdateTrip);    


module.exports = router;