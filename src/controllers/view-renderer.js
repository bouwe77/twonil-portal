exports.render = function (response, viewName, json) {
    if (!json) {
        json = {};
    }

console.log('.');

    response.render(viewName, json);
}
