import { users } from "../../database.js";

var bus_time = sessionStorage.getItem("bbus_time");
var bus_price = sessionStorage.getItem("bbus_price");
var bus_date = sessionStorage.getItem("ddate");
var bus_src = sessionStorage.getItem("ssrc") 
var bus_dest = sessionStorage.getItem("ddest") 
var bus_number = sessionStorage.getItem("bbus_number");
var total_price = sessionStorage.getItem("ttotal_price");
var selected_seats = sessionStorage.getItem("sselected_seats");
var index = sessionStorage.getItem("index") ;

console.log(index)
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


let data ;
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    data = Object.fromEntries(new FormData(e.target).entries());
    location.href = "../choose_src_dest_date/homePage.html";
})
