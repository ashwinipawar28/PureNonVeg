  app.controller("nonVegController",function ($scope, $http, LocationService) {
    $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';



    $scope.result2 = '';
    $scope.options2 = {
      country: 'ca',
      types: '(cities)'
    };    $scope.details2 = '';
    
    
    
    $scope.result3 = '';
    $scope.options3 = {
      country: 'gb',
      types: 'establishment'
    };
    $scope.details3 = '';
    
    $scope.restaurantsList =  function() {
    	if ($("#search-area").val().trim() != "")
    	window.location.href = "restaurants.html";
    }
 /*   $scope.restaurants = function(){
    	 return $http.get("url_to_rest_api");
    }*/
    
    $scope.restaurants = LocationService.allLocations();
    $scope.search = function (item){
    	var searchString =  localStorage.getItem("searchtext").toLowerCase().replace(/(\r\n|\n|\r)/gm,"")
        if (item.name.toLowerCase().indexOf(searchString)!=-1 
        		|| item.address.toLowerCase().indexOf(searchString)!=-1 
        		|| item.zip.toString().toLowerCase().indexOf(searchString)!=-1) {
                return true;
            }
            return false;
      };
      
    $("#search-area").on('keyup', function(){
    	if (event.keyCode == 13) {
    		$("#nonVeg").scope().restaurantsList();
    	}
    })
    
  });
  
  
  