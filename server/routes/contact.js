let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema
let contactModel = require('../models/contact');

/* GET Contact list*/
router.get('/', (req, res, next) =>{
    contactModel.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }
        else{
            //console.log(contactList);
            res.render('contacts/index', {
                title: "Contact List",
                contactList: contactList
            });
        }
    });
});

/* GET route for Add Contact Page */
router.get('/add', (req, res, next)=> {
    res.render('contacts/add',{
        title: 'Add New Person'
    });
});

/* POST Route for processing the Add Page */
router.post('/add', (req, res, next) =>{

    console.log(req.body.firstName);

    let newContact = contactModel({
        "firstName" : req.body.firstName,
        "lastName" : req.body.lastName,
        "age" : req.body.age
    });

    contactModel.create(newContact, (err, contactModel)=> {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
        /* refresh the contact list */
            res.redirect('/contact-list');
        }
    });
});





module.exports = router;