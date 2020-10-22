get_geo_position();
function on_success(position){
	
	document.getElementById("latitude").innerHTML = "Latitutde = " + position.coords.latitude;
	
	document.getElementById("longitude").innerHTML = "Longitude = " + position.coords.latitude;
	
	document.getElementById("acc").innerHTML = "Accuracy = " + position.coords.latitude;
	
	document.getElementById("altitude").innerHTML = "Altitude = " + position.coords.latitude;
	
	var img_url = "https://maps.googleapis.com/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyCkATcslyG_g6he4LoTZgIb44k_0Z2OhDQ";
	
	document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

function on_error(e)
{
	document.getElementById("text").innerHTML = e.message;
}

var geo_params = {
	enableHighAccuracy:true,
	timeout:1000,
	maximumAge:0
};

function get_geo_position()
{
	var geo = navigator.geolocation;
	geo.getCurrentPosition(on_success, on_error, geo_params);
}