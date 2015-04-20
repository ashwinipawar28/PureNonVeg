/**
 * 
 */
app.controller('adminController', function ($scope) {
	$scope.filename = "restaurant";
	$scope.data = [{a: "id", b:"image_name", c: "name", d:"speciality", e: "address", f: "cuisine", g: "ratings", h: "reviews", i: "photos", j: "zip"},
	               {a: "", b:"img/", c: "", d:"", e: "", f: "", g: "", h: "", i: "", j: ""}];
	
	$scope.filename = "menu";
	$scope.menu_data = [{a: "restaurant_id", b:"type", c: "name", d:"description", e: "price"}];
	
	$scope.csv = {
	    	content: null,
	    	header: true,
	    	separator: ',',
	    	result: null
	    };
});