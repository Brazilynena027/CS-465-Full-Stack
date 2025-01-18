var fs = require('fs'); 
var trips = 
JSON.parse(fs.readFileSync('./data/trips.json','utf8'));


/*GET Meals page */
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways"});

};

module.exports = {
    meals
}