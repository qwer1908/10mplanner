const clock = document.querySelector(".clock");
const table = document.querySelectorAll(".time > div");
const dates = document.querySelector(".date");
const day = document.querySelector(".day");
const timestamp = document.querySelector(".timestamp");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let savedDate = localStorage.getItem("date")
dates.addEventListener("click", selectDate)


function selectDate(){

    const dateSelectPage = document.createElement("input")
    dateSelectPage.type = "date";
    
    dateSelectPage.style.position = "absolute";
    dateSelectPage.style.top= "86px";
    dateSelectPage.style.left="40px";
    dateSelectPage.addEventListener("input", dateSelected)
    body.appendChild(dateSelectPage);

    function dateSelected (event) {
        const dateSelectPages = event.target;
        savedDate = dateSelectPage.value;
        localStorage.setItem("date", JSON.stringify(dateSelectPages.value));
        dates.innerText = dateSelectPages.value;
        body.removeChild(dateSelectPages);

    }
}

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
    dates.innerText = `${date.getFullYear()} / ${String(date.getMonth()+1).padStart(2, "0")} / ${String(date.getDate()).padStart(2,"0")}`;
}


getDate()



setInterval(getClock, 1000)

if (savedDate !== null) {
    console.log("blabla")
    dates.innerText = JSON.parse(localStorage.getItem("date"));
}






