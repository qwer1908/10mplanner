const scheduleForm = document.querySelector(".schedule-form");
const scheduleList = document.querySelector(".schedule-list");
const scheduleInput = scheduleForm.querySelector("input");

const SCHEDULE_KEY="scheduless"

let schedules = [];


function saveSchedules() {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedules))
}

function deleteSchedule(event) {
    const li= event.target.parentElement;
    li.remove();
    schedules = schedules.filter((schedule) => schedule.id !== parseInt(li.id));
    saveSchedules();
}
function paintSchedule(newSchedule){
    const list = document.createElement("li");
    list.id = newSchedule.id;
    const colorcircle = document.createElement("div");
    colorcircle.id = newSchedule.id;
    colorcircle.style.backgroundColor = newSchedule.color;
    colorcircle.classList.add("colorcircle");
    const span = document.createElement("span");
    span.innerText = newSchedule.text;
    const button = document.createElement("button");
    button.innerText = "X";
 
    button.addEventListener("click", deleteSchedule)
    list.appendChild(colorcircle);
    list.appendChild(span);
    list.appendChild(button);
    scheduleList.appendChild(list);
}

function handleScheduleSubmit(event) {
    event.preventDefault();
    const newSchedule = scheduleInput.value;
    scheduleInput.value ="";
    const newScheduleObj = {
        text: newSchedule,
        color: color.value,
        id: Date.now(),
    }
    schedules.push(newScheduleObj);
    paintSchedule(newScheduleObj);
    saveSchedules();
}

scheduleForm.addEventListener("submit", handleScheduleSubmit);

const savedSchedules = localStorage.getItem(SCHEDULE_KEY);
if (savedSchedules !== null) {
    const parsedSchedules = JSON.parse(savedSchedules);
    schedules=parsedSchedules;
    parsedSchedules.forEach(paintSchedule);
}


