
// 색 출력 영역

// 요소를 얻어와서 변수에 저장

// 클래스명, 태그명, name 속성값, querySelectorAll() 같은 경우
// 요소를 얻어올 때 배열 형식으로 반환!!!!(제발 잊지 말자)
const container = document.getElementsByClassName("container")[0];
// elements라서 배열로 반환이 돼. 그래서 배열 적어줌.

const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

// JS로 CSS 추가하기

// container 클래스 요소에 display : flex 추가
container.style.display="flex";

// area.클래스 요소에 
// 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// disply : flex, main-axis 방향 : 열(세로)

//area.style.height = "170px"; 
// 배열이라서 스타일 같은게 전혀 없데. 그래서 이건 잘못 적힌거래.
// 그래서 하나하나 꺼내서 스타일을 적용해줘야 된데.

// 일반for문 또는 for of 향상된 for문 사용해야 된데.
for(let item of area){
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.height="170px"
    item.style.width="150px"
    item.style.border="1px solid black"
    item.style.display="flex"
    item.style.flexDirection = "column";

}

// box 클래스 요소에 높이 150px, 아랫쪽 테두리 1px 실선 검정색
for(let item of box){
    item.style.height = "150px";
    item.style.borderBottom = "1px solid black";
}

// box-color 클래스 요소의 테두리와 outline을 없애기
for(let item of boxColor){
    item.style.border = "none";
    item.style.outline = "none";
}


// box-color 클래스 요소의 입력된 값이 변했을 때
// 위에 있는 box 클래스 요소의 배경색을 변경
// + 입력된 input요소 글씨색도 변경
for(let i=0; i<boxColor.length; i++)

// change 이벤트 : 포커스를 읽고 나서  또는 엔터 입력 시
//                  작성된 값이 이전 값과 다른 경우

// blur : 포커스를 잃었을 때 / 엔터 인식 안됨
boxColor[i].addEventListener("change", function(){

    // console.log(this.value);

    // box-color input 태그와 같은 인덱스 번째 box 요소 배경색 변경
    box[i].style.backgroundColor = this.value;

    // boxColor[i].style.color=this.value; // 글자색 변경
    // rgb, # 모두 가능
    this.style.color=this.value;
})


// transition-duration 변경 버튼 클릭 시
// #input1에 작성된 값 만큼의 transition-duration을
// 모든 box 요소에 추가
// + #print1 요소의 내용을 #input1에 작성된 값을 변경

// hint.  transition-duration에 세팅되는 값은 초단위(s) 입니다.

document.getElementById("btn1").addEventListener("click", function(){

    // 내가 한 방법. 이것도 맞는데 코드가 더 기네
    // const print1 = document.getElementById("print1");
    // const input1 = document.getElementById("input1");

    // print1.innerText= input1.value;

    // for(let i=0; i<boxColor.length; i++){
    //     box[i].style.transitionDuration = input1.value+'s';
    // }

    const duration = document.getElementById("input1").value;
    for(let item of box){
        item.style.transitionDuration = duration+"s";
    }
    document.getElementById("print1").innerText = duration;

});


// #clearBtn 클릭 시
// .box의 모든 배경색을 없애고
// .box-color에 작성된 값도 없애기
document.getElementById("clearBtn").addEventListener("click", function(){
    for(let item of box){ // .box 배경색 삭제
        item.style.backgroundColor="";
    }
    for(let itme of boxColor){ // .box-color 값 삭제
        itme.value="";
    }
})




