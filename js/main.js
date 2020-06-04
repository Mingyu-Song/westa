window.onload = () => {
    let right = document.querySelector("button.to-right");
    let left = document.querySelector("button.to-left");
    let story = document.querySelector(".storys");

    let rightImg = document.querySelector("div.to-right-img");
    let leftImg = document.querySelector("div.to-left-img");

    //스토리 스크롤 - 우
    scrollRight = () => {
        if(story.style.transform === "translateX(-51%)"){
            story.style.transform = "translateX(-70%)";
            rightImg.style.display = "none";
            story.classList.add('active')
        }
        else {
            story.style.transform = "translateX(-51%)";
            leftImg.style.display = "block";
            story.classList.add('active')
        }
    }

    right.addEventListener('click', scrollRight);
    //스토리 스크롤 - 좌
    scrollLeft = () => {
        if(story.style.transform ==="translateX(-70%)"){
            story.style.transform = "translateX(-51%)";
            rightImg.style.display = "block";
            story.classList.add('active')
        }
        else{
            story.style.transform = "translateX(0)";
            leftImg.style.display = "none";
            story.classList.add('active')
        }
    }

    left.addEventListener('click', scrollLeft);


    //검색에 값이들어오면 라벨이 사라짐

    let search = document.getElementById("searching");
    let searchLabel = document.querySelector(".search-label");
    let searchItem = document.querySelector(".searching-inside");
    searching = () => {
        if(search.value){
            searchLabel.style.display = "none";
            searchItem.style.left = "30px";
        
        } else{
            searchLabel.style.display = "inline";
            searchItem.style.left ="48%";
            search.blur();
        }
        
    }
    
    search.addEventListener('keyup',searching);

    searchingTwo = () => {
        searchItem.style.left = "30px";
    }

    search.addEventListener('click',searchingTwo);
    //댓글있으면 게시 활성화
    let commend = document.querySelector(".commend-article");
    let commendUpload = document.querySelector(".commend-upload")
    commendColor = () => {
        if(commend.value.length > 0){
            commendUpload.style.color = "#0095F6";
            commendUpload.style.cursor = "pointer";
        } else {
            commendUpload.style.color = "#B1D6F7";
        }
    }
    commend.addEventListener('keyup', commendColor);

    //댓글달기
    let printWord = "";
    commendUp = () => {
        if(commend.value.length > 0){
            let word = commend.value;
            let newWord = `<div style="margin-bottom:3px; width:100%; word-break:normal;"><span style="font-weight:600;">corini </span>${word}</div>`;
            let where = document.querySelector(".commend");
            printWord += newWord;
            where.innerHTML= printWord;
            commend.value = "";
        } 
        return
    }
    commendUpTwo = e => {
        if(e.keyCode === 13 && commend.value.length > 0){
            e.preventDefault();
            let word = commend.value;            
            let newWord = `<div style="margin-bottom:3px; width:100%; word-break:normal;"><span style="font-weight:600;">corini </span>${word}</div>`;
            let where = document.querySelector(".commend");
            printWord += newWord;
            where.innerHTML= printWord;
            commend.value = "";
        } else if(e.keyCode === 13){     //얘를 안하면 엔터누르면 띄어씌기 된후에 엔터를 또누르면 값이 입력된다.
            e.preventDefault();
        }
    }
    commendUpload.addEventListener('click', commendUp);
    commend.addEventListener('keydown', commendUpTwo);

    //하트누르면 빨간하트 애니메이션효과인데 망함
    let heart = document.querySelector(".post-do-like");
    redHeart = () => {
        if(heart.classList.contains('red')){
            heart.classList.remove('red');
            heart.classList.add('blank');
        } else {
            heart.classList.add('red');
            heart.classList.remove('blank');
        }
    }
    heart.addEventListener('click', redHeart);

    //팝업시 배경누르면 나가기
    let body = document.querySelector('html');
    let modalPage = document.querySelector('.more-page-bg');
    modal = () => {
        location.href="#";
        body.style.overflow = "auto";
    }
    modalPage.addEventListener('click', modal);
    
    //팝업시 스크롤 금지
    let dots = document.querySelector('.post-who-more');
    scroll = () => {
        if(location.href="#more-page"){
            body.style.overflow = "hidden";
        }
    }


    dots.addEventListener('click', scroll)
}