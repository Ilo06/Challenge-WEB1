const navbar = document.querySelector("nav"); 
const about = document.querySelector("#about");
const destination = document.querySelector("#destination");
const reservation = document.querySelector("#reservation");
const hotel = document.querySelector("#hotel");

const sendInput = document.getElementById("sign-up--input")
const send = document.querySelector(".sign-up--send");
const sent = document.getElementById("sent");


send.addEventListener("click", () => {

    if (sendInput.value != "") {
        sent.classList.remove("sent-hide")
        setTimeout(() => {
            sent.classList.add("sent-hide")
        }, 1000);
    }

})


window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { 
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});
window.addEventListener('scroll',() => {
    if (window.scrollY > 400) {
        about.classList.add("scrolled");
    } else {
        about.classList.remove("scrolled");
    }
});
window.addEventListener('scroll',() => {
    if (window.scrollY > 800) {
        destination.classList.add("scrolled");
    } else {
        destination.classList.remove("scrolled");
    }
});
window.addEventListener('scroll',() => {
    if (window.scrollY > 1200) {
        reservation.classList.add("scrolled");
    } else {
        reservation.classList.remove("scrolled");
    }
});
window.addEventListener('scroll',() => {
    if (window.scrollY > 1600) {
        hotel.classList.add("scrolled");
    } else {
        hotel.classList.remove("scrolled");
    }
});

if (window.innerWidth < 720) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) { 
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
    window.addEventListener('scroll',() => {
        if (window.scrollY > 400) {
            about.classList.add("scrolled");
        } else {
            about.classList.remove("scrolled");
        }
    });
    window.addEventListener('scroll',() => {
        if (window.scrollY > 2600) {
            destination.classList.add("scrolled");
        } else {
            destination.classList.remove("scrolled");
        }
    });
    window.addEventListener('scroll',() => {
        if (window.scrollY > 4000) {
            reservation.classList.add("scrolled");
        } else {
            reservation.classList.remove("scrolled");
        }
    });
    window.addEventListener('scroll',() => {
        if (window.scrollY > 4600) {
            hotel.classList.add("scrolled");
        } else {
            hotel.classList.remove("scrolled");
        }
    });
}

