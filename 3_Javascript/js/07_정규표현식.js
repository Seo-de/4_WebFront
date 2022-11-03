
// 정규 표현식 개체 생성 및 확인하기

document.getElementById("check1").addEventListener("click", function(){
    
    // 정규  표현식 객체 생성
    const regEx1 = new RegExp("script");
    // "script"와 일치하는 문자열이 있는지 검사하는 정규식 객체
    
    const regEx2 = /java/;
    // "java"와 일치하는 문자열이 있는지 검사하는 정규식 객체

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";

    const str2 = "java, db, html, css, js, spring, mybatis, jdbc 모두 사용중입니다.";

    const str3 = "java, java, java";

    // 확인하기
    console.log("regEx1.test(str1) : " + regEx1.test(str1) );
    console.log("regEx1.exec(str1) : " + regEx1.exec(str1) );
    //console.log(regEx1.exec(str1));

    console.log("regEx1.test(str2) : " + regEx1.test(str2) );
    console.log("regEx1.exec(str2) : " + regEx1.exec(str2) );

    console.log("regEx1.test(str3) : " + regEx1.test(str3) );
    console.log("regEx1.exec(str3) : " + regEx1.exec(str3) );
    
    console.log("regEx2.test(str1) : " + regEx2.test(str1) );
    console.log("regEx2.exec(str1) : " + regEx2.exec(str1) );
    //console.log(regEx1.exec(str1));

    console.log("regEx2.test(str2) : " + regEx2.test(str2) );
    console.log("regEx2.exec(str2) : " + regEx2.exec(str2) );

    console.log("regEx2.test(str3) : " + regEx2.test(str3) );
    
    console.log( regEx2.exec(str3) );

})


// 메타 문자 확인하기

document.getElementById("check2").addEventListener("click", function(){

    // 결과 출력용 div
    const div1 = document.getElementById("div1");

    // 이전 내용 다 삭제함
    div1.innerHTML = ""; 

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regEx1 = /[abcd]/;

    div1.innerHTML += "/abcd/ , apple : " + regEx1.test("apple") + "<hr>";
    div1.innerHTML += "/abcd/ , qwerty : " + regEx1.test("qwerty") + "<hr>";
    
    //^(캐럿) : 문자열의 시작을 의미 -> ^가
    const regEx2 = /^group/;
    div1.innerHTML += "/^group/ , group100 : " + regEx2.test("group100") + "<hr>";
    div1.innerHTML += "/^group/ , 100group : " + regEx2.test("100group") + "<hr>";
    
    // ^[abcd] : 문자열의 시작이 a,b,c,d 중 하나로 시작하는지 검색
    const regEx3 = /^[abcd]/;
    div1.innerHTML += "/^[abcd]/, group : " + regEx3.test("group100") + "<hr>"; // f
    div1.innerHTML += "/^[abcd]/, car : " + regEx3.test("car") + "<hr>"; // t
    div1.innerHTML += "/^[abcd]/, dark : " + regEx3.test("dark") + "<hr>"; // t

    // $(달러) : 문자열의 끝을 의미 -> 가$
    const regEx4 = /team$/;
    div1.innerHTML += "/team$/ , A-team : " + regEx4.test("A-team") + "<hr>";
    div1.innerHTML += "/team$/ , team-A : " + regEx4.test("team-A") + "<hr>";

    // ^[ABCD]-team$ : 대문자 ABCD 중 하나로 시작하고 -team으로 끝나야 함.
    // -> A-team / B-taem / C-team / D-team 이 맞음 true / 아니면 false

    // [0-9] -> 숫자
    // [a-z] -> 영어 소문자
    // [A-Z] -> 영어 대문자

    // ^[A-Z][0-9]$ -> 시작은 영어 대문자, 끝은 숫자

    // 특수문자를 제외한 문자 하나 -> ^[a-zA-Z0-9!]$
});


// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function(){

    // 정규식 작성하기
    // - 한글 2글자 이상 6글자 이하의 문자열
    // - 단자음/모음 제외 (ㄱㄱ, ㅜ 이런거 제외)
    const regEx = /^[가-힇]{2,6}$/;

    const result1 = document.getElementById("result1");

    // 유효성 검사
    // 여기서 this == document.getElementById("inputName")
    if(regEx.test(this.value)){ // 유효하면
        result1.innerText="유효한 이름 형식입니다.";

        //result1.style.color="green"; // 이 방식은 자제하는게 좋데. 
                // inline 방식이라서 스타일이 깨질 수도 있고 HTML 코드가 엄청 늘어난데

         // 요소.classList : 요소가 가지고있는 클래스를 배열로 반환
        // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
        // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
        // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가
        
        // confrim 클래스 추가 / error 클래스 제거
        result1.classList.add("confirm");
        result1.classList.remove("error");
    }else{
        result1.innerText="잘못된 이름 형식입니다.";

        result1.classList.add("error");
        result1.classList.remove("confirm");
        
    }

});

