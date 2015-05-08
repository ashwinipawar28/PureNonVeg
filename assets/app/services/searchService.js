/**
 * 
 */

app.factory("LocationService",['$http', function($http) {
  var locations = [{"id": 101,
	  "image_name": "img/rest-1.png",
	  "name": "Minus 18 Degrees",
	  "speciality": "Sweet Tooth",
	  "address": "273/5, Baner Main Road, Opposite Aman Honda Showroom..",
	  "cuisine": "Continental, Cafe, Desserts",
	  "ratings": "4.0",
	  "reviews": "24",
	  "photos" : "50",
	  "zip" : 411045,
	  "label" : "Minus 18 Degrees, 273/5, Baner Main Road, Opposite Aman Honda Showroom, 411045"
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
	  "zip" : 411045,
	  "label" : "Minus 18 Degrees, 273/5, Baner Main Road, Opposite Aman Honda Showroom, 411045"
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
	  "zip" : 411045,
	  "label" : "Minus 18 Degrees, 273/5, Baner Main Road, Opposite Aman Honda Showroom, 411045"
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
	  "zip" : 411045,
	  "label" : "Minus 18 Degrees, 273/5, Baner Main Road, Opposite Aman Honda Showroom, 411045"
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
	  "zip" : 411045,
	  "label" : "Minus 18 Degrees, 273/5, Baner Main Road, Opposite Aman Honda Showroom, 411045"
	  }];

  return {
    allLocations: function() {
      return  $http.get("http://private-5dbfc-purenonveg.apiary-mock.com/restuarant/id");
    },
    first: function() {
      return users[0];
    }
  };
}]);