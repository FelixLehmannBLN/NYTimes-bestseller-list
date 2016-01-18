(function() {
  function listController ($resource, listsFactory) {
    var self = this;
    self.listAPI = $resource("http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?callback=books&api-key=sample-key");
    self.listResult = self.listAPI.get();

    self.listNames = [];

    function init() {
      self.listNames = listsFactory.getListNames();
    }

    init();

    self.sortBy = 'rank';
    self.reverse = false;
    self.sort = function(sortProperty) {
      self.sortBy = sortProperty;
      self.reverse = !self.reverse;
    }

    self.rankChange = function(rank, oldRank) {
      if (rank < oldRank) {
          return "fa fa-arrow-circle-up";
      } else if (rank > oldRank && oldRank !== 0) {
          return "fa fa-arrow-circle-down";
      } else if ( rank === oldRank ) {
          return "fa fa-arrow-circle-right";
      }else {
          return "fa fa-circle";
      }
    }

    // just to check if resource is loaded
    console.log(self.listNames);
  }

  listController.$inject = ['$resource', 'listsFactory']
  // assign controller
  bestsellerApp.controller('listController', listController);

}());
