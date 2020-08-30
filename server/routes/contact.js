let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact')

function requireAuth(req,res,next){
    if(!req.isAuthenticated() ){
        return res.redirect('/login');
    }
    next();
}

/* GET Contact list*/
router.get('/', requireAuth, contactController.displayContactList);

/* GET route for Add Contact Page */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the Add Page */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET request for displaying the Edit Page */

router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST request - update the database from the database */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', requireAuth, contactController.processDelete);



module.exports = router;