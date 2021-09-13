
const stickerList = ["sticker0.png", "sticker1.png", "sticker2.png", "sticker3.png", "sticker4.png","sticker5.png", "sticker6.png", "sticker7.png", "sticker8.png","sticker9.png", "sticker10.png"
, "sticker11.png" ,"sticker12.png","sticker13.png","sticker14.png","sticker15.png","sticker16.png","sticker17.png","sticker18.png","sticker19.png","sticker20.png"
,"sticker21.png", "sticker22.png","sticker23.png", "sticker24.png", "sticker25.png","sticker26.png","sticker27.png","sticker28.png","sticker29.png","sticker30.png"
,"sticker31.png", "sticker32.png", "sticker33", "sticker34", "sticker35","sticker36","sticker37","sticker38","sticker39.png","sticker40.png"
,"sticker41.png", "sticker42.png", "sticker43.png", "sticker44.png","sticker45.png","sticker46.png","sticker47.png","sticker48.png","sticker49.png","sticker50.png"
,"sticker51.png"];
const stickerSelector = document.querySelector(".sticker-selector");
var pcLong = 0;
let clickedx = '';
let clickedy = '';
let stickerInf = []
const STICKER_KEY ="stickerinformation"

console.log(stickerInf)


body.addEventListener("mousedown", mouseStart); 
body.addEventListener("mouseup", mouseEnd); 


function selectPage(){
    function optionNone() {
        example.removeChild(optionPage);
    }
    const example = document.querySelector(".example")
    const optionPage = document.createElement("div")
    optionPage.style.width="253px";
    optionPage.style.height="253px";
    optionPage.style.display="flex";
    optionPage.style.flexWrap='wrap';
    optionPage.style.backgroundColor= "wheat";
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
        stickerselecting.style.backgroundRepeat ="no-repeat";
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


function mouseStart(event) {
    pcLong = Date.now();
    console.log("mouse start!");
    clickedx = event.pageX;
    clickedy = event.pageY;
    console.log(clickedx,clickedy)
};



function mouseEnd(event) {
    
    const xa = event.pageX;
    const ya = event.pageY;
    console.dir(event);    
    var result = Date.now() - pcLong;
    if(Number(result) > 800){ 
        console.log("long click");        
       const newid= Date.now();
       const newsticker = stickerSelector.style.backgroundImage
       const img = document.createElement("div");
       img.id = newid;
       img.style.height="80px";
       img.style.width = "80px";
       img.style.backgroundImage = newsticker;
       img.style.backgroundSize = " contain";
       img.style.backgroundRepeat ="no-repeat";
       img.style.position="absolute";
       img.style.left=xa-40+"px";
       img.style.top=ya-40+"px";
       img.addEventListener("click", showDeleteButton);
       const newStickerObj ={
           backgroundSrc: newsticker,
           id: newid,
           xposition: xa,
           yposition: ya  
       } 
       stickerInf.push(newStickerObj);
       saveStickers()

       function showDeleteButton(){
            if (xbutton.style.display === "none"){
            xbutton.style.display = "block";}
            else {
            xbutton.style.display="none";
            }
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
            stickerInf = stickerInf.filter((toDo) => toDo.id !== parseInt(img.id));
            console.log(stickerInf);
            saveStickers();

        };

        body.appendChild(img);
     
        img.append(xbutton);
    }
    
};


function saveStickers() {
    localStorage.setItem(STICKER_KEY, JSON.stringify(stickerInf));
}

const savedStickers = localStorage.getItem(STICKER_KEY)



if (stickerInf !== null) {
    const parsedStickers = JSON.parse(savedStickers);
    stickerInf = parsedStickers;
    parsedStickers.forEach(paintSticker);
    function paintSticker(newstickers) {
        const stick = document.createElement("div");
        stick.id = newstickers.id
        stick.style.height="80px";
        stick.style.width = "80px";
        stick.style.backgroundImage = newstickers.backgroundSrc;
        stick.style.backgroundSize = " contain";
        stick.style.backgroundRepeat ="no-repeat";
        stick.style.position="absolute";
        stick.style.left=newstickers.xposition-40+"px";
        stick.style.top=newstickers.yposition-40+"px";
        stick.addEventListener("click", showDeleteButton);
        function showDeleteButton(){
            if (xbutton.style.display === "none"){
            xbutton.style.display = "block";}
            else {
            xbutton.style.display="none";
            }
        }

        const xbutton = document.createElement("div")
        xbutton.innerText = "x";
        xbutton.style.position = "absolute";
        xbutton.style.height="10px";
        xbutton.style.left = "50px";
        xbutton.style.display = "none";
        xbutton.addEventListener("click", deleteSticker)

        function deleteSticker(event) {
            const stick = event.target.parentElement;
            body.removeChild(stick);
            stickerInf = stickerInf.filter((toDo) => toDo.id !== parseInt(stick.id));
            console.log(stickerInf);
            saveStickers();
        };
        body.appendChild(stick);
        stick.appendChild(xbutton);
    }

}

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