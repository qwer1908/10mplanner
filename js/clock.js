const clock = document.querySelector(".clock");
const table = document.querySelectorAll(".time > div");
const dates = document.querySelector(".date");
const day = document.querySelector(".day");
const timestamp = document.querySelector(".timestamp");
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function onClickTimestamp(){
    note.innerText += clock.innerText;
    console.log("clicked");
}

timestamp.addEventListener("click", onClickTimestamp)


 function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}

function getDate() {
    const date = new Date();
    const daynumber = `${date.getDay()}`;
    dates.innerText = `${date.getFullYear()} / ${date.getMonth()+1} / ${date.getDate()}`;
    day.innerText = `${daysOfWeek[daynumber-1]}`;
}

for (let i = 0; i < table.length; i++) {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours)
    if ( i+4 === hours) {
        table[i].classList.add("animation");
    }
}

function sentence(){
    table[i].classList.add("animation");

    
}


setInterval(getClock, 1000)
setInterval(getDate, 1000)







