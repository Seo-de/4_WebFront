const num1 = document.getElementById("num1"); // 요소 추적 O, 값, 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus(){
    console.log(num1.value);
    console.log(num2.value);
    console.log(Number(num1.value) + Number(num2.value));
    result.innerHTML=Number(num1.value) + Number(num2.value);
}
function minus(){
    result.innerHTML=Number(num1.value) - Number(num2.value);
}
function mutiple(){
    result.innerHTML=Number(num1.value) * Number(num2.value);
}
function divid(){
    result.innerHTML=Number(num1.value) / Number(num2.value);
}
function remind(){
    result.innerHTML=Number(num1.value) % Number(num2.value);
}


// function cal(num1, num2){
//     switch(document.getElementById){
//         case '+' : num1 + num2; break;
//         case '-' : num1 - num2; break;
//         case '*' : num1 * num2; break;
//         case '/' : num1 / num2; break;
//         case '%' : num1 % num2; break;
//     }
//     result.innerHTML = Number(num1.value) 
// }

// function plus(){ // 함수 정의 (코드가 있다는 것을 인식하고 호출 전까지 수행 X)

//     // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행
//     const n1 = Number(num1.value);
//     const n2 = Number(num2.value);

//     console.log(n1+n2);
//     result.innerHTML = n1 + n2;
// }
