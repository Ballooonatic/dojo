const mongoose = require('mongoose');
const User     = require('./user-model.js');
const bcrypt = require('bcrypt-as-promised');


module.exports = {

    renderLogin: function(req, res) {
        console.log("finding", req.session.userId);
        
        if (req.session.userId) {
            User.find({_id: req.session.userId}, function(err, users) {
                if (err) {
                    res.send(err)
                } else {
                    res.render('index', {name: users[0].first_name})
                }
            })
        } else {
            res.render('login')
        }
    },

    userRegister: function(req, res) {

        if ( /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(req.body.email) === false ) {
            return res.send({Error: "email is not a valid email"})
        }

        else if ( /\d{3}-\d{3}-\d{4}/.test(req.body.phone) === false ) {
            return res.send({Error: "phone number is not valid"})
        }

        else if (req.body.age < 18 || req.body.age > 85) {
            return res.send({Error: "You must be over 18 to view this site! ... and under 85"})
        }

        else if ( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(req.body.password) === false ) {
            return res.send({Error: "password must have at least 1 uppercase letter, digit, and special character"})
        }

        else if (req.body.password !== req.body.confirm_pass) {
            return res.send({Error: "passwords must match!"})
        }

        User.find({email: req.body.email}, function(err, users) {
            if (users[0] !== undefined) {
                return res.send({Error: "that email has already been taken"})
            }            
        })

        User.find({phone: req.body.phone}, function(err, users) {
            if (users[0] !== undefined) {
                return res.send({Error: "that phone has already been taken"})
            }            
        })
            
        bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            req.body.password = hashed_password
            req.body.confirm_pass = undefined
            User.create(req.body, function (err, user) {
                if (err) {
                    res.send(err.errors)
                } else {
                    req.session.userId = user._id
                    res.render('index', {name: user.first_name})
                }
            })
        })
        .catch(error => {
            res.send(error)
        });

    },

    userLogin: function(req, res) {
        
        User.find({email: req.body.email}, function (err, users) {
            if (err) {
                res.send(err)
            }
            if (users[0] === undefined) {
                res.send({Error: "your credentials did not match our records."})
            } else {
                bcrypt.compare(req.body.password, users[0].password)
                .then( result => {
                    if (result === true) {
                        req.session.userId = users[0]._id
                        res.render('index', {name: users[0].first_name})                
                    } else {
                        res.send({Error: "your credentials did not match our records."})
                    }
                })
                .catch( error => {
                    res.send({Error: "your credentials did not match our records."})
                })
            }
        })
    },

    userLogout: function(req, res) {
        console.log("logging out", req.session.userId);
        req.session.userId = undefined
        res.redirect('/')
    }
}