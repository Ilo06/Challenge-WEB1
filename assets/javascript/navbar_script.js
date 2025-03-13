const respNavbar = document.querySelector(".responsive-navbar");
const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close")


menuButton.addEventListener(("click"), () => {
    respNavbar.classList.add("translated-navbar")
})

closeButton.addEventListener(("click"),() => {
    respNavbar.classList.remove("translated-navbar")
})

