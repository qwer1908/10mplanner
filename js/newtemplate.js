const newtemplate = document.querySelector(".newtemplate")
const body = document.querySelector(".templatebody")
newtemplate.addEventListener("click", newtemplateClicked)
function newtemplateClicked () {
    const newdiv = document.createElement("div")
    const newa=document.createElement("a")
    
    newdiv.style.height="100px";
    newdiv.style.width="100px";
    newdiv.style.border="solid";
    
    body.appendChild(newdiv);
}