var viewRenderer = require('./views.js');

exports.getRegister = function (request, response) {
    viewRenderer.render(response, 'register');
}

exports.postRegister = function (request, response) {

    //TODO Handle registration


    viewRenderer.render(response, 'register');

    //TODO Redirect to home.
    //    response.redirect('/');
    //    return;
}

exports.getProfile = function (request, response) {
    viewRenderer.render(response, 'profile');
}

exports.postLogin = function (request, response) {

    //todo login logic

    // Redirect to games.
    //TODO This uri should not be hard-coded...
    response.redirect('/games');
    return;
}

exports.getLogout = function (request, response) {

    //todo logout logic

    response.redirect(location);
    return;
}