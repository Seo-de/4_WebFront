// Node 확인하기
document.getElementById("btn1").addEventListener("click", function(){

    // #test의 자식 노드를 모두 얻어와서 확인

    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환
    
    // 자식
    // 요소.childNodes : 요소의 자식 노드르 모두 반환(NodeList 형태)
    // 요소.firstChild : 첫 번째 자식 노드 탐색해 반환
    // 요소.lastChild : 마지막 자식 노드 탐색해 반환
    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해 반환

    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling : 요소의 다음 형제 노드를 반환
    
    const testNodeList = document.getElementById("test").childNodes;

    console.log(testNodeList);

    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode); // 부모 노드 탐색 (ul#test)

    // #li1의 부모의 배경색을 orange로 변경 (노드 탐색 활용 방법)
    li1.parentNode.style.backgroundColor = "orange";

    // #li1의 부모 노드의 마지막 부분에 "ABCD"라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가(덧붙이다)
    li1.parentNode.append("ABCD");

    const test = document.getElementById("test");
    // #test의 첫번째 자식 노드 찾기
    console.log(test.firstChild);
    
    // #test의 마지막 자식 노드 찾기
    console.log(test.lastChild);

    // #test의 자식 노드 중 5번인덱스 노드 찾기
    // 자식들이니까 배열로 찾아야됨.
    console.log(test.childNodes[5]);
    
    // #test의 자식 노드 중 5번 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기
    test.childNodes[5].append("ZZZ");
    
    
    // #test의 자식 노드 중 5번인덱의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling); // 4번
    
    // #test의 자식 노드 중 5번인덱의 다음 형제 노드
    console.log(test.childNodes[5].nextSibling); // 6번
    
    // 노드 탐색 구문 연속 작성
    // #test의 자식 노드 중 5번인덱의 이전 형제 노드의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling.previousSibling);


});


// Element(요소) 탐색 확인
document.getElementById("btn2").addEventListener("click", function(){

    const test = document.getElementById("test"); // 부모 요소
    const li2 = document.getElementById("li1"); // 자식 요소

    // #li1의 부모요소 탐색
    console.log(li1.parentElement); // ul

    // #li1의 부모 요소의 부모 요소 탐색
    console.log(li1.parentElement.parentElement); //body

    // #li1의 부모 요소의 부모 요소의 부모 요소 탐색
    console.log(li1.parentElement.parentElement.parentElement); // html
    // 문서 요소 한정이라 html 이상의 부모는 없음.

    // #test의 모든 자식 요소 탐색
    const list = test.children;
    console.log(list); // 요소들만 모여있어서 HTMLCollection 형태로 반환

    // #test의 첫 번째 자식 요소
    console.log(test.firstElementChild);
    
    // #test의 마지막 자식 요소
    console.log(test.lastElementChild);
    
    // #test의 자식 요소 중 2번 인덱스
    console.log(list[2]);

    // #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 클릭 시
    // 작성된 내용을 alert로 출력
    list[2].previousElementSibling.addEventListener("click", function(){
        
        // this == 이벤트가 발생한 요소 
        // == #test의 자식 요소 중 2번 인덱스의 이전 형제 요소
        alert(this.innerText);

        // 이벤트가 발생한 요소의 다음 다음 형제 요소의 배경색을 red로 변경
        this.nextElementSibling.nextElementSibling.style.backgroundColor="red";
    })

})


// innerHTML
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

let count3 = 1;

btn3.addEventListener("click", function(){
    if(count3 <= 10){
        const input = "<input type='text'>"
        div3.innerHTML += "<div>"+count3+input+"</div>";
        count3++; // 1 증가
        // 이게 밑에 새롭게 하나씩 추가 되는게 아니라 만들때마다 다시 다 새로 만들어서 내용들이 없어진데.
    }
})



// createElement - innerHTML문제점 해결해준데
const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");

let count4 = 1;

btn4.addEventListener("click", function(){

    if(count4 <= 10){

        // document.createElement("태그명") 함수 호출 
        // -> 해당 태그 요소를 생성하여 반환
        // -> 요소가 생성될 뿐이지 화면에 추가되는것이 아니다!

        const div = document.createElement("div");
        const input = document.createElement("input");

        // #div4 > div > input

        // div의 내용으로 count4 추가 후 1 증가
        div.innerText = count4;
        count4++;

        // input을 div의 마지막 자식으로 추가
        // 요소A.append(노드 또는 요소B)
        // -> 요소A의 마지막 자식으로 추가
        div.append(input);

        // #div4의 마지막 자식 추가
        div4.append(div);

    }
})