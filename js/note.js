note.innerText = localStorage.textdata;
   for (let i = 0; i < abox.length; i++) {
   abox[i].style.backgroundColor = localStorage.getItem(i);}
   


save.addEventListener("click", function(event){
    const textdata = note.innerText;
    localStorage.setItem("textdata", textdata);
 })
 