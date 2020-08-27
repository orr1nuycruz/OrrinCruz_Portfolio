let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the User Model
let userModel = require('../models/user');
let User = userModel.User; // alias


module.exports.displayHomepage = (req, res, next) => {
    res.render('partials/content', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('partials/content', {
        title: 'About',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('partials/content', {
        title: 'Projects',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayExperiencePage = (req, res, next) => {
    res.render('partials/content', {
        title: 'Experience',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('partials/content', {
        title: 'Contact',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            // messages: 'hello',
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/')
    }
    // TODO
}

module.exports.processLoginPage =
    passport.authenticate('local', {
        successRedirect: '/contact-list',
        failureRedirect: '/login',
        failureFlash: 'loginMessage',
        failureMessage: 'Authentication Error'
    });
// TODO


module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
    // res.render('auth/register', {
    //     title: 'Register'});
    // TODO
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        //  password: req.body.password
        email: req.body.email,
        displayName: req.body.displayName
    });

    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);
    console.log(req.body.displayName);

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error: Inserting new User');
            if (err.name == 'UserExistsError') {
                req.flash('registerMessage', 'Registration Error: User Already Exists!');
                console.log('Error: User Already Exists!');
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            // if no eror exists, then registration is successful

            // redirect the user
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list');
            });
        }
    });



    // TODO
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
    // TODO
}