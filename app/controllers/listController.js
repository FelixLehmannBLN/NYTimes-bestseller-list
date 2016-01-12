(function() {
  function listController ($resource) {
    this.listAPI = $resource("http://api.nytimes.com/svc/books/v3/lists/mass-market-paperback.json?callback=books&api-key=sample-key");
    this.listResult = this.listAPI.get();

    this.sortBy = 'rank';
    this.reverse = false;
    this.sort = function(sortProperty) {
      this.sortBy = sortProperty;
      this.reverse = !this.reverse;
    }

    // just to check if resource is loaded
    console.log(this.listResult);
  }

  listController.$inject = ['$resource']
  // assign controller
  bestsellerApp.controller('listController', listController);

}());
