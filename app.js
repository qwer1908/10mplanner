var abox = document.querySelectorAll(".box > div");
var input = document.querySelector("input");
var note = document.querySelector(".note")
const form = document.querySelector(".form")
const button = document.querySelector(".clickbutton")


function onSubmit(tomato) {
tomato.preventDefault();
console.log
}
form.addEventListener("submit", onSubmit)



   

for (let i = 0; i < abox.length; i++) {
   abox[i].className = i
   
   
   
   function onMouseDown(){
      console.log("mousedown");
      const firstbox = abox[i].className;
      button.className= firstbox
      var abcdef = input.value;
      if(abox[i].style.backgroundColor === ""){ 
         abox[i].style.backgroundColor = abcdef; }
      else {
         abox[i].style.backgroundColor = "";
      }
   } 


  
   function onMouseUp() {
      console.log("mouseup")
      const lastbox = abox[i].className;
      var abcdef = input.value;
   
      for(let a=button.className; a-1<lastbox; a++) {
         if (button.className === lastbox){
            break;  
         }
         else {
            abox[a].style.backgroundColor =abcdef;
         }
      } 

   }

   
   
 abox[i].addEventListener("mousedown", onMouseDown) 
 abox[i].addEventListener("mouseup", onMouseUp)

 
 
}



// 0. 시계 기능/
// 1. 채크리스트와 스탬프
// 2. 계획세우는건 연하게, 한번더클릭하면 진하게 변하게 할까?/
// 3. 랜덤 명언 
// 4. 텍스트박스 만들기
// 5. 저장기능 
// 6. jpg, pdf 로 저장할 수 있는 기능/
// 7. 저장 시 사이즈 정할 수 있는 기능 
// 8 Time stamp 기능


// Username의 validity check! 비어있으면 안되고 너무 길어도 안 됨!


// 12:34~ 
// 0: mousedown -> mouseup  ->x
// x: mousedown -> mouseup -> 0
// mousedown은 toggle, mouseup은 같은 div 누르면 무효처리