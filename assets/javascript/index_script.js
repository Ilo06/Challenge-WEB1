const mail = document.getElementById("mail");
const pass = document.getElementById("password");
const button = document.getElementById("button");
const buttonLoading = document.getElementById("button-loading")


let accMail = "accepted_mail@gmail.com";
let accPass = "12345678";

button.addEventListener("click", () => {
    button.classList.add("hide");
    buttonLoading.classList.remove("hide");

    setTimeout(() => {        
        if (mail.value != accMail || pass.value != accPass) {
            alert("You have missing values or wrong values")
        } else {
            alert("Welcome")
        }
        button.classList.remove("hide");
        buttonLoading.classList.add("hide");
    }, 1000);

})
