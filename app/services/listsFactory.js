(function () {
  function listsFactory($resource) {
    var factory = {};
    factory.getListNames = function(){
      listsAPI = $resource("http://api.nytimes.com/svc/books/v3/lists/names.jsonp?callback=books&api-key=sample-key");
      listsResult = listsAPI.get();
      return listsResult;
    }
    return factory;
  }


  bestsellerApp.factory('listsFactory', listsFactory);

}());
