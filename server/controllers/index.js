let express = require('express');
let router = express.Router();

module.exports.displayHomepage = (req, res, next) => {
    res.render('partials/content', { title: 'Home' });
  }
  
module.exports.displayAboutPage = (req, res, next) => {
    res.render('partials/content', { title: 'About' });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('partials/content', { title: 'Projects' });
}

module.exports.displayExperiencePage = (req, res, next) => {
    res.render('partials/content', { title: 'Experience' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('partials/content', { title: 'Contact' });
}