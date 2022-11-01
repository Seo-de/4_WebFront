// innerHTML로 읽어오기 (요소 내부 내용(태그,속성,내용)을 얻어와 문자열로 반환)
function getInnerHTML1(){

    // HTML 문서 내에서 id 속성값이 "test1"인 요소를 얻어와
    // 상수형 변수(const) t1에 저장 - 문서 전체를 DOM이라는 document로 저장

    const t1 = document.getElementById("test1");

    // 브라우저 콘솔에 출력 - 자바의 println같은 구문
    console.log(t1.innerHTML);
}

// innerHTML로 변경하기 - 화면 내용 변경 가능한 동시에 태그, 속성도 해석됨(HTML Converter 이용)
// 한줄한줄 해석하기 때문에 느려서 많이 권장하는 방법은 아니래
function setInnerHTML1(){

    const t1 = document.getElementById("test1");

    t1.innerHTML = "<b class='red'>변경된 <br><br> 내용입니다.</b>";
}

// innerHTML 응용
function add(){
    // 1) id 속성값이 "area1"인 요소를 얻어와 변수에 저장
    const area1 = document.getElementById("area1");

    // 2) area1 요소의 이전 내용에 새로운 내용을 누적
    area1.innerHTML += "<div class='area1-box'></div>"
}

// 자바 처럼 밖에 변수 선언을 하면 공통적으로 사용이 가능
const t2 = document.getElementById("test2");

// innerText로 읽어오기(내용만 얻어옴)
function getInnerText1(){
    // clg 자동 완성 -> console.log()   (단, JS ES6 snippets 필요)
    console.log(t2.innerText);
    console.log(t2.innerHTML);
}
// innerText로 변경하기
function setInnerText1(){
    t2.innerText = "<p class='red'>변경된 내용입니다.</p>";

}


// confrim
function fnConfirm(){

    // console.log(window.confirm("테스트")); // true/false 확인 반환

    // 조건문(if, switch) 작성법 Java와 동일

    if(confirm("배경색을 분홍색으로 바꾸시겠습니까?")){ // 확인
        document.getElementById("confirmTest").style.backgroundColor="pink";
    } else{ // 취소
        document.getElementById("confirmTest").style.backgroundColor="gray";

    }
}


// window.prompt("내용")
function fnPrompt(){
    const input = prompt("변경할 버튼명을 입력하세요");
                // 입력한 값 or null 반환되서 input에 저장이 되겠지
    if(input != null){
        document.getElementById("promftTest").innerText=input;
    }else{
        alert("취소되었습니다.");
    }
}