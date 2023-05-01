import { routes } from "../../database.js";

var bus_time = sessionStorage.getItem("bbus_time");
var bus_price = sessionStorage.getItem("bbus_price");
var bus_number = sessionStorage.getItem("bbus_number");

document.getElementById("selected_bus").innerHTML = bus_number;
document.getElementById("selected_bus_time").innerHTML = bus_time;
document.getElementById("selected_bus_price").innerHTML =
  bus_price + " " + "Rs.";

routes.forEach(function (item) {
  if (item.number == bus_number) {
    var count = 0;
    item.seats.forEach(function (i) {
      count++;
      var cur = document.getElementById("seat" + count.toString());
      if (i == 1) {
        cur.classList.add("booked_seat");
      } else {
        cur.classList.add("free_seat");
      }
    });
  }
});

let selected_seats = [];
let total_selected_seats = 0;
document.getElementById("total_selected_seats").innerHTML =
total_selected_seats;

let total_price = 0;

routes.forEach(function (item) {
  if (item.number == bus_number) {
    var count = 0;
    item.seats.forEach(function (i) {
      count++;
      var cur = document.getElementById("seat" + count.toString());

      if (i == 1) {
        cur.addEventListener("click", function onClick(event) {
          alert("seat is already booked");
        });
      } else {
        cur.addEventListener("click", function onClick(event) {
          if (cur.classList.contains("chosen_seat")) {
            cur.classList.remove("chosen_seat");
            cur.classList.add("free_seat");
            total_selected_seats--;
            document.getElementById("total_selected_seats").innerHTML = total_selected_seats;

            var sel = cur.outerHTML;
            var sell = sel[13] 
            if(sel[14] != '"'){
                sell += sel[14] ;
            }

            var x = parseInt(sell, 10)
            
            const index = selected_seats.indexOf(x);
            if (index > -1) {
              selected_seats.splice(index, 1)
            }
            
            document.getElementById("total_chosen_seats").textContent=selected_seats.join(",")

            total_price = bus_price*selected_seats.length ;

            document.getElementById("total_cost").innerHTML = total_price;

          } else {
            cur.classList.remove("free_seat");
            cur.classList.add("chosen_seat");
            total_selected_seats++;
            document.getElementById("total_selected_seats").innerHTML =
              total_selected_seats;

              var sel = cur.outerHTML;
              var sell = sel[13] 
              if(sel[14] != '"'){
                  sell += sel[14] ;
              }
  
              var x = parseInt(sell, 10)

            selected_seats.push(x);
            
            document.getElementById("total_chosen_seats").textContent=selected_seats.join(",")
            
            total_price = bus_price*selected_seats.length ;

            document.getElementById("total_cost").innerHTML = total_price;
          }
        });
      }
    });
  }
});



document.getElementById("confirm_details").onclick = function () {
    let ttotal_price
    let sselected_seats = []
    sessionStorage.setItem("ttotal_price", total_price);
    sessionStorage.setItem("sselected_seats",selected_seats );
    console.log(total_price)
    if(total_price == 0){
        alert("haven't selected any seat")
    }
    else{
        location.href = "../payment/payment.html";
    }
  };

