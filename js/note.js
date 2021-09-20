note.innerText = localStorage.textdata;
   for (let i = 0; i < abox.length; i++) {
   abox[i].style.backgroundColor = localStorage.getItem(i);}
   


save.addEventListener("click", function(event){
    const textdata = note.innerText;
    localStorage.setItem("textdata", textdata);
 })
 
 note.addEventListener('click', function() {
  
   /* Make content editable when clicked */
   note.setAttribute('contenteditable', true);
 });
 
 note.addEventListener('blur', function() {
 
   /* Remove content editable when blurred to ensure spelling lines disappear */
   note.setAttribute('contenteditable', false);
 });