// function temp(){
//     alert(1);
// }

// temp(); // 함수호출

// 이건 함수 생성 호출이 다 분리 되어있어


// 즉시 실행 함수 확인하기

// 페이지 로딩 시 바로 수행됨
(function(){
    const str = "점심 메뉴 추천해주세요."
    console.log(str);
})();

(function(){
    // 변수명 중복 X
    // 지역에 선언이 되서 중복이 안되는거지
    const str = "오늘 점심은 서브웨이";
    console.log(str);
})();



// -------------------------------------------------------

// 화살표 함수(Arrow Function)

// 1. 기본 형태 ([매개변수]) => {}
// document.getElementById("btn1").addEventListener("click", function(){})
document.getElementById("btn1").addEventListener("click", ()=>{
    alert("화살표 함수 기본 형태 입니다.")
});

// 즉시 실행 함수 + 화살표 함수
(() => {
    console.log("즉시 실행 함수 + 화살표 함");
})()


// 2. 매개변수 1개 매개변수 => {}
document.getElementById("btn2").addEventListener("click",e => {

    // 매개변수 e (또는 event ) : 이벤트 관련 정로를 모두 가지고있는 객체
    // console.log(e);

    // e.target : 이벤트가 발생한 대상(요소)
    // console.log(e.target);
    e.target.style.backgroundColor = "yellow";


    // ***** [화살표 함수 주의 사항] ***** 
    // -> 화살표 함수를 이벤트 핸들러로 사용할 경우
    //    this는 window 객체를 나타내게 된다.
    //    (화살표 함수 내부에서 this 사용 불가)
    //      ==> e.target으로 대체
    console.log(this);
})


// 3. {}, return 생략 : () -> 값 또는 식

function print(fn){ // fn : 전달 받은 함수
    console.log(fn(2));
} 

document.getElementById("btn3").addEventListener("click", () => {

    // 익명 함수
    print(function(num){ return num * 10 })

    // 익명 함수
    print(num=>num * 100)

});