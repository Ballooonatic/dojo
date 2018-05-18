const cowController = require('../controllers/cows.js')

module.exports = function(app){

    // GET '/' Displays all of the cows.
    app.get('/', cowController.findAllCows)
    

    // GET '/cows/new' Displays a form for making a new cow.
    app.get('/cows/new', cowController.renderNewCow)
    

    // GET '/cows/:id' Displays information about one cow.
    app.get('/cows/:id', cowController.findOneCow);


    // POST '/cows' Should be the action attribute for the form in the above route (GET '/cows/new').
    app.post('/cows', cowController.addNewCow)
    

    // GET '/cows/edit/:id' Should show a form to edit an existing cow.
    app.get('/cows/edit/:id', cowController.editCow)


    // POST '/cows/:id' Should be the action attribute for the form in the above route (GET '/cows/edit/:id').
    app.post('/cows/:id', cowController.updateCow)
    
    
    // POST '/cows/destroy/:id' Should delete the cow from the database by ID.
    app.post('/cows/destroy/:id', cowController.removeCow)

}
