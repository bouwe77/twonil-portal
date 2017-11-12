// The following .js file is under test here:
var httpclient = require('../rest/httpclient');

var assert = require('assert');
var expect = require('chai').expect;

var pathNotApplicable = 'n/a';

describe('HTTP Client', function () {
  describe('GET responds with 200 OK response with JSON', function () {
    it('Callback receives expected JSON', function (done) {

      var stub = function (options) {
        var headers = [];
        headers['content-type'] = 'application/hal+json; charset=utf-8';
        return new Promise(function (resolve, reject) {
          var response = {
            headers: headers,
            statusCode: 200,
            body: '{ "message": "success!" }'
          };
          resolve(response);
        })
      };

      httpclient.get(pathNotApplicable, stub, function (error, json) {
        expect(error).to.be.null;
        expect(json.message).to.equal("success!");
        done();
      });
    });
  });

  describe('GET responds with 200 OK response with HTML', function () {
    it('Callback receives error indicating the Content-Type is unexpected', function (done) {

      var stub = function (options) {
        var headers = [];
        headers['content-type'] = 'text/html';
        return new Promise(function (resolve, reject) {
          var response = {
            headers: headers,
            statusCode: 200,
            body: '<html>This is HTML</html>'
          };
          resolve(response);
        })
      };

      httpclient.get(pathNotApplicable, stub, function (error, json) {
        expect(error.message).to.equal('Unexpected Content-Type');
        expect(json).to.be.undefined;
        done();
      })
    });
  });

  describe('GET responds with 404 Not Found response', function () {
    it('Callback receives error indicating the resource is not found', function (done) {

      var stub = function (options) {
        return new Promise(function (resolve, reject) {
          var error = {
            statusCode: 404
          };
          reject(error);
        })
      };

      httpclient.get(pathNotApplicable, stub, function (error, json) {
        expect(error.statusCode).to.equal(404);
        expect(json).to.be.undefined;
        done();
      });
    });
  });

  describe('GET responds with 401 Unauthorized response', function () {
    it('Callback receives error indicating the user is unauthorized', function (done) {

      var stub = function (options) {
        return new Promise(function (resolve, reject) {
          var error = {
            statusCode: 401
          };
          reject(error);
        })
      };

      httpclient.get(pathNotApplicable, stub, function (error, json) {
        expect(error.statusCode).to.equal(401);
        expect(json).to.be.undefined;
        done();
      });
    });
  });

  describe('GET responds with 500 Internal Server Error response', function () {
    it('Callback receives error indicating an error has occurred', function (done) {

      var stub = function (options) {
        return new Promise(function (resolve, reject) {
          var error = {
            statusCode: 500
          };
          reject(error);
        })
      };

      httpclient.get(pathNotApplicable, stub, function (error, json) {
        expect(error.statusCode).to.equal(500);
        expect(json).to.be.undefined;
        done();
      });
    });
  });

  describe('POST responds with 201 Created response with Location header', function () {
    it('Callback receives expected location', function (done) {

      var stub = function (options) {
        var headers = [];
        headers['location'] = '/path/to/stuff';
        return new Promise(function (resolve, reject) {
          var response = {
            headers: headers,
            statusCode: 201
          };
          resolve(response);
        })
      };

      httpclient.post(pathNotApplicable, stub, function (error, location) {
        expect(error).to.be.null;
        expect(location).to.equal("/path/to/stuff");
        done();
      });
    });
  });

  describe('POST responds with 201 Created response without headers', function () {
    it('Callback receives expected error', function (done) {

      var stub = function (options) {
        var headers = [];
        return new Promise(function (resolve, reject) {
          var response = {
            statusCode: 201
          };
          resolve(response);
        })
      };

      httpclient.post(pathNotApplicable, stub, function (error, location) {
        expect(error.message).to.equal('Location header expected');
        expect(location).to.be.undefined;
        done();
      });
    });
  });

  describe('POST responds with 201 Created response without headers', function () {
    it('Callback receives expected error', function (done) {

      var stub = function (options) {
        return new Promise(function (resolve, reject) {
          var response = {
            headers: null,
            statusCode: 201
          };
          resolve(response);
        })
      };

      httpclient.post(pathNotApplicable, stub, function (error, location) {
        expect(error.message).to.equal('Location header expected');
        expect(location).to.be.undefined;
        done();
      });
    });
  });

  describe('POST responds with 201 Created response without Location header', function () {
    it('Callback receives expected error', function (done) {

      var stub = function (options) {
        var headers = [];
        return new Promise(function (resolve, reject) {
          var response = {
            headers: headers,
            statusCode: 201
          };
          resolve(response);
        })
      };

      httpclient.post(pathNotApplicable, stub, function (error, location) {
        expect(error.message).to.equal('Location header expected');
        expect(location).to.be.undefined;
        done();
      });
    });
  });

  describe('POST responds with 500 Internal Server Error', function () {
    it('Callback receives expected error', function (done) {

      var stub = function (options) {
        return new Promise(function (resolve, reject) {
          var response = {
            statusCode: 500
          };
          reject(response);
        })
      };

      httpclient.post(pathNotApplicable, stub, function (error, location) {
        expect(error.statusCode).to.equal(500);
        expect(location).to.be.undefined;
        done();
      });
    });
  });
});