const scheduleForm = document.querySelector(".schedule-form");
const scheduleList = document.querySelector(".schedule-list");
const scheduleInput = scheduleForm.querySelector("input");
const SCHEDULE_KEY="scheduless"
let schedules = [];


function paintSchedule(newSchedule){
    
    const list = document.createElement("li");
    list.id = newSchedule.id;
    const colorcircle = document.createElement("div");
    var abcdef = color.value;
    colorcircle.style.backgroundColor = abcdef;
    colorcircle.classList.add("colorcircle");
    const span = document.createElement("span");
    
    span.innerText = newSchedule.text;
    list.appendChild(colorcircle);
    list.appendChild(span);
    scheduleList.appendChild(list);
}

function handleScheduleSubmit(event) {
    event.preventDefault();
    const newSchedule = scheduleInput.value;
    scheduleInput.value ="";
    const newScheduleObj = {
        text: newSchedule,
        id: Date.now(),
    }
    schedules.push(newScheduleObj);
    paintSchedule(newScheduleObj);
}

scheduleForm.addEventListener("submit", handleScheduleSubmit);
