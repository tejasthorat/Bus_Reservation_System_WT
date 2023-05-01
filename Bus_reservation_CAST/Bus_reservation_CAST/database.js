/**
 session storage :
 bbus_number
 ssrc 
 ddest
 bbus_price
 bbus_time
 ddate
 ttotal_price
 sselected_seats []
 */

export let cities = ["Pune Bus Station" , "Swargate","Lohgaon","Sangramwadi","Shivaji Nagar"]

export let coordinates = [
    {
        "location" : "Pune Bus Station" ,
        "lat" : 18.610740,
        "long" : 73.744010 
    } ,

    {
        "location" : "Swargate" ,
        "lat" : 18.501831,
        "long" : 73.863594
    } ,

    {
        "location" : "Lohgaon" ,
        "lat" : 19.587070,
        "long" : 74.508820
    } ,

    {
        "location" : "Sangramwadi" ,
        "lat" : 18.540359,
        "long" : 73.864548
    } ,

    {
        "location" : "Shivaji Nagar" ,
        "lat" : 18.5292449,
        "long" : 73.830716
    } 
]

export let routes = [
    {   "number" : "MH-101",
        "source" :"Pune Bus Station"  ,
        "dest" : "Swargate" ,
        "price" : 65 ,
        "time" : "10.30 AM",
        "seats" : [1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0],
        "speed" : 30 
    } ,

    {   
        "number" : "MH-102",
        "source" : "Pune Bus Station" ,
        "dest" : "Lohgaon",
        "price" : 80 ,
        "time" : "11.00 AM",
        "seats" : [0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
        "speed" : 35 
    } ,
    {   
        "number" : "MH-103",
        "source" : "Swargate" ,
        "dest" : "Sangramwadi",
        "price" : 40 ,
        "time" : "12.30 PM" ,
        "seats" : [0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0],
        "speed" : 20 
    } ,
    {   
        "number" : "MH-104",
        "source" : "Pune Bus Station" ,
        "dest" :  "Sangramwadi" ,
        "price" : 35 ,
        "time" : "1.00 PM",
        "seats" : [1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0],
        "speed" : 37 
    } ,
    {   
        "number" : "MH-105",
        "source" :  "Swargate",
        "dest" : "Lohgaon",
        "price" : 100 ,
        "time" : "10.30 AM",
        "seats" : [0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0],
        "speed" : 42 
    } ,

    {
        "number" : "MH-106",
        "source" :  "Pune Bus Station",
        "dest" : "Shivaji Nagar",
        "price" : 150 ,
        "time" : "11.30 AM",
        "seats" : [0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0],
        "speed" : 51 
    }
]

export let users = [
    {   
        "id" : 1,
        "email" : "chetan.patil@mitaoe.ac.in",
        "password" : "123456",
        "mobile" : "7798220411" ,
        "name" : "Chetan Patil",
        "gender" : "male" 
    },

    {   
        "id" : 2,
        "email" : "trivedi.sunit@mitaoe.ac.in",
        "password" : "123456",
        "mobile" : "883456123" ,
        "name" : "Sunit Trivedi",
        "gender" : "male" 
    },

    {   
        "id" : 3,
        "email" : "abhishek.pawar@mitaoe.ac.in",
        "password" : "123456",
        "mobile" : "123543523" ,
        "name" : "Abhishek Pawar",
        "gender" : "male" 
    },

    {   
        "id" : 4,
        "email" : "tejas.Thorat@mitaoe.ac.in",
        "password" : "123456",
        "mobile" : "9878682122" ,
        "name" : "Tejas Thorat",
        "gender" : "male" 
    },
]