import { routes, cities } from "../../database.js";

let list = document.getElementById("locations");
cities.forEach(function (item) {
  let option = document.createElement("option");
  option.value = item;
  list.appendChild(option);
});

let data = "";
let bus_price = 0;
let bus_number = 0;
let bus_time = 0;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);

  function custom(obj) {
    if (obj.source == data.source && obj.dest == data.dest) {
      bus_price = obj.price;
      bus_number = obj.number;
      bus_time = obj.time;

      var bbus_number = obj.number;
      var bbus_price = obj.price;
      var bbus_time = obj.time;
      var ddate = data.date;
      var ssrc = data.source
      var ddest = data.dest 
      sessionStorage.setItem("bbus_number", bbus_number);
      sessionStorage.setItem("bbus_price", bbus_price);
      sessionStorage.setItem("bbus_time", bbus_time);
      sessionStorage.setItem("ddate", ddate);
      sessionStorage.setItem("ssrc", ssrc);
      sessionStorage.setItem("ddest", ddest);

      return true;
    }
    return false;
  }

  let found = routes.find((obj) => custom(obj));

  if (found) {
    document.getElementById("available_buses").classList.remove("main_style");
    document.getElementById("available_buses").classList.add("new_main_style");
    document.getElementById("av_bus_no").innerHTML =
      "Bus Number" + " : " + bus_number;
    document.getElementById("av_bus_src").innerHTML =
      "Bus Source" + " : " + data.source;
    document.getElementById("av_bus_dest").innerHTML =
      "Bus Destination" + " : " + data.dest;
    document.getElementById("av_bus_price").innerHTML =
      "Ticket Cost" + " : " + bus_price + " " + "Rs";
    document.getElementById("av_bus_time").innerHTML =
      "Departure Time" + " : " + bus_time;
  } else {
    document
      .getElementById("not_available_buses")
      .classList.add("new_main_style");
    document.getElementById("not_available_buses").innerHTML =
      "Sorry No such Route Exist";
  }
});

document.getElementById("book_now").onclick = function () {
  location.href = "../book now/book_seat.html";
};
