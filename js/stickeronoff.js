const onbutton = document.querySelector(".example>button:last-child");

function onbuttonClicked() {
    if (onbutton.style.backgroundColor == "white"){
        onbutton.innerText="on";
        onbutton.style.backgroundColor = "yellow";
    }
    else {
        onbutton.innerText="off";
        onbutton.style.backgroundColor = "white";
    }
} 
onbutton.addEventListener("click", onbuttonClicked)