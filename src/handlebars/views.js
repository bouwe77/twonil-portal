var uriTemplateHelper = require('../helpers/uri-templates');

var views = [
    { uriTemplate: '', view: 'home' },
    { uriTemplate: 'games', view: 'games' },
    { uriTemplate: 'games/{id}', view: 'dashboard' },
    { uriTemplate: 'games/{id}/days/{id}/matches', view: 'matches' },
    { uriTemplate: 'games/{id}/teams/{id}/players', view: 'players' },
    { uriTemplate: 'games/{id}/teams/{id}', view: 'team' },
    { uriTemplate: 'games/{id}/seasons/{id}', view: 'season' },
    { uriTemplate: 'games/{id}/seasons/{id}/leaguetables', view: 'leaguetables' },
    { uriTemplate: 'games/{id}/seasons/{id}/teams/{id}/matches', view: 'teammatches' },
];

var getViewByUri = function (uri) {

//TODO In productiesituatie wil je geen onderscheid maken tussen NotImplemented en NotFound...
//var view = 'notfound';
    var view = 'notimplemented';

    if (uri == null) {
        return view;
    }

    var uriAsTemplate = uriTemplateHelper.getUriTemplate(uri);

    var result  = views.filter(function(object) { return object.uriTemplate.toLocaleUpperCase() == uriAsTemplate.toLocaleUpperCase(); } );

    var viewFound = result.length !== 0;
    if (viewFound) {
        view = result[0].view;
    }

    return view;
}

var getViewByError = function (error) {
    var viewName = 'error';

    if (error == null) {
        return viewName;
    }

    if (error.statusCode) {
        if (error.statusCode == 404) {
            viewName = 'notfound';
        }
        else if (error.statusCode == 401) {
            viewName = 'home';
        }
        else {
        }
    }

    return viewName;
}

module.exports.getViewByUri = getViewByUri;
module.exports.getViewByError = getViewByError;