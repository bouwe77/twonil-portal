exports.render = function (response, viewName, json) {
    if (!json) {
        json = {};
    }
    response.render(viewName, json);
}
