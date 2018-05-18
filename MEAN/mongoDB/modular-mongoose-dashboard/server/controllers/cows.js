const mongoose = require('mongoose'), 
      Cow      = require('../models/cow.js')

module.exports = {

    findAllCows: function(req, res) {
        Cow.find({}, function(err, cows) {
            if (err) {
                console.log(err);
            } else {
                res.render('all-cows', {cows: cows});
            }
        })
    },

    renderNewCow: function(req, res) {
        res.render('new-cow')
    },

    findOneCow: function(req, res) {
        Cow.findOne({_id: req.params.id}, function(err, cow) {
            if (err) {
                console.log(err);
            } else {
                res.render('one-cow', {cow: cow});
            }
        })
    },

    addNewCow: function(req, res) {
        Cow.create(req.body, function(err) {
            if(err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        })
    },

    editCow: function(req, res) {
        Cow.findOne({_id: req.params.id}, function(err, cow) {
            if (err) {
                console.log(err);
            } else {
                res.render('edit-cow', {cow: cow});
            }
        })
    },

    updateCow: function(req, res) {
        Cow.updateOne({_id: req.params.id}, req.body, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        })
    },

    removeCow: function(req, res) {
        Cow.remove({_id: req.params.id}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        })
    }
}