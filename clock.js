const clock = document.querySelector(".clock")
const table = document.querySelectorAll(".time > div")
const dates = document.querySelector(".date")
const timestamp = document.querySelector(".timestamp")


function onClickTimestamp(){
    note.value += clock.innerText;
    const date = new Date();
    console.log("clicked");
}

timestamp.addEventListener("click", onClickTimestamp)


 function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
}

function getDate() {
    const date = new Date();
    dates.innerText = `${date.getFullYear()} / ${date.getMonth()+1} / ${date.getDate()}`;
}

for (let i = 0; i < table.length; i++) {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours)
    if ( i+5 === hours) {
        table[i].classList.add("animation");
    }
}

function sentence(){
    const date = new Date()
    table[i].classList.add("animation");

    
}


setInterval(getClock, 1000)
setInterval(getDate, 1000)







