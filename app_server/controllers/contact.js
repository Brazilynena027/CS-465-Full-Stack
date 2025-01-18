var fs = require('fs'); 
var trips = 
JSON.parse(fs.readFileSync('./data/trips.json','utf8'));


/*GET Contacts page */
const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways"});

};

module.exports = {
    contact
}