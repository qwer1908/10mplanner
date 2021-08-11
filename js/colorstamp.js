button.addEventListener("click", function(){
    const spana = document.createElement("span");
    var abcdef = input.value;
    spana.innerText = "ㅁ";
    spana.style.backgroundColor = abcdef;
    note.append(spana);
    spana.classList.add("color")
 })
 