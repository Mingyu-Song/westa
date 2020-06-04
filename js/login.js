window.onload=function(){
    //아이디부분 라벨 동적구현
    let inputOne = document.getElementById('inputId');
    function moveLabel(){
        let moveLabelOne = document.getElementById('labelId');
        console.log(inputOne.value);
        if(inputOne.value.length > 0){
            moveLabelOne.style.fontSize = "6px";
            moveLabelOne.style.top = "-5px";
            moveLabelOne.style.transition = ".1s";
            inputOne.style.fontSize = "11px";
            inputOne.style.paddingTop = "14px";
        }
        else{
            moveLabelOne.style.fontSize = "12px";
            moveLabelOne.style.top = "0px";
            inputOne.style.paddingTop = "0";
            inputOne.style.fontSize = "14px";
        }
    }
    inputOne.addEventListener('keyup', moveLabel);
    
    //패스워드부분 라벨 동적구현
    let showBtn = document.getElementById('pwShow-btn');
    let inputTwo = document.getElementById('inputPw');
    function moveLabelTwo(){
        let moveLabelTwo = document.getElementById('labelPw');
        if(inputTwo.value.length > 0){
            moveLabelTwo.style.fontSize = "6px";
            moveLabelTwo.style.top = "-5px";
            moveLabelTwo.style.transition = ".1s";
            inputTwo.style.fontSize = "12px";
            inputTwo.style.paddingTop = "14px";
            showBtn.style.display = "block";
        }
        else{
            moveLabelTwo.style.fontSize = "12px";
            moveLabelTwo.style.top = "0px";
            inputTwo.style.paddingTop = "0";
            inputTwo.style.fontSize = "14px";
            showBtn.style.display = "none";
        }
    }
    inputTwo.addEventListener('keyup', moveLabelTwo);
    //로그인 버튼 표시
    let loginBtn = document.getElementById('loginBtn');
    function loginAllow(){
        if(inputOne.value.length > 0 && inputTwo.value.length >= 6){
            loginBtn.style.backgroundColor = "#0095F6";
            loginBtn.style.cursor = "pointer";
            return "allow";
        } else {loginBtn.style.backgroundColor="rgb(177, 214, 247)";}
    }
    inputOne.addEventListener('keyup', loginAllow);
    inputTwo.addEventListener('keyup', loginAllow);

    function pass(){
        if(loginAllow() === "allow"){
            window.location.href = "../main.html";
        }
    }
    loginBtn.addEventListener('click', pass);

    //패스워드 보이기 숨기기 
    function passwordShow(){
        let inputPassword = document.getElementById('inputPw');
        if (inputPassword.type === 'password'){
            inputPassword.type = "text";
            showBtn.innerHTML = "숨기기";
        } else {
            inputPassword.type = "password";
            showBtn.innerHTML = "비밀번호 표시";
        }
    }
    showBtn.addEventListener('click', passwordShow);
}