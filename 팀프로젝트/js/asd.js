while(true) /*조건*/{
    userName = prompt("당신을 이름을 입력해주세요");
    console.log(userName);
    if(userName.length <= 3 && userName.length != 0){
        break;
    }
    alert("이름을 다시 입력하시오");
}
// 해당조건을 통과한 이름을 전광판 userName에 입력
document.querySelector("#userName").innerHTML = userName;
alert(`${userName} 구단주님의 승리를 기원합니다!`);

//변수 선언
let strike = 0; // 스트라이크 카운터
let ball = 0; // 볼 카운트
let out = 0; // 아웃 카운트
let comCount = 1; // 컴퓨터 점수
let userCount = 1; // 사용자 점수
let roundCount = 0; // 라운드 점수 입력
let turn = 0; // 턴 확인 : 0이면 컴퓨터 1이면 사용자
let roo1 = 0;
let roo2 = 0;
let roo3 = 0;

let strikeCount = document.querySelector('.strike');
let ballCount = document.querySelector('.ball');
let outCount = document.querySelector('.out');


//sbo 구현
const strk1 = document.querySelector("#strk1");
const strk2 = document.querySelector("#strk2");
const ball1 = document.querySelector("#ball1");
const ball2 = document.querySelector("#ball2");
const ball3 = document.querySelector("#ball3");
const out1 = document.querySelector("#out1");
const out2 = document.querySelector("#out2");


// 컨트롤러
const button1 = document.querySelectorAll(".btn")[0];
const button2 = document.querySelectorAll(".btn")[1];
const button3 = document.querySelectorAll(".btn")[2];

//출력값 알림판
const noticeElem = document.getElementById("alert_text");
let comNum = document.querySelectorAll('.com_num');
let userNum = document.querySelectorAll('.user_num');
//notice 
function text_notice() {
    noticeElem.innerHTML = notice;
    console.log()
}




// let strike=0;
// let ball=0;
// let out=0;
// let roo=0;

// if(strike>=3){
// out +=1;
// strike=0;
// ball=0;
// }
// if(ball>=4){
//     roo+=1;
//     strike=0;
//     ball=0;
// }
// if(out>=3){
//     roo=0;
//     strike=0;
//     ball=0;
//     out =0;
// }
// if(strike>=1){
//     strk1.style.backgroundSize="100%"
// }
// if(strike>=2){
//     strk2.style.backgroundSize="100%"
// }
// if(ball>=1){
//     ball1.style.backgroundSize="100%"
// }
// if(ball>=2){
//     ball2.style.backgroundSize="100%"
// }
// if(ball>=3){
//     ball3.style.backgroundSize="100%"
// }
// if(out>=1){
//     out1.style.backgroundSize="100%"
// }
// if(out>=2){
//     out2.style.backgroundSize="100%"
// }



//sbo카운트

// function skc(a){
//     strikeCount.innerHTML = a;
// }
// function ballco(a){
//     ballCount.innerHTML = a;
// }
// function outco(a){
//     outCount.innerHTML = a;
// }


//컴퓨터 버튼 구현
function btn1() {

    // console.log("클릭되었습니다.");
    const com_strike = Math.floor(Math.random() * 100);
    if (com_strike < 6) { // com_strike가 5%의 확률로 홈런일 때
        notice = ('컴퓨터가 HOMERUN을 쳤습니다 !');
        if(com_strike < 6) {
            roo = +4;
            console.log(roo);
        }
    } else if (com_strike >= 6 && com_strike < 46) { // com_strike이 6-45일 때(40% 확률)
        notice = ('컴퓨터의 스트라이크 !');
        if(com_strike >= 6 && com_strike < 46) {
            strike = +1;
            console.log(strike);
        }
    } else if (com_strike >= 46 && com_strike < 66) { // com_strike이 46-65일 때 (20% 확률)
        notice = ('컴퓨터의 안타 !');
        if(com_strike >= 46 && com_strike < 66) {
            roo = +1;
            console.log(roo);
        }
    } else if (com_strike >= 66 && com_strike < 86) { // com_strike이 66-85일 때 (20%)
        notice = ('컴퓨터의 파울 !');
        if(com_strike >= 66 && com_strike < 86) {
            strike = +1;
            console.log(strike);
        }
    } else { // com_strike이 86-100일 때 (15% 확률)
        notice = ('컴퓨터의 볼 !');
        ball = +1;
            console.log(ball);
        
    }

    if(strike>=3){
    out +=1;
    strike=0;
    ball=0;
    }
    if(ball>=4){
        roo+=1;
        strike=0;
        ball=0;
    }
    if(out>=3){
        roo=0;
        strike=0;
        ball=0;
        out =0;
    }
    if(strike>=1){
        strk1.style.backgroundSize="100%"
    }
    if(strike>=2){
        strk2.style.backgroundSize="100%"
    }
    if(ball>=1){
        ball1.style.backgroundSize="100%"
    }
    if(ball>=2){
        ball2.style.backgroundSize="100%"
    }
    if(ball>=3){
        ball3.style.backgroundSize="100%"
    }
    if(out>=1){
        out1.style.backgroundSize="100%"
    }
    if(out>=2){
        out2.style.backgroundSize="100%"
    }

    console.log("strike:",strike);
    console.log("ball:",ball);
    console.log("out:",out);
}
function btn2() {
    // console.log("클릭되었습니다.");
    const com_ball = Math.ceil(Math.random() * 100)
    if (com_ball < 2) { // com_ball이 홈런일 때 (1% 확률)
        notice = ('컴퓨터가 HOMERUN을 쳤습니다 !');
    } else if (com_ball >= 2 && com_ball < 21) { // com_ball이 2-20일 때 (19% 확률)
        notice = ('컴퓨터의 안타 !');
    } else if (com_ball >= 21 && com_ball < 61) { // com_ball이 21-60일 때 (40% 확률)
        notice = ('컴퓨터의 볼 ');
    } else if (com_ball >= 61 && com_ball < 81) { // com_ball이 61-80일 때 (20% 확률)
        notice = ('컴퓨터의 볼 !');
    } else { // com_ball이 81-100일 때
        notice = ('컴퓨터의 파울 !');
    }
}
function btn3() {
     // console.log("클릭되었습니다."); 
     notice = ('필살기 사용 ! 마구 !'); //100% 확률 단, 1회 사용가능
}


//사용자 버튼 구현
// function btn1() {
//     // console.log("클릭되었습니다.");
//     const swing = Math.floor(Math.random() * 100);
//     if (swing < 6) { // swing이 홈런일 때 (5% 확률)
//         notice = ('HOMERUN');
//     } else if (swing >= 6 && swing < 56) { // swing이 6-55일 때(40% 확률)
//         notice = ('스트라이크 !');
//     } else if (swing >= 56 && swing < 86) { // swing이 56-85일 때(30% 확률)
//         notice = ('안타 !');
//     } else { // swing이 86-100일 때 (15%확률)
//         notice = ('파울 !');
//     }
// }
// function btn2() {
//     // console.log("클릭되었습니다.");
//     const waiting = Math.floor(Math.random() * 100)
//     if (waiting < 11) { // swing이 홈런일 때 (5% 확률)
//         notice = ('데드볼 ! 1루 진루합니다 !');
//     } else if (waiting >= 11 && waiting < 56) { // swing이 6-25일 때 (40% 확률)
//         notice = ('스트라이크 !');
//     } else { // swing이 86-100일 때 (15% 확률)
//         notice = ('볼 !');
//     }
// }
// function btn3() {
//      // console.log("클릭되었습니다.");
//      notice = ('필살기 사용 ! 홈런 !'); //100% 확률 단, 1회 사용가능
// }

function changeButton() {
    if (game.isComputerAttack) {
        button1.innerHTML = "스트라이크";
        button2.innerHTML = "볼";
        button3.innerHTML = "마구";
    } else {
        button1.innerHTML = "스윙";
        button2.innerHTML = "볼 지켜보기";
        button3.innerHTML = "필살기";
    }
    }