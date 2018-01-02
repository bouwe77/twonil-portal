module.exports = function (app) {

    var apiController = require('../controllers/api-controller');
    var userController = require('../controllers/user-controller');

    app.route('/register')
        .get(userController.getRegister)
        .post(userController.postRegister);

    app.route('/profile')
        .get(userController.getProfile);

    app.route('/login')
        .post(userController.postLogin);

    app.route('/logout')
        .get(userController.getLogout);

    app.route('*')
        .get(apiController.get)
        .post(apiController.post);
}