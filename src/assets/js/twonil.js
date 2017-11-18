var TwoNil = (function () {

  return {
    init: function () {

        addMenuIcons();

    }
  };

  function addMenuIcons() {
    $("#menu-leaguetables").addClass("fa fa-list-alt");
    $("#menu-squad").addClass("fa fa-group");
    $("#menu-matches").addClass("fa fa-soccer-ball-o");
    $("#menu-dashboard").addClass("fa fa-home");
  }
 
})();

function validateSignIn() {
var fucker =  document.getElementById('fucker');
  
var element = document.createElement("div");
element.setAttribute("id", "bla");
element.appendChild(document.createTextNode('hoi'));
fucker.appendChild(element);

return false;
}