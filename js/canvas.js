
const stickerList = ["sticker0.png", "sticker1.png", "sticker2.png", "sticker3.png", "sticker4.png"]
const stickerSelector = document.querySelector(".sticker-selector");

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

function selectPage(){
    function optionNone() {
        example.removeChild(optionPage);
    }
    const example = document.querySelector(".example")
    const optionPage = document.createElement("div")
    optionPage.classList.add("box")
    optionPage.style.position = "absolute";
    optionPage.style.left="200px";
    optionPage.style.top="-250px";
    const optionOff = document.createElement("button")
    optionOff.innerText ="x"
    optionOff.style.position = "absolute";
    optionOff.style.left = "250px";
    optionOff.addEventListener("click", optionNone)
    example.appendChild(optionPage);
    optionPage.appendChild(optionOff);
    for (let i = 0; i < stickerList.length; i++) {
        const stickerselecting = document.createElement("div")
        stickerselecting.style.height="50px";
       stickerselecting.style.width = "50px";
       stickerselecting.style.backgroundImage = `url(img2/sticker${[i]}.png)`;
       stickerselecting.style.backgroundSize = " contain";
      
       stickerselecting.addEventListener("click", stickerSelected)
       function stickerSelected(event){
           const stick = document.querySelector(".sticker-selector");
            const a = event.target;
           const b=a.style.backgroundImage;
           console.log(b);
           stick.style.backgroundImage= b;
           stick.style.backgroundSize = "cover";

       }
        optionPage.appendChild(stickerselecting);
    }
        
        

}

stickerSelector.addEventListener("click", selectPage);



function mouseEnd(event) {
    
    const xa = event.pageX;
    const ya = event.pageY;
    console.dir(event);    
    var result = Date.now() - pcLong;
    if(Number(result) > 800){ 
        const newid= Date.now();
        console.log("longclick")     
        const newsticker = stickerSelector.style.backgroundImage
        console.dir(stickerSelector);	
        const img = document.createElement("div");
        img.id = newid;
       img.style.height="80px";
       img.style.width = "80px";
       img.style.backgroundImage = newsticker;
       img.style.backgroundSize = " contain";
       img.style.position="absolute";
       img.style.left=xa-40+"px";
       img.style.top=ya-40+"px";
       img.addEventListener("click", showDeleteButton);
       function showDeleteButton(){
        if (xbutton.style.display = "none"){
            xbutton.style.display = "block"}
        console.log("imageclick")
    }
        const xbutton = document.createElement("div")
        xbutton.innerText = "x";
        xbutton.style.position = "absolute";
        xbutton.style.height="10px";
        xbutton.style.left = "50px";
        xbutton.style.display = "none";
        xbutton.addEventListener("click", deleteImage)
        function deleteImage() {
            body.removeChild(img);
        };

        body.appendChild(img);
     
       
       
        img.append(xbutton);
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