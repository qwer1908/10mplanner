const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

function paintToDo(newTodo){
    const list = document.createElement("li")
    const span = document.createElement("span")
    const button = document.querySelector("button")
    button.innerText = "x"
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(list);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);