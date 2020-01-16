let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomepage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectPage);

router.get('/experience', indexController.displayExperiencePage);

router.get('/contact', indexController.displayContactPage);

module.exports = router;
