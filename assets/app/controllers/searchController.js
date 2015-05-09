  app.controller("nonVegController",function ($scope, $http, LocationService) {
    $scope.restaurantsList =  function() {
        if ($("#search-area").val().trim() != "")
        window.location.href = "restaurants.html";
    }
    LocationService.allLocations().then(function(data){
         $scope.restaurants = data.data;
    })
   
    $scope.search = function (item){
        var searchString =  localStorage.getItem("searchtext").toLowerCase().replace(/(\r\n|\n|\r)/gm,"")
        if (item.name.toLowerCase().indexOf(searchString)!=-1 
                || item.address.toLowerCase().indexOf(searchString)!=-1) {
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
    
    var _position = {};
/** code to sort restaurants as per user's location **/
function success(position) {
    console.log(position);
    _position = position.coords;
    sortStoresByDistance();  // this is explained further down
}
function error(err) {
    alert("Geolocation error : " + err);
}
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10
};

function googleCallback() {
    navigator.geolocation.getCurrentPosition(success, error, options);
}

$.getScript("https://www.google.com/jsapi", function () {
    google.load("maps", "3", {
        other_params: "sensor=false",
        streetViewControl: false,
        callback: function () {
            googleCallback();
        }
    });
});

    if (typeof (Number.prototype.toRad) !== "function") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

function sortStoresByDistance() {
    for (var i = 0; i < $scope.restaurants.length; i++) {
        $scope.restaurants[i].distance = getDistance(_position, $scope.restaurants[i]);
    }
    $scope.restaurants.sort(function (a, b) {
        return a.distance - b.distance;
    });
}

function getDistance(position1, position2) {
    var lat1 = position1.latitude;
    var lon1 = position1.longitude;
    var lat2 = Number(position2.latitude);
    var lon2 = Number(position2.longitude);

    console.log(lat1, lon1, lat2, lon2);

    var R = 6371; // km
    var dLat = (lat2 - lat1).toRad();
    var dLon = (lon2 - lon1).toRad();
    var lat1 = lat1.toRad();
    var lat2 = lat2.toRad();
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}
  });
  
  
  
  