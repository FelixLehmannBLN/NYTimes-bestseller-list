(function() {
  function listController ($resource) {
    this.listAPI = $resource("http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?callback=books&api-key=sample-key");
    this.listResult = this.listAPI.get();

    this.sortBy = 'rank';
    this.reverse = false;
    this.sort = function(sortProperty) {
      this.sortBy = sortProperty;
      this.reverse = !this.reverse;
    }

    this.rankChange = function(rank, oldRank) {
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
    console.log(this.listResult);
  }

  listController.$inject = ['$resource']
  // assign controller
  bestsellerApp.controller('listController', listController);

}());
