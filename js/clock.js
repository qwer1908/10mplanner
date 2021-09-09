const clock = document.querySelector(".clock");
const table = document.querySelectorAll(".time > div");
const dates = document.querySelector(".date");
const day = document.querySelector(".day");
const timestamp = document.querySelector(".timestamp");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function onClickTimestamp(){
    const date = new Date();
    const time = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`
    note.innerText += time;
    console.log("clicked");
}

timestamp.addEventListener("click", onClickTimestamp)


 function getClock() {
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
    
}

function getDate() {
    const date = new Date();
    const daynumber = date.getDay();
    dates.innerText = `${date.getFullYear()} / ${String(date.getMonth()+1).padStart(2, "0")} / ${String(date.getDate()).padStart(2,"0")}`;
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







