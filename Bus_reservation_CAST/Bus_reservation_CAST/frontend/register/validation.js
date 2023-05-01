import {users} from '../../database.js'


let data = ""
let index 

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)

    function custom(obj){
        if(obj.email == data.user_email && obj.password == data.user_password){
            index = obj.id - 1 ;
            sessionStorage.setItem("index", index);
            return true ;
        }
        return false ;
    }

    let found = users.find(obj => custom(obj))

    if(found){
        document.getElementById("successful").innerHTML= " login successful "
        alert("login Successful")
        window.location.href = "../choose_src_dest_date/homePage.html";
    }
    else{
        alert("login Unsuccessful")
        document.getElementById("unsuccessful").innerHTML= " login unsuccessful "
    }
    
});



