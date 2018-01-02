var uriTemplateHelper = require('../helpers/uri-templates');

exports.transform = function (uri, json) {
    if (!json) {
        json = {};
        return json;
    }

    var uriAsTemplate = uriTemplateHelper.getUriTemplate(uri);

    //TODO strategy pattern

    if (uriAsTemplate == 'games/{id}/teams/{id}') {
        var previousLeagueName = null;
        for (index = 0; index < json._embedded.teams.length; index++) {
            if (json._embedded.teams[index]['league-name'] === previousLeagueName) {
                json._embedded.teams[index]['league-name'] = null;
            }
            else {
                previousLeagueName = json._embedded.teams[index]['league-name'];
            }
        }
    }

    return json;
}
