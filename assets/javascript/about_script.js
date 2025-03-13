const count99 = document.getElementById("99count");
const count220 = document.getElementById("220count");
const count50 = document.getElementById("50count");

let i99 = 0;
let i220 = 0;
let i50 = 0;


window.addEventListener("scroll",()=>{
    if (window.scrollY > 400) {
        setInterval(() => {
            if (i99 <= 99) {
                count99.innerText = i99 + "%"
                i99++;
            }
        }, 75000/99);
        setInterval(() => {
            
            if (i220 <= 220) {
                count220.innerText = i220
                i220++;
            }
        }, 75000/220);
        setInterval(() => {
            if (i50 <= 50) {
                count50.innerText = i50
                i50++;
            }
        }, 75000/50);
    }
})
// setTimeout(() => {
   
// }, 400);

// window.addEventListener(("scroll"), () =>{
//     if (window.scrollY > 400) {
//         i99 = 0;
//         i220 = 0;
//         i50 = 0;
//     }
// })
