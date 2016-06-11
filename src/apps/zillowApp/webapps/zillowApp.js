// Zillow App
var app = angular.module('zillow', []);

app.controller('zillowCtrl', function($http, $scope) {
  $scope.inputAddress = "";
  $scope.searchResult = [];
  $scope.otherResults = [];

  // Call the API for a list of sources in the database
  $scope.getListings = function() {
    if (!$scope.inputAddress) {
      // Don't do anything until text is entered
      return;
    }
  
    // Make API call to Restly
    $http.get('https://rets.io/api/v1/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=6').then(function(res) {
      // Success
      var buffer1 = [];
      var buffer2 = [];
      
      // Show result in top table using user search input 
      // and mix with API call data
      buffer1.push({
        "address" : $scope.inputAddress,
        "price" : res.data.bundle[0].price,
        "bedrooms" : res.data.bundle[0].bedrooms,
        "baths" : res.data.bundle[0].baths,
        "acres" : res.data.bundle[0].acres
      });

      // Show remainder of returned from API call data in bottom table
      for (var i = 1;i < res.data.bundle.length;i++) {
        var data = {
          "address" : res.data.bundle[i].address,
          "price" : res.data.bundle[i].price,
          "bedrooms" : res.data.bundle[i].bedrooms,
          "baths" : res.data.bundle[i].baths,
          "acres" : res.data.bundle[i].acres
        };
        buffer2.push(data);
      }
      
      // Put arrays on the $scope for Angular use on html side (data-binding)
      $scope.searchResults = buffer1;
      $scope.otherResults = buffer2;
    }, function(err) {
      // Show a modal to the user indicating an error has occurred
      $("#errMsg").modal("show");
    });
  };
});


