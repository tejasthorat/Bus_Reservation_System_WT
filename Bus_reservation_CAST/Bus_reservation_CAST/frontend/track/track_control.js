import { users ,coordinates, routes } from "../../database.js";

var bus_time = sessionStorage.getItem("bbus_time");
var bus_price = sessionStorage.getItem("bbus_price");
var bus_date = sessionStorage.getItem("ddate");
var bus_src = sessionStorage.getItem("ssrc") 
var bus_dest = sessionStorage.getItem("ddest") 
var bus_number = sessionStorage.getItem("bbus_number");
var total_price = sessionStorage.getItem("ttotal_price");
var selected_seats = sessionStorage.getItem("sselected_seats");
var index = sessionStorage.getItem("index") ;

document.getElementById("username").innerHTML = users[index].name 

document.getElementById("phone").innerHTML = users[index].mobile 

document.getElementById("date").innerHTML = bus_date 

document.getElementById("bus_number").innerHTML = bus_number 

document.getElementById("bus_timings").innerHTML = bus_time 

document.getElementById("src").innerHTML = bus_src

document.getElementById("dest").innerHTML = bus_dest


var cur = ""
for (var i = 0; i < selected_seats.length; i++) {
    cur = cur + selected_seats[i] ;
}

document.getElementById("selected_seats").innerHTML = cur 
document.getElementById("selected_seats").classList.add("selected_seat_style")

document.getElementById("total_price").innerHTML = total_price + " " + "Rs."


// ---------------------------------------------------------
function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

// ---------------------------------------------------------

let lat1, lat2 , long1, long2 


function custom(obj) {
    if (obj.location == bus_src ) {
        lat1 = obj.lat ;
        long1 = obj.long
    }
  }

let found = coordinates.find((obj) => custom(obj));


function custom2(obj) {
    if (obj.location == bus_dest ) {
        lat2 = obj.lat ;
        long2 = obj.long
    }
  }

found = coordinates.find((obj) => custom2(obj));

let journey_distance = calcCrow(lat1,long1,lat2,long2) ;

let bus_speed 

function custom3(obj) {
    if (obj.number == bus_number ) {
        bus_speed = obj.speed ;
    }
  }

found = routes.find((obj) => custom3(obj));

var time_for_journey = Math.ceil((journey_distance/bus_speed)  * 60)  // in minutes

journey_distance = Math.ceil(journey_distance) 

document.getElementById("j_Time").innerHTML = time_for_journey + " " + "Minutes"
document.getElementById("j_distance").innerHTML = journey_distance + " " + "Km"