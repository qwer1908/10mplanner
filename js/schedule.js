const scheduleForm = document.querySelector(".schedule-form");
const scheduleList = document.querySelector(".schedule-list");
const scheduleInput = scheduleForm.querySelector("input");

const SCHEDULE_KEY="scheduless"

let schedules = [];


function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
            return array[i];
        }
    }
   return null;
}

function circleClicked (event) {

    const clickedcircle = event.target;
    var clickedColor= findObjectByKey(schedules, "id", clickedcircle.id);
    console.log(clickedColor.color)
    color.value = clickedColor.color;

}

function saveSchedules() {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedules))
}

function schedulebuttonShow (event) {
    const list = event.target.parentElement;
    const schedulebut = list.querySelector("div:last-child");
    console.dir(schedulebut);
    if (schedulebut.className ===""){
    schedulebut.classList.add("xbox");
    }
    else{
        schedulebut.classList.remove("xbox");
    }

}

function deleteSchedule(eventer) {
    const li= eventer.target.parentElement;
    li.remove();
    schedules = schedules.filter((schedule) => schedule.id !== parseInt(li.id));
    saveSchedules();
}

function paintSchedule(newSchedule){
    const schedulelist = document.createElement("li");
    schedulelist.id = newSchedule.id;

    const colorcircle = document.createElement("div");
    colorcircle.id = newSchedule.id;
    colorcircle.style.backgroundColor = newSchedule.color;
    colorcircle.classList.add("colorcircle");
    colorcircle.addEventListener("click", circleClicked);
    
    const schedulespan = document.createElement("span");
    schedulespan.innerText = newSchedule.text;
    schedulespan.addEventListener("click", schedulebuttonShow);
    
    const schedulebutton = document.createElement("div");
    schedulebutton.addEventListener("click", deleteSchedule);

    
    
    
    
    schedulelist.appendChild(colorcircle);
    schedulelist.appendChild(schedulespan);
    schedulelist.appendChild(schedulebutton);
    scheduleList.appendChild(schedulelist);
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
    console.log(savedSchedules);
}

scheduleForm.addEventListener("submit", handleScheduleSubmit);

const savedSchedules = localStorage.getItem(SCHEDULE_KEY);

if (savedSchedules !== null) {
    console.dir(savedSchedules);
    const parsedSchedules = JSON.parse(savedSchedules);
    schedules = parsedSchedules;
    parsedSchedules.forEach(paintSchedule);
}