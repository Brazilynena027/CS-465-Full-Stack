const express = require('express'); // Express App
const router = express.Router(); // Router Logic

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripList

router
    .route('/trips/:tripsCode')
    .get(tripsController.tripslistCode);    


module.exports = router;