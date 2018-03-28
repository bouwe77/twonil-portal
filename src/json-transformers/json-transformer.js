var uriTemplateHelper = require('../helpers/uri-templates');

exports.transform = function (uri, json) {
    if (!json) {
        json = {};
        return json;
    }

    var uriAsTemplate = uriTemplateHelper.getUriTemplate(uri);

    //TODO strategy pattern

    if (uriAsTemplate == 'games/{id}/teams/{id}'
        || uriAsTemplate == 'games/{id}/seasons/{id}/teams/{id}/matches'
        || uriAsTemplate == 'games/{id}/teams/{id}/players') {
    var previousLeagueName = null;
        for (index = 0; index < json._embedded['rel:teams'].length; index++) {
            if (json._embedded['rel:teams'][index]['league-name'] === previousLeagueName) {
                json._embedded['rel:teams'][index]['league-name'] = null;
            }
            else {
                previousLeagueName = json._embedded['rel:teams'][index]['league-name'];
            }
        }
    }

    if (uriAsTemplate == 'games/{id}/seasons/{id}/teams/{id}/matches') {
        var previousDate = null;
        for (index = 0; index < json._embedded['rel:matches'].length; index++) {
            if (json._embedded['rel:matches'][index]['date'] === previousDate) {
                json._embedded['rel:matches'][index]['date'] = null;
            }
            else {
                previousDate = json._embedded['rel:matches'][index]['date'];
            }
        }
    }

    return json;
}
