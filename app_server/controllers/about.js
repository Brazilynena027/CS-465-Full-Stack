var fs = require('fs'); 
var trips = 
JSON.parse(fs.readFileSync('./data/trips.json','utf8'));



/*GET About page */
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways"});

};

module.exports = {
    about
}