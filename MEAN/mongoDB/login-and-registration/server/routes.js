const usrCtrl = require('./user-controller.js')

module.exports = function(app) {

    app.get('/', usrCtrl.renderLogin)
    
    app.post('/user/register', usrCtrl.userRegister)
    
    app.post('/user/login', usrCtrl.userLogin)
    
    app.get('/user/logout', usrCtrl.userLogout)

}