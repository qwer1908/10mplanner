const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function buttonShow(event){
    const li = event.target.parentElement;
    const button = li.querySelector("button");
  
        button.style.display = "block";
 
}

function paintToDo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    span.addEventListener("click", buttonShow);
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);








