while(true) /*조건*/{
    userName = prompt("당신을 이름을 입력해주세요(세글자)");
    console.log(userName);
    if(userName.length <= 3 && userName.length != 0){
        break;
    }
    alert("이름을 다시 입력하시오");
}
// 해당조건을 통과한 이름을 전광판 userName에 입력
document.querySelector("#userName").innerHTML = userName;
alert(`${userName} 팀의 승리를 응원합니다 !`);

//변수 선언
let strike = 0; // 스트라이크 카운터
let ball = 0; // 볼 카운트
let out = 0; // 아웃 카운트
let foul = 0; // 파울 카운트
let roo = 0;
let homerun = 0;
let hit = 0;
let turn = 0; // 턴 확인 : 0이면 컴퓨터의 공격 1이면 사용자 공격
let com_score = 0;
let user_score = 0;
let comTotalScore = 0;
let userTotalScore = 0;

// sbo 객체 선언
let strikeCount = document.querySelector('.strike');
let ballCount = document.querySelector('.ball');
let outCount = document.querySelector('.out');

// roo 객체 선언
let  base1= document.querySelector('.base1');
let  base2= document.querySelector('.base2');
let  base3= document.querySelector('.base3');
roocount();

//sbo 구현
let strk1 = document.querySelector("#strk1");
let strk2 = document.querySelector("#strk2");
let ball1 = document.querySelector("#ball1");
let ball2 = document.querySelector("#ball2");
let ball3 = document.querySelector("#ball3");
let out1 = document.querySelector("#out1");
let out2 = document.querySelector("#out2");

// 컨트롤러
const button1 = document.querySelectorAll(".btn")[0];
const button2 = document.querySelectorAll(".btn")[1];
const button3 = document.querySelectorAll(".btn")[2];

//출력값 알림판
let noticeElem = document.getElementById("alert_text");
let comScoreElem = document.querySelectorAll('.com_score');
let userScoreElem = document.querySelectorAll('.user_score');
let comTotalScoreElem = document.querySelector('.com_total_score');
let userTotalScoreElem = document.querySelector('.user_total_score');

//change 
let chPitcher = document.querySelector(".pit");
let chCatcher = document.querySelector(".cat");
let chHitter = document.querySelector(".bat");
let chBase1 = document.querySelector(".b1");
let chBase2 = document.querySelector(".b2");
let chBase3 = document.querySelector(".b3");
let chDefender1 = document.querySelector(".d1");
let chDefender2 = document.querySelector(".d2");
let chDefender3 = document.querySelector(".d3");

//sbo 카운트 함수값
function sboclear(){
    strike = 0;
    ball = 0;
    foul = 0;
}
// 버튼 부분
function btn1() {
    if(turn%2==0){
        notice.style.fontSize = "0";
        let com_strike = Math.ceil(Math.random() * 100);
        if (com_strike < 4) { // com_strike가 1-3일 때
            noticeElem.innerHTML = ('컴퓨터가 HOMERUN을 쳤습니다 !');
            homerun = 1;
            com_score += roo+1
            sboclear();
            roo = 0;
        } else if (com_strike >= 4 && com_strike < 56) { // com_strike이 4-55일 때
            noticeElem.innerHTML = ('컴퓨터의 스트라이크 !');
            strike += 1;
        } else if (com_strike >= 56 && com_strike < 66) { // com_strike이 56-65일 때
            noticeElem.innerHTML = ('컴퓨터의 안타 !');
            roo += 1;
            hit += 1;
            sboclear();
            if (roo >= 4) {
                com_score += 1;
            }
        } else if (com_strike >= 66 && com_strike < 86) { // com_strike이 66-85일 때
            noticeElem.innerHTML = ('컴퓨터의 파울 !');
            foul += 1;
            if(strike<2){
                strike += 1;
            }           
        } else { // com_strike이 86-100일 때
            noticeElem.innerHTML = ('컴퓨터의 볼 !');
            ball += 1;
            if (roo >= 4) {
                com_score += 1;
            }
        }
        scoreUp();
        sboCount();
        roocount();
        endGame();
    }else {
        notice.style.fontSize = "0";
        let com_strike = Math.ceil(Math.random() * 100);
        if (com_strike < 4) { // com_strike가 1-3일 때
            noticeElem.innerHTML = (`${userName} 팀이 HOMERUN을 쳤습니다 !`);
            user_score += roo+1
            homerun = 1;
            sboclear();
            roo = 0;
        } else if (com_strike >= 4 && com_strike < 56) { // com_strike이 4-55일 때
            noticeElem.innerHTML = (`${userName} 팀 스트라이크 !`);
            strike += 1;
        } else if (com_strike >= 56 && com_strike < 71) { // com_strike이 56-70일 때
            noticeElem.innerHTML = (`${userName} 팀 안타 !`);
            roo += 1;
            hit += 1;
            sboclear();
            if (roo >= 4) {
                user_score+=1;
            }
        } else { // com_strike이 71-100일 때
            noticeElem.innerHTML = (`${userName} 팀 파울 !`);
            foul += 1;
            if(strike<2){
                strike += 1;
            }           
        }
        scoreUp();
        sboCount();
        roocount();
        endGame();
    }
}
function btn2() {
    if(turn%2==0){
        notice.style.fontSize = "0";
        const com_ball = Math.ceil(Math.random() * 100)
        if (com_ball < 2) { // com_ball이 1일 때
            noticeElem.innerHTML = ('컴퓨터가 HOMERUN을 쳤습니다 !');
            roo += 1;
            com_score += roo+1
            homerun = 1;
            sboclear();
        } else if (com_ball >= 2 && com_ball < 21) { // com_ball이 2-20일 때
            noticeElem.innerHTML = ('컴퓨터의 안타 !');
            roo += 1;
            sboclear();
            if (roo >= 4) {
                com_score+=1;
            }
        } else if (com_ball >= 21 && com_ball < 61) { // com_ball이 21-60일 때
            noticeElem.innerHTML = ('컴퓨터의 볼 ');
            ball += 1;
            if (roo >= 4) {
                com_score+=1;
            }
        } else if (com_ball >= 61 && com_ball < 81) { // com_ball이 61-80일 때
            noticeElem.innerHTML = ('컴퓨터의 스트라이크 !');
            strike += 1;
        } else { // com_ball이 81-100일 때
            if(strike<2){
                noticeElem.innerHTML = ('컴퓨터의 파울 !');
                foul += 1;
                if(strike<2){
                    strike += 1;
                }
            }
            else {
                noticeElem.innerHTML = ('컴퓨터의 파울 !');
                strike += 0;
            }
        }
        sboCount();
        roocount();
        scoreUp();
        endGame();
    }
    else {
        notice.style.fontSize = "0";
        const com_ball = Math.ceil(Math.random() * 100)
        if (com_ball < 51) { // com_ball이 1-50일 때
            noticeElem.innerHTML = (`${userName} 팀 스트라이크 !`);
            strike += 1;
        } else { // com_ball이 51-100일 때
            noticeElem.innerHTML = (`${userName} 팀 볼 !`);
            ball += 1;
            if (roo >= 4) {
                user_score+=1;
            }
        }
        sboCount();
        roocount();
        scoreUp();
        endGame();
    }
}

function btn3() {
    if(turn%2==0){
        notice.style.fontSize = "0";
        noticeElem.innerHTML = ('필살기 사용 ! 마구 !'); //100% 확률 단, 1회 사용가능
        out += 1;
        sboclear();
        sboCount();
        roocount();
        scoreUp();
        endGame();
        button3.disabled = true;
    }
    else {
        notice.style.fontSize = "0";
        noticeElem.innerHTML = ('필살기 사용 ! 홈런 !'); //100% 확률 단, 1회 사용가능
        user_score += roo+1
        homerun = 1;
        roo = 0;
        sboclear();
        sboCount();
        roocount();
        scoreUp();
        endGame();
        button3.disabled = true;
    }
}

// 상황판 조건문
function sboCount() {
    if(strike >= 3){
    out += 1;
    strike = 0;
    ball = 0;
    foul = 0;
    }
    if(ball >= 4){
        roo += 1;
        strike = 0;
        ball = 0;
        foul = 0;
    }
    if(out >= 3){
        roo = 0;
        strike = 0;
        ball = 0;
        out = 0;
        foul = 0;
        hit = 0;
        comTotalScore = comTotalScore+com_score;
        comTotalScoreElem.innerHTML = comTotalScore;
        userTotalScore = userTotalScore+user_score;
        userTotalScoreElem.innerHTML = userTotalScore;
        com_score = 0;
        user_score = 0;
        turn++;
        notice.innerHTML = ('CHANGE');
        notice.style.color = "rgb(252, 40, 40)";
        notice.style.fontSize = "250px";
        noticeElem.innerHTML = ('쓰리 아웃 ! 공수교대 !');
        button3.disabled = false;
    }
    if(homerun >= 1){
        notice.innerHTML = ('HOMERUN');
        notice.style.color = "blue";
        notice.style.fontSize = "250px";
        homerun = 0;
    }
    if(homerun = 0){
        notice.style.fontSize = "0";
    }
    if(strike == 0){
        strk1.style.backgroundSize = "0"
        strk2.style.backgroundSize = "0"
    }
    if(ball == 0){
        ball1.style.backgroundSize = "0"
        ball2.style.backgroundSize = "0"
        ball3.style.backgroundSize = "0"
    }
    if(out == 0){
        out1.style.backgroundSize = "0"
        out2.style.backgroundSize = "0"
    }
    if(strike >= 1||foul >= 1){
        strk1.style.backgroundSize = "100%"
    }
    if(strike >= 2){
        strk2.style.backgroundSize = "100%"
    }
    if(ball >= 1){
        ball1.style.backgroundSize = "100%"
    }
    if(ball >= 2){
        ball2.style.backgroundSize = "100%"
    }
    if(ball >= 3){
        ball3.style.backgroundSize = "100%"
    }
    if(out >= 1){
        out1.style.backgroundSize = "100%"
    }
    if(out >= 2){
        out2.style.backgroundSize = "100%"
    }
    if(foul >= 2){
        strk2.style.backgroundSize = "100%"
    }
    if(turn%2 == 0){
        button1.innerHTML = "스트라이크";
        button2.innerHTML = "볼";
        button3.innerHTML = "필살기";
        
        chPitcher.src = "./images/player9.png";
        chCatcher.src = "./images/player7.png";
        chHitter.src = "./images/player3.png";
        chBase1.src = "./images/player0.png";
        chBase2.src = "./images/player0.png";
        chBase3.src = "./images/player1.png";
        chDefender1.src = "./images/player10.png";
        chDefender2.src = "./images/player10.png";
        chDefender3.src = "./images/player10.png";
    }
    if(turn%2 == 1){
        button1.innerHTML = "스윙";
        button2.innerHTML = "볼 지켜보기";
        button3.innerHTML = "필살기";

        chPitcher.src = "./images/player4.png";
        chCatcher.src = "./images/player2.png";
        chHitter.src = "./images/player8.png";
        chBase1.src = "./images/player11.png";
        chBase2.src = "./images/player11.png";
        chBase3.src = "./images/player6.png";
        chDefender1.src = "./images/player5.png";
        chDefender2.src = "./images/player5.png";
        chDefender3.src = "./images/player5.png";
    }
    if (turn == 18){
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        if (comTotalScore === userTotalScore){
            notice.style.color = "black";
            noticeElem.innerHTML = "비겼습니다 !";
            notice.innerHTML = "DRAW";
        }else if (comTotalScore > userTotalScore){
            notice.style.color = "black";
            noticeElem.innerHTML = "컴퓨터의 승리 !";
            notice.innerHTML = "YOU LOSE";
        }else {
            notice.style.color = "black";
            noticeElem.innerHTML = `${userName}님의 승리 !`;
            notice.innerHTML = "YOU WIN";
        }
    } 
}

// roo 조건문 roo는 0~4까지이며 roo가 4가되면 score에 1을 더한다.
function roocount(){
    if(roo == 0){
        base1.style.width = '0'
        base2.style.width = '0'
        base3.style.width = '0'
    }
    if (roo == 1){
        base1.style.width = "70px"
    }
    if (roo == 2){
        base1.style.width = "70px"
        base2.style.width = "70px"
    }
    if (roo == 3){
        base1.style.width = "70px"
        base2.style.width = "70px"
        base3.style.width = "70px"
    }if (roo == 4){
        base1.style.width = "70px"
        base2.style.width = "70px"
        base3.style.width = "70px"
        hit = 0;
    }
}

function scoreUp() {
        if (turn % 2 == 0){
            // 컴퓨터 턴
            comScoreElem[Math.floor(turn/2)].innerHTML = com_score;
            comTotalScoreElem.innerHTML = comTotalScore;
        }else {
            // 사용자 턴
            userScoreElem[Math.floor(turn/2)].innerHTML = user_score;
            userTotalScoreElem.innerHTML = userTotalScore;
        }
}

function endGame() {
    // 결과 공지
    if(turn == 18){
        if (comTotalScore === userTotalScore) alert("비겼습니다.");
        else if (comTotalScore > userTotalScore) alert(`${userName}님이 졌습니다 !`);
        else alert(`${userName}님이 이겼습니다 !`);
    }else {}   
}  