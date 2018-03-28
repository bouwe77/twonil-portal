var TwoNil = (function () {

  return {
    init: function () {

        addMenuIcons();

    }
  };

  function addMenuIcons() {
    $("#menu-leaguetables").addClass("fa fa-list-alt");
    $("#menu-players").addClass("fa fa-group");
    $("#menu-matches").addClass("fa fa-soccer-ball-o");
    $("#menu-dashboard").addClass("fa fa-home");
    $("#menu-otherteams").addClass("fa fa-external-link");
    $("#menu-seasons").addClass("fa fa-calendar");
  }
 
})();