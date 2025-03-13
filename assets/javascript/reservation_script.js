const tripLocation = document.getElementById("location");
const checkIn = document.getElementById("check-in");
const checkOut = document.getElementById("check-out");
const mail = document.getElementById("email");
const success = document.querySelector(".reservation--success");
const reservationButton = document.getElementById("reservation-button")

reservationButton.addEventListener("click",() =>{

    // console.log(tripLocation.value, checkIn.value, checkOut.value, mail.value)
    if (tripLocation.value != "" && checkIn.value != "" && checkOut.value != "" && mail.value != ""){
        success.classList.add("success")
        setTimeout(() => {
            success.classList.remove("success")
        }, 1500);

    }
    // else{
    //     alert("nooo")
    // }
})
