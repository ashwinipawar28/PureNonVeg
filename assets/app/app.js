var app = angular.module( "nonVegApp", ['ngAutocomplete']);

var searchText;


  app.controller("nonVegController",function ($scope, $http) {
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
    
    $scope.restaurants = [{"id": 101,
    		  "image_name": "img/rest-1.png",
    		  "name": "Minus 18 Degrees",
    		  "speciality": "Sweet Tooth",
    		  "address": "273/5, Baner Main Road, Opposite Aman Honda Showroom..",
    		  "cuisine": "Continental, Cafe, Desserts",
    		  "ratings": "4.0",
    		  "reviews": "24",
    		  "photos" : "50",
    		  "zip" : 411045
    		  },
    		  
    		    {"id": 102,
    		  "image_name": "img/rest-2.png",
    		  "name": "Hotel Green Park",
    		  "speciality": "Veggie Friendly",
    		  "address": "Hotel Greenpark, 14/B/2, Baner, Pune",
    		  "cuisine": "North Indian, Chinese, Continental, Thai, Mexican",
    		  "ratings": "4.0",
    		  "reviews": "24",
    		  "photos" : "50",
    		  "zip" : 411045
    		  },
    		  
    		    {"id": 101,
    		  "image_name": "img/rest3.png",
    		  "name": "Malaka Spice",
    		  "speciality": "Pan-Asian Delicacies",
    		  "address": " 1st Floor, Atria Building, Off Baner Road, Pune",
    		  "cuisine": "Malaysian, Vietnamese, Indonesian, Thai, Chinese, Asian, As...",
    		  "ratings": "4.0",
    		  "reviews": "24",
    		  "photos" : "50",
    		  "zip" : 411045
    		  },
    		  
    		    {"id": 101,
    		  "image_name": "img/rest-1.png",
    		  "name": "Minus 18 Degrees",
    		  "speciality": "Sweet Tooth",
    		  "address": "273/5, Baner Main Road, Opposite Aman Honda Showroom..",
    		  "cuisine": "Continental, Cafe, Desserts",
    		  "ratings": "4.0",
    		  "reviews": "24",
    		  "photos" : "50",
    		  "zip" : 411045
    		  },
    		  
    		    {"id": 101,
    		  "image_name": "img/rest4.png",
    		  "name": "Post 91 - Infinity Rooftop Restaurant",
    		  "speciality": "Rooftops",
    		  "address": "Level 9, Icon Tower, Baner, Pune",
    		  "cuisine": "North Indian, Chinese, Italian, Continental",
    		  "ratings": "4.0",
    		  "reviews": "24",
    		  "photos" : "50",
    		  "zip" : 411045
    		  }];
    
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
  
  
  