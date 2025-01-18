var fs = require('fs'); 
var trips = 
JSON.parse(fs.readFileSync('./data/trips.json','utf8'));



/*GET News page */
const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways"});

};

module.exports = {
    news
}