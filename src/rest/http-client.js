var apiUri = 'http://bouwe:password@localhost:59711';
//var apiUri = 'http://bouwe:password@twonil-api.local';

var get = function (path, requestMethod, callback) {

    var options = {
        uri: apiUri + path,
        method: 'GET',
        strictSSL: false,
        resolveWithFullResponse: true,
        json: true,
        headers: { 'Accept': 'application/hal+json' }
    };

    requestMethod(options)
        .then(function (response) {

            if (!response.headers || (response.headers && response.headers['content-type'] !== 'application/hal+json; charset=utf-8')) {
                var error = new Error('Unexpected Content-Type');
                callback(error);
                return;
            }

            callback(null, response.body);
        })
        .catch(function (error) {
            callback(error);
        })
}

var post = function (path, requestMethod, callback) {

    var options = {
        uri: apiUri + path,
        method: 'POST',
        strictSSL: false,
        resolveWithFullResponse: true
    };

    requestMethod(options)
        .then(function (response) {

            if (response.headers && response.headers['location'] != null && response.headers['location'] !== '') {
                callback(null, response.headers['location']);
                return;
            }

            var error = new Error('Location header expected');
            callback(error);
        })
        .catch(function (error) {
            callback(error);
        })
}

module.exports.get = get;
module.exports.post = post;