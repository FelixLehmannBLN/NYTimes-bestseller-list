(function() {
  function listController ($resource) {
  this.listAPI = $resource("http://api.nytimes.com/svc/books/v3/lists/mass-market-paperback.json?api-key=sample-key");
  this.listResult = this.listAPI.get();
  console.log(this.listResult);
}
  // assign controller
  bestsellerApp.controller('listController', listController);

}());
