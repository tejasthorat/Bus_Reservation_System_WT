import { users } from "../../database.js";


let data = "";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  data = Object.fromEntries(new FormData(e.target).entries());
  

  if (data.user_password != data.user_password_confirm) {
    alert("Password not match");
  } else {
    alert("account created successfully");

    var obj = {}
    obj["email"] = data.user_email 
    obj["password"] = data.user_password 
    obj["mobile"] = data.user_phone 
    
  }
});
