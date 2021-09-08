const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY="todos"
let toDos = [];
let checked = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
    console.log("deletetodo")
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function buttonShow(event){
    const li = event.target.parentElement;
    const button = li.querySelector("button");
        button.style.display = "inline-block";
    console.log("buttonShow");
}

function checkboxClick(event){
    const li = event.target.parentElement;
    localStorage.setItem("checked", JSON.stringify(checked));}

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.addEventListener("click", buttonShow);
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.addEventListener("click", checkboxClick);
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
    toDoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}







