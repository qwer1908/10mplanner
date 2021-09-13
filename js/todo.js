const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function buttonShow(event) {
    const li = event.target.parentElement;
    const button = li.querySelector("button");

    if (button.style.display === "none"){
        button.style.display = "inline-block";
    }
    else {
        button.style.display = "none";
    }
}    

function checkboxClick(event) {
    const checkbox = event.target;
    const checkboxid = checkbox.id;
    if (checkbox.classList == "xbox") {
        console.log(checkbox.classList);
        objIndex = toDos.findIndex((obj => obj.id == checkboxid));
        toDos[objIndex].checking = "abox";
        checkbox.classList = "abox"
        console.log(checkbox.classList);
    }

    else if (checkbox.classList !== "xbox") {
        console.log("checkcheck")
        objIndex = toDos.findIndex((obj => obj.id == checkboxid));
        toDos[objIndex].checking = "xbox";
        checkbox.classList = "xbox";
        console.log(checkbox.classList);
    }
    saveToDos();
}

function paintToDo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.addEventListener("click", buttonShow);
    const checkbox = document.createElement("div");
    checkbox.classList.add(newTodo.checking);
    checkbox.addEventListener("click", checkboxClick);
    checkbox.id = list.id
    const button = document.createElement("button");
    button.innerText = "x";
    button.style.display = "none";
    button.addEventListener("click", deleteTodo);
    list.appendChild(checkbox);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        checking: "xbox"
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


function deleteTodo(event) {
    console.log("deletetodo")
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}







