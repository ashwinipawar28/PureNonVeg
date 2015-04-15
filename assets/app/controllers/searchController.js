  app.controller("nonVegController",function ($scope, $http, LocationService) {
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
    		localStorage.clear();
    		if (this.value.indexOf(",") < 0) {
    			localStorage.setItem("searchtext", this.value);
    		} else {
    			localStorage.setItem("searchtext", this.value.substring(0, this.value.indexOf(",")));
    		}
            
    		$("#nonVeg").scope().restaurantsList();
    	}
    })
    
  });
  
  
  