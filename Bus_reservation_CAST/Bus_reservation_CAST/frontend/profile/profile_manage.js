import { users } from "../../database.js";

var index = sessionStorage.getItem("index") ;

document.getElementById("u_name").innerHTML = users[index].name 
document.getElementById("u_name").classList.add("imported")

document.getElementById("u_mobile").innerHTML = users[index].mobile 
document.getElementById("u_mobile").classList.add("imported")

document.getElementById("u_mail").innerHTML = users[index].email
document.getElementById("u_mail").classList.add("imported")

document.getElementById("u_gender").innerHTML = users[index].gender
document.getElementById("u_gender").classList.add("imported")

document.getElementById("my_bookings").onclick = function () {
    location.href = "../track/track.html";
  };