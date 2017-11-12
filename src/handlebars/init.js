var expressHandlebars = require('express-handlebars');

// Create an instance of express-handlebars with config options.
var handlebars = expressHandlebars.create({
    defaultLayout: 'container',
    extname: '.hbs',
    helpers: {
        //https://stackoverflow.com/a/31632215
        eq: function (v1, v2) {
            return v1 === v2;
        },
        ne: function (v1, v2) {
            return v1 !== v2;
        },
        lt: function (v1, v2) {
            return v1 < v2;
        },
        gt: function (v1, v2) {
            return v1 > v2;
        },
        lte: function (v1, v2) {
            return v1 <= v2;
        },
        gte: function (v1, v2) {
            return v1 >= v2;
        },
        and: function (v1, v2) {
            return v1 && v2;
        },
        or: function (v1, v2) {
            return v1 || v2;
        },
        //===
        toLowerCase: function(str) {
            return str.toLowerCase();
        },
        removeSpaces: function(str) {
            return str.replace(/\s+/g, '');
        },
    }
});

module.exports.handlebars = handlebars;