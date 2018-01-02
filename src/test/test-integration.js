const Browser = require('zombie');
var assert = require('assert');
var expect = require('chai').expect;

const browser = new Browser();
const url = 'http://localhost:4000/';

describe('UI Tests', function () {

    describe('Home page', function () {

        before(function () {
            return browser.visit(url + '');
        });

        // it('Header menu has Home menu only', function () {
        //TODO Deze doet het nog niet omdat je ook het Games menu steeds ziet. 
        //De reden daarvoor is dat credentials richting de API nu nog hard-coded mee worden gestuurd en je dus altijd ingelogd bent...
        //     assertMainMenu('Home');
        // });

        //TODO Testen dat user menu rechtsbovenin niet wordt getoond, maar dit kan pas als het inloggen vanaf de portal werkt.

        it('Game menu is not present', function () {
            assertGameMenuNotPresent();
        });

        it('Sign In form is displayed', function () {
            //browser.assert.element('form#login-form');
        });
    });

    describe('Sign In form on home page', function () {

        describe('Sign In without username and password', function () {

            // Login tests:
            // - Niks invullen
            // - Alleen username invullen
            // - Alleen password invullen
            // - Username en password invullen, maar username is te lang
            // - Username en password invullen, username bestaat niet, password ook niet
            // - Username en password invullen, username bestaat niet, password wel
            // - Username en password invullen, username bestaat wel, password is onjuist
            // - Username en password invullen, username bestaat, password ook, maar horen niet bij elkaar
            // - Geldige credentials invullen, de Games pagina wordt getoond. En dat user menu rechtsbovenin ook.

            before(function () {
                return browser.visit(url + '');
            });

            // VOORBEELD FORM VALIDATIE:
            // before(function () {
            //     browser.assert.elements('#bla', 0);

            //     browser
            //         .fill('username', '')
            //         .fill('password', '');
            //     return browser.pressButton('Sign In');
            // });

            // it('Error message is displayed', function () {
            //     browser.assert.element('#bla');
            // });
        });
    });

    describe('Games page', function () {

//TODO Zodra inloggen werkt moet je hier eerst inloggen voordat onderstaande werkt.

        before(function () {
            return browser.visit(url + 'games');
        });

        it('Header menu has Home and Games menu only', function () {
            assertMainMenu('Home', 'Games');
        });

        it('Game menu is not present', function () {
            assertGameMenuNotPresent();
        });

        it('Create game form is displayed', function () {
            //browser.assert.element('form#create-game-form');
        });

    });

    // TODO Unauthorized tests: ga zonder inloggen naar een URL die bestaat (bijv. /games). Wat is de verwachting dan?
    // De Unauthorized test kan pas als het inloggen op de portal werkt. 
    // Nu wordt de API met hard-coded credentials aangesproken en ben je altijd geauthentiseerd.

    // Dashboard test:
    // - Header menu bevat Home en Games
    // - Games menu moet exact de (op dit moment) 4 menu items bevatten, niks meer en niks minder

    // Logout tests:
    // - Nadat je op logout hebt geklikt zie je homepage weer in originele staat.
});

function assertMainMenu(...menuItems) {
    browser.assert.element('ul#main-menu', 'Main menu expected');

    browser.assert.elements('ul#main-menu li', menuItems.length, menuItems.length + ' menu item(s) expected');

    var index = 1;
    menuItems.forEach(function (menuItem) {
        browser.assert.text("ul#main-menu li:nth-child(" + index + ")", menuItem, "Menu nr " + index + " should be " + menuItem);
        index++;
    });
}

function assertGameMenuNotPresent() {
    browser.assert.elements('ul#game-menu', 0, 'Game menu not expected');
    browser.assert.elements('ul#game-menu li', 0, 'No game menu items expected');
}


