
button.addEventListener("click", function(){
    const spana = document.createElement("span");
    var abcdef = color.value;
    spana.innerText = "-";
    spana.style.backgroundColor = abcdef;
    spana.classList.add("radius")
    note.append(spana);
 })
 