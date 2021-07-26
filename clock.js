const clock = document.querySelector(".clock")
const love = document.querySelector(".note")
const table = document.querySelectorAll(".time > div")

function getClock() {
    const date = new Date();
    const hours = date.getHours();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}

for (let i = 0; i < table.length; i++) {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours)
    if ( i === hours) {
        table[i].classList.add("animation");
    }
}

function sentence(){
    const date = new Date()
    const hours = date.getHours();
    table[i].classList.add("animation");

    
}
setInterval(getClock, 1000)




