const mail = document.getElementById("mail");
const pass = document.getElementById("password");
const button = document.getElementById("button");
const buttonLoading = document.getElementById("button-loading");
const alert = document.getElementById("login__form__alert");


let accMail = "accepted_mail@gmail.com";
let accPass = "12345678";

button.addEventListener("click", () => {
    button.classList.add("hide");
    buttonLoading.classList.remove("hide");
    console.log(mail.value, pass.value)
    setTimeout(() => {        
        if (mail.value != accMail || pass.value != accPass) {
            alert.classList.toggle("hide")
            // alert("You have missing values or wrong values")
        } else {
            // alert("Welcome")
            window.location.href = "assets/pages/mainpage.html"
        }
        button.classList.remove("hide");
        buttonLoading.classList.add("hide");
    }, 1000);

})
