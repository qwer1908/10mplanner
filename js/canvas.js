
body.addEventListener("mousedown", mouseStart); //pc
body.addEventListener("mouseup", mouseEnd); //pc
let newimage= '';

var pcLong = 0;
function mouseStart() {
    pcLong = Date.now(); //클릭한 시간 얻어옵니다
};
function mouseEnd(event) {
    const xa = event.offsetX;
    const ya = event.offsetY;
    function dropped(event){
        const xa = event.offsetX;
        const ya = event.offsetY;
        console.log(xa,ya)
        const target = event.target;
        console.dir(target);
        target.style.position = "absolute";
        target.style.marginLeft= xa + "px";
        target.style.marginTop= ya-740 + "px";
    }
    
    var result = Date.now() - pcLong;
    if(Number(result) > 800){ //롱 클릭 발생
    	console.log("[two_container] : [mouseup] : [LongClick]");
    	console.log("[start] : " + pcLong);
    	console.log("[end] : " + Date.now());
    	console.log("[data] : " + Number(result)); 
    	
 
        const img = document.createElement("img");
        const newid= Date.now();
        img.id = newid;
        newimage = newid;
        img.addEventListener("dragend", dropped)
        img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
        img.style.position = "absolute";

        console.log(xa,ya)

        img.style.marginLeft= xa + "px";
        img.style.marginTop= ya-740 + "px";
    
        body.appendChild(img);
        

        

    }
    
};