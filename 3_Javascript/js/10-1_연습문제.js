document.getElementById("inputId").addEventListener("change", function(){
    const regEx = /^[a-z][\w\-\_]{5,13}$/;
    if(regEx.test(this.value)){
        this.style.backgroundColor="springgreen";
        this.style.color="black"
    }else{
        this.style.backgroundColor="red";
        this.style.color="white";
    }
})

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");

inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value.trim().length==0){
        // if(inputPwConfirm.value.trim().length != 0){
            inputPwConfirm.value="";
            alert("비밀번호를 입력해주세요");
            inputPw.focus();
            return;
        // }
    }
})

inputPw.addEventListener("keyup", function(){
    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText="비밀번호 일치";
        pwMessage.style.color="green";
        // 클래스 추가해서 색상 변경해도 된데. 그래서 답이 2가지래
    }else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.style.color="red"
    }
})
inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value == inputPwConfirm.value){
        pwMessage.innerText="비밀번호 일치";
        pwMessage.style.color="green";
    }else{
        pwMessage.innerText="비밀번호 불일치";
        pwMessage.style.color="red"
    }
})



const nameMessage = document.getElementById("nameMessage");
document.getElementById("inputName").addEventListener("change", function(){
    const regEx = /^[가-힇]{2,5}$/;
    if(regEx.test(this.value)){
        nameMessage.innerText="정상입력";
        nameMessage.style.color = "green";
    }else{
        nameMessage.innerText="한글만 입력하세요"
        nameMessage.style.color="red";
    }
})


const inputTel = document.getElementById("inputTel");

function validate(){
    
/*    // 성별 방법 1
    const gender = document.getElementsByName("gender"); // 요소 2개짜리 배열

    // 라디오/체크박스.checked : 체크되면 true / 아니면 false;
    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요.");
        return false;
    }
*/

    // 성별 방법 2
    const gender = document.querySelector("input[name='gender']:checked");
                // 체크된 성별 라디오 버튼만 얻어오기

    if(gender == null){
        alert("성별을 선택해주세요.");
        return false;
    }

    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regEx.test(inputTel.value)){
        alert("전화번호 형식이 올바르지 않습니다.");
        return false;
    }

    return true;
    
}
