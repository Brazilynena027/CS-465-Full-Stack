const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Register user
const register = async (req, res) => {

    // Validate message to insure that all parameters are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({ "message": "All fields required" });
    }

    const user = new User(
        {

            name: req.body.name, // set user name
            email: req.body.email, //set Email
            password: ''           // empty password
        });

        user.setPassword(req.body.password) //set user password
        const q = await user.save();

        if(!q)
        {
            //Database return no data
            return res
                .status(400)
                .json(err);
        }else {

            // Return new user token
            const token = user.generateJwt();
            return res
                .status(200)
                .json(token);
        }
    };


// Login user
const login = (req, res) => {
    //validate message to ensure that email and password are present
    if (!req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({ "message": "All fields required" });
    }

    // Delegate authentication to passport module
    passport.authenticate('local', (err, user, info) => {
      if (err) {
            // Error in Authentication Process
        return res
          .status(404)
          .json(err);
      }

      if (user) { //Auth sucessful
        const token = user.generateJwt();
        res
          .status(200)
          .json({ token });

      } else {
        res
          .status(401)
          .json(info);

        }
    })(req, res);
};

// export methodsthat drive endpoints
module.exports = { 
    register,
    login
};
    



