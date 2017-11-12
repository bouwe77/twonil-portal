# KANBAN

## Backlog
* Homepage displays login form
* Use returnUrl querystring parameter in case of a redirect to login
* Github
* Logging (stdout/stderr?)
* Links dialogs vs new window (heb ik dit al eens ergens uitgewerkt en/of opgenomen voice recording)
* Support redirects coming from rest api (e.g. from root url to games url)
* HAL forms HTML rendering
* authentication/authorisation (stateless, no cookies)
* configuration (via environment variables?)
* favicon

## Ready
*

## In Progress
* 

## Done
* Hello World website in Node.js using Express
* Introduce Handlebars-Express
* Display "Hello World" by using Handlebars-Express templates
* Create a "public" folder for css, scripts and images and add it to the Express-app
* Introduce Skeleton CSS framework
* Add header with title "football manager game"
* Add two columns containing text "Menu" and the existing "Hello World" message respectively
* Create a minimal HAL JSON file containing a self link and a "Hello World" message
* Display the "Hello World" message from the HAL document
* Display all _links objects (href and title) from HAL file in the menu column
* Do not display _link objects that do not have a title
* Do not display "self" and "curies" links
* Display HAL resource properties and values dynamically
* Create homepage
* Find (or create) a basic HTML template that does not use any CSS or javascript frameworks
* 404 from rest api means 404 page is shown
* 401 from rest api means login page is shown
* Unit testing (mocking/stubbing)
* FontAwesome icons
* Exception handling (catch all)
* Every other status code (not 200, 404, 401) means error page is shown
* Only show links if they have a title (also self links are shown)
