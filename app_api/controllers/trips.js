const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const trips = await Model
    .find({}) // no filter, return all records
    .exec();

    // Uncomment the following line to show results of query
    // console.log(q);

    if(!trips) 
    { // Database returned no data
        return res
                .status(404)
                .json(err);

    } else { // return resulting trip list
        return res
                .status(200)
                .json(trips);
    }

};

const tripslistCode = async(req, res) => {
    const trips = await Model
    .find({ 'code' : req.params.tripsCode}) // no filter, return all records
    .exec();

    // Uncomment the following line to show results of query
    // console.log(q);

    if(!trips) 
    { // Database returned no data
        return res
                .status(404)
                .json(err);

    } else { // return resulting trip list
        return res
                .status(200)
                .json(trips);
    }

};


module.exports = {
    tripsList,
    tripslistCode
   
};