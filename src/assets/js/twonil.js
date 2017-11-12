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