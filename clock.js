const clock = document.querySelector(".clock")
const love = document.querySelector(".note")
const table = document.querySelectorAll(".time")

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}
setInterval(getClock, 1000)



