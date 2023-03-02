//변수 선언
let strikeCount= 0; // 스트라이크 카운터
let ballCount = 0; // 볼 카운트
let outCount = 0; // 아웃 카운트
let comCount = 0; // 컴퓨터 점수
let userCount = 0; // 사용자 점수
let roundCount = 0; // 총 점수 입력
let turn = 0; // 턴 확인 : 0이면 컴퓨터 1이면 사용자
let fir_base = 0;
let sec_base = 0;
let thr_base = 0;
let A_btn = document.querySelector("#A_btn");
let B_btn = document.querySelector("#B_btn");
let C_btn = document.querySelector("#C_btn");
let home = true;
let count = 1;
let strikec = document.getElementById("strikec");
let ballc = document.getElementById("ballc");
let outc = document.getElementById("outc");



//sbo 구현
let strk1 = document.querySelector("#strk1");
let strk2 = document.querySelector("#strk2");
let ball1 = document.querySelector("#ball1");
let ball2 = document.querySelector("#ball2");
let ball3 = document.querySelector("#ball3");
let out1 = document.querySelector("#out1");
let out2 = document.querySelector("#out2");

//출력값 알림판
let noticeElem = document.getElementById("alert_text");
let comNum = document.querySelector('.com_num');
let userNum = document.querySelector('.user_num');

// 컨트롤러
A_btn.addEventListener("click",strikeOrHit) //스윙 or 스트라이크 버튼
B_btn.addEventListener("click",ballOrWaiting) //지켜보기 or 볼 버튼
C_btn.addEventListener("click",skill) //지켜보기 or 볼 버튼

function strikeOrHit(){ //A버튼을 클릭했을때 호출되는 함수
    if (home == false){ // 플레이어의 턴(스윙을 함-공을침)
        comDecision() //컴퓨터가 볼을할지 스트라이크를 할지 결정
        if (comDecision()== "strike"){ //컴퓨터가 스트라이크존에 공을 던졌을때
            //스트라이크 존에 공을 던졌을때 실행;
            strikeHit()
        }
        else{ //컴퓨터가 볼존에 공을 던졌을때
            ballHit()
        }
   }
   else{ //컴퓨터의 공격턴 //// 플레이어의 턴(스크라이크를 함-스트라이크를 던짐)
       comDecision() //컴퓨터는 칠건지 말것인지를 결정
       if(comDecision() =="waiting"){ //컴퓨터가 배트를 안휘둘렀을때
           strike()
       }
       else{
           strikeHit()
       }
   }
}

//B버튼을 클릭했을때 호출되는 함수
function ballOrWaiting(){
    //플레이어의 턴
    //지켜보기를 했을 때
    if (home == false){
        //컴퓨터의 결정 
        let com = comDecision()
        //컴이 스트라이크를 던졌을 때
        if (com == "strike"){
            //스트라이크 확인
            return strike()
        }
        //컴이 볼을 던졌을때
        else{
            //볼 확인
            ball()
        }
    }
    //컴퓨터의 턴
    //볼을 던짐
    else {
        //컴퓨터의 결정
        //컴이 지켜보기를 했을때
        if (comDecision() == "waiting") {
            ball()
        }
        //컴이 스윙을 했을때
        else{
            ballHit()
        }
    }
    console.log(ballOrWaiting);
}

//C버튼을 클릭했을 때 호출되는 함수
function skill(){
    
}

//컴퓨터의 판단
function comDecision(){
    //플레이어의 차례인지
    if (home == false){
        //볼인지 스트라이크 인지 구분
        let ballStrike = Math.floor(Math.random()*2)
        if (ballStrike ==0){
            return "ball"
        }
        else{
            return "strike"
        }
    }
    //내 차례인지
    else{
        //칠건지 말건지 구분
        let hitOrStay = Math.floor(Math.random()*2)
        if (hitOrStay == 0){
            return "stay"
        }
        else{
            return "hit"
        }
    }
}
//스트라이크를 던졌을때 결과의 렌덤값을 보내줌
function hitProb(){
    let event = Math.ceil(Math.random()*100)
    if (event <=15){
        return 0;
    }
    else if (event <=60){
        return 1;
    }
    else if (event <=99){
        return 2;
    }
    else{
        return 3;
    }
}
//볼을 던졌을때 스윙을 할경우 렌덤값을 보내줌
function ballHit(){
    switch(hitProb()){
        case 0:
            out()
            break;
        case 1:
            out()
            break;
        case 2:
            strike()
            break;
        case 3:
            hit()
            break;
    }
}

//스트라이크 존에 공을 던졌는데 그공을 쳤을때 실행;
function strikeHit(){
    switch(hitProb()){
        //0이면 쳤는데 그공을 수비가 잡음  
        case 0:
            out()
            break;
        //1이면 안맞음 -> 스트라이크 
        case 1:
            strike()
            break;
        //2이면 안타
        case 2:
            hit()
            break;
        //3이면 홈런
        case 3:
            homerun()
            break;
    }
}

function strike(){
    strikeCount++
    if (strikeCount ==1){
        document.getElementById("skrk1").style.backgroundSize="100%";
        noticeElem.innerHTML = "원 스트라이크 !";
    }
    if (strikeCount ==2){
        document.getElementById("skrk2").style.backgroundSize="100%"
        noticeElem.innerHTML = "투 스트라이크 !";
    } 
    if (strikeCount == 3){
        noticeElem.innerHTML = "쓰리 스트라이크 ! 아웃 !";
        out()
    }
    else {
        noticeElem.innerHTML = "스트라이크 !";
    }
}

function out(){
    //스트라이크 카운터 : 0  /볼 카운트 : 0 /아웃 : +1
    document.getElementById("strikec").style.backgroundSize="0"
    strikeCount = 0
    ballCount = 0
    document.getElementById("ballc").style.backgroundSize="0"
    outCount ++
    //화면변경!!!
    noticeElem.innerHTML = "배터 아웃!"
    if (outCount == 1){
        out1.style.backgroundSize="100%"

    }
    if (outCount == 2){
        out2.style.backgroundSize="100%"
    }
    if (outCount == 3){
        document.getElementById("outc").style.backgroundSize="0"
        outCount = 0
        //1루수,2루수,3루수변경
        boardReset()
        ballCount = 0
        noticeElem.innerHTML = "3아웃 필드교체!"


        if (home == true){
            mound.setAttribute("style", "background-color:red")
            awayName.setAttribute("style", "color: blue")
            base.setAttribute("style", "background-color: bisque")
            homeName.removeAttribute("style")
            A_event.innerHTML = "스윙"
            B_event.innerHTML = "지켜보기"
            home = false
            if(count >= 9 && awayScore>homeScore){
                noticeElem.innerHTML = "player 팀의 승리!"
                game_set()

            }
            round.innerText = count + "회 말"
        }
        else{
            mound.removeAttribute("style")
            homeName.setAttribute("style", "color: blue")
            base.removeAttribute("style")
            awayName.removeAttribute("style")
            A_event.innerHTML = "스트라이크"
            B_event.innerHTML = "볼"
            home = true
            if (count >= 9){
                if(awayScore>homeScore){
                    noticeElem.innerHTML = "player 팀의 승리!"
                    game_set()
                    round.innerText = count + "회 말"
                    gameOver = true     
                }
                else if (homeScore>awayScore){
                    noticeElem.innerHTML = "computer 팀의 승리!"
                    game_set()
                    round.innerText = count + "회 말"
                    gameOver = true        
                }
                else {
                    round.innerText = count + "회 초"        
                }
            }
            if (gameOver == false){
                count ++
                round.innerText = count + "회 초"
            } 
        }
    }
}

function ball(){
    ballCount++
    if (ballCount ==1){
        ball1.style.backgroundSize="100%"
    }
    if (ballCount ==2){
        ball2.style.backgroundSize="100%"
    }
    if (ballCount ==3){
        ball3.style.backgroundSize="100%"
    }
    if (ballCount == 4){
        ball3.style.backgroundSize="100%"
        ballCount = 0
        hit()
        noticeElem.innerHTML = "포볼 ! 진루합니다"
    }
    else {
        noticeElem.innerHTML = "볼 !"
    }
}

function hit(){
    strikeCount = 0
    document.getElementById("strikec").style.backgroundSize="0"
    ballCount = 0
    document.getElementById("ballc").style.backgroundSize="0"
    if (first_base == 1){
        if (second_base == 1){
            if (thrid_base == 1){
                if(home == false){
                    awayScore ++
                    awayScoreB.innerHTML = awayScore
                }
                else{
                    homeScore ++
                    homeScoreB.innerHTML = homeScore
                }
            }
            else{
                thrid_base = 1
            }
        }
        else{
            second_base=1
        }
    }
    else{
        first_base = 1
    }
    if (first_base == 1){
        fstBase.setAttribute("style", "background-color:brown")
    }
    if (second_base == 1){
        sndBase.setAttribute("style", "background-color:brown")
    }
    if (thrid_base == 1){
        trdBase.setAttribute("style", "background-color:brown")
    }
    noticeElem.innerHTML = "안타! 진루합니다"
    strikeCount =0
    ballCount = 0
    addtionalTime()
}

function boardReset(){
    first_base = 0
    second_base = 0
    thrid_base = 0
    fstBase.removeAttribute("style")
    sndBase.removeAttribute("style")
    trdBase.removeAttribute("style")
}

function homerun(){
    strikeCount = 0
    document.getElementById("strikec").style.backgroundSize="0"
    ballCount = 0
    document.getElementById("ballc").style.backgroundSize="0"
    if (first_base == 1){
        if (second_base == 1){
            if (thrid_base == 1){
                if(home == false){
                    awayScore += 4
                    awayScoreB.innerHTML = awayScore
                }
                else{
                    homeScore +=  4
                    homeScoreB.innerHTML = homeScore
                }
            }
            else{
                if(home == false){
                    awayScore += 3
                    awayScoreB.innerHTML = awayScore
                }
                else{
                    homeScore +=  3
                    homeScoreB.innerHTML = homeScore
                }            
            }
        }
        else{
            if(home == false){
                awayScore += 2
                awayScoreB.innerHTML = awayScore
            }
            else{
                homeScore +=  2
                homeScoreB.innerHTML = homeScore
            }            
        }
    }
    else{
        if(home == false){
            awayScore += 1
            awayScoreB.innerHTML = awayScore
        }
        else{
            homeScore +=  1
            homeScoreB.innerHTML = homeScore
        }            
    }
    if (home == true){
        noticeElem.innerHTML = "컴퓨터팀! 홈런! 홈런입니다!"
    }
    else{
        noticeElem.innerHTML = "플레이어팀! 홈런! 홈런입니다!"
    }
    boardReset()
    addtionalTime()
}


