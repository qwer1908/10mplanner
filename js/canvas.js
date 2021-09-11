
body.addEventListener("mousedown", mouseStart); 
body.addEventListener("mouseup", mouseEnd); 
var pcLong = 0;
let clickedx = '';
let clickedy = '';
function mouseStart(event) {
    pcLong = Date.now();
    clickedx = event.pageX;
    clickedy = event.pageY;
    console.log(clickedx,clickedy)
};
function showdeleteButton(event) {
    console.log("image clicked")
    const img = event.target;
    const xbutton = document.createElement("button");
    xbutton.innerText = "x";
    img.appendChild(xbutton);
    console.dir(img)
}

function mouseEnd(event) {
    const xa = event.pageX;
    const ya = event.pageY;
    console.dir(event);    
    var result = Date.now() - pcLong;
    if(Number(result) > 800){ 
        console.log("longclick")    	
        const img = document.createElement("img");
        const newid= Date.now();
        img.id = newid;
        img.src = "https://image.shutterstock.com/shutterstock/photos/1484978876/display_1500/stock-photo-sticker-sign-button-free-icon-free-sticker-badge-tag-1484978876.jpg"
        img.style.height = "50px";
        img.style.position = "absolute";
        img.style.marginLeft= xa + "px";
        img.style.marginTop= ya-820 + "px";
        
        
        body.appendChild(img);

        

        img.addEventListener("click", showdeleteButton)

        
    }
    
};

//Web & Mobile 다이어리 호환 가능 했으면 좋겠음.              
//monthly도 만들기
                               
//스티커 다운로드 화면
// -> 스티커 고르는 아이콘 누르면 여러개 종류별로 나타나도록
// -> 클릭하면 화면에 추가 
//1. drag and drop 가능하게 만든다
//2. 클릭해서 아이콘 누르면 크기 조정 가능
//3. 클릭해서 아이콘 누르면 이미지 돌아가게 조정 가능
//4 . 클릭해서 엑스표 누르면 삭제 가능
//5. 늦게 추가 된 스티커카 위로 가도록  