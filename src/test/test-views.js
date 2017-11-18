// The following .js file is under test here:
var views = require('../handlebars/views');

var assert = require('assert');
var expect = require('chai').expect;

describe('Determine view', function () {
    describe('When the URI is defined', function () {
        it('Returns the expected view name for all defined URIs', function () {

            var testcases = [
                { uri: '', expectedView: 'home' },
                { uri: '/', expectedView: 'home' },
                { uri: 'games', expectedView: 'games' },
                { uri: '/games', expectedView: 'games' },
                { uri: 'games/', expectedView: 'games' },
                { uri: '/games/', expectedView: 'games' },
                { uri: 'gAmes', expectedView: 'games' },
                { uri: 'GAMES', expectedView: 'games' },
                { uri: 'games/id', expectedView: 'dashboard' },
                { uri: '/games/id', expectedView: 'dashboard' },
                { uri: '/games/id/', expectedView: 'dashboard' },
                { uri: 'games/iD', expectedView: 'dashboard' },
                { uri: 'games/ID', expectedView: 'dashboard' },
            ];

            testcases.forEach(function (testcase) {
                var view = views.getViewByUri(testcase.uri);
                expect(view).to.equal(testcase.expectedView, 'Expected "' + testcase.expectedView + '" for URI "' + testcase.uri + '" and not "' + view + '"');
            })
        });
    });
    describe('When the URI is not defined or invalid', function () {
        it('Returns the expected view name for URIs that are not defined or not valid', function () {

            var testcases = [
                { uri: 'loremipsum', expectedView: 'notimplemented' },
                { uri: null, expectedView: 'notimplemented' },
            ];

            testcases.forEach(function (testcase) {
                var view = views.getViewByUri(testcase.uri);
                expect(view).to.equal(testcase.expectedView, 'Expected "' + testcase.expectedView + '" for URI "' + testcase.uri + '" and not "' + view + '"');
            })
        });
    });
    describe('When an error occurs', function () {
        it('Returns the expected view name if an error occurs', function () {

            var testcases = [
                { error: null, expectedView: 'error' },
                { error: {}, expectedView: 'error' },
                { error: { statusCode: 404 }, expectedView: 'notfound' },
                { error: { statusCode: 401 }, expectedView: 'home' },
                { error: { statusCode: '' }, expectedView: 'error' },
                { error: { statusCode: null }, expectedView: 'error' },
            ];

            testcases.forEach(function (testcase) {
                var view = views.getViewByError(testcase.error);
                expect(view).to.equal(testcase.expectedView);
            })
        });
    });
});
