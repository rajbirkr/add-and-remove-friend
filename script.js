
let istatus = document.getElementById("status");

let add_friend = document.querySelector("#a-dd");
let remove = document.getElementById("remove");


add_friend.addEventListener("click", function(){

    istatus.innerHTML="Request Send!"
    istatus.style.color= "green"

})

remove.addEventListener("click", function(){

    if (istatus.innerHTML === "Request Send!"){
        istatus.innerHTML="Request Withdrawn"
        // istatus.textContent ="Why!"
        istatus.style.color= "tomato"
    }
   
})