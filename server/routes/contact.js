let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact')

/* GET Contact list*/
router.get('/', contactController.displayContactList);


/* GET route for Add Contact Page */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add Page */
router.post('/add', contactController.processAddPage);

/* GET request for displaying the Edit Page */

router.get('/edit/:id', contactController.displayEditPage);

/* POST request - update the database from the database */
router.post('/edit/:id', contactController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', contactController.processDelete);



module.exports = router;