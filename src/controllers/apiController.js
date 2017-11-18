var httpclient = require('../rest/httpclient');
var viewRenderer = require('./views.js');
var views = require('../handlebars/views.js');
var requestHandler = require('request-promise');

exports.get = function (request, response) {

    var viewName;

    try {
        httpclient.get(request.originalUrl, requestHandler, function (error, json) {
            if (error) {
console.log(error);
                viewName = views.getViewByError(error);
            }
            else {
                viewName = views.getViewByUri(request.path);
            }

            viewRenderer.render(response, viewName, json);
        });
    }
    catch (error) {
console.log(error);
        viewName = views.getViewByError(error);
        viewRenderer.render(response, viewName);
    }
}

exports.post = function (request, response) {

    var viewName;
    try {
        httpclient.post(request.originalUrl, requestHandler, function (error, location) {

            if (error) {
console.log(error);
                viewName = views.getViewByError(error);
                viewRenderer.render(response, viewName);
            }
            else {
                response.redirect(location);
                return;
            }
        });
    }
    catch (error) {
console.log(error);
        viewName = views.getViewByError(error);
        viewRenderer.render(response, viewName);
    }
}