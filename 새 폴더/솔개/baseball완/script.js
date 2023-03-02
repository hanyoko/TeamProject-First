//1. 던지기를 눌렀을때 공을 치거나 못치거나
let textElem=document.querySelector('#notice');
let left_game = document.querySelector('#left_game')
let stkcount = document.querySelector('.strike') //스트라이크
let ballc = document.querySelector('.ball')
let outc = document.querySelector('.out')
let roo = document.querySelectorAll('.roo')
let turncom = document.querySelector('#turn')
let computer_score = document.querySelector('#computer_score')
let user_score = document.querySelector('#user_score')
let ccum = document.querySelectorAll('.cnum')
let ucum = document.querySelectorAll('.unum')
let l=1; // 회말 카운터
let m=1 // 회말마무리
let stc = 0; // 스트라이커 카운터
let balc = 0; // 볼 카운터
let out = 0; // 아웃 카운터
let ccount = 1; // 컴퓨터 점수
let ucount = 1; // 사용자 점수
let rcount = 0; // 라운드 점수 입력
let tun = 0; // 턴확인 0이면 컴퓨터 1이면 사용자
let roo1 = 0;
let roo2 = 0;
let roo3 = 0;
let qkqh = 0;
let gameResult=document.querySelector('#end>div');


function endGame(a,b){
    document.querySelector('#end').style.display='block'
    gameResult.innerHTML += `${a} 대 ${b}<br>`
    if(a >b) { gameResult.innerHTML += '컴퓨터가 이겼습니다.'}
    else if (a < b) {gameResult.innerHTML += '사용자가 이겼습니다.'}
    else {gameResult.innerHTML += '비겼습니다.'}
}

function rooback(a){
    roo[a].style.background = 'black';
    
}

function rooremove(){
    for(i=0; i<3; i++){
    roo[i].style.background = 'white';}
}

function croundcount(a,b){
    ccum[a].innerHTML = b;
    rcount = 0;
}
function uroundcount(a,b){
    ucum[a].innerHTML = b;
    rcount = 0;
}

function turnu(a){
    m++;
    left_game.innerHTML=a;
    turncom.innerHTML=('컴퓨터 차례입니다.')
    
    
    
} // 회말 변경 (유저종료)
function turnc(a){
    l++;
    left_game.innerHTML=a;
    turncom.innerHTML=('사용자 차례입니다.')
   

    
}  // 회초 변경 (컴퓨터 종료)
function showText(msg){
    textElem.innerHTML += `${msg}<br>`
    } // 텍스트변경

function stkc(a){
    stkcount.innerHTML = a;
}
function ballco(a){
    ballc.innerHTML = a;
}
function outco(a){
    outc.innerHTML = a;
}

function strikremove(){
    stkcount.innerHTML = "";
}
function ballremove(){
    ballc.innerHTML = "";
}
function outremove() {
    outc.innerHTML = "";
}
// function strik(b){
//     stkcount[b].style.background = 'black';
// } // 스트라이크 백그라운드 카운터
// function ballco(c){
//     ballc[c].style.background = 'black';
// } // 볼 백그라운드 카운터
// function outco(d){
//     outc[d].style.background = 'black';
// } // 아웃 백그라운드 카운터



// 백그라운드 리무브 3개
// function strikremove(){
//     for(i=0; i<3; i++){
//     stkcount[i].style.background = 'white';
//     }
// }        
// function ballremove(){
//     for(i=0; i<4; i++){
//     ballc[i].style.background = 'white';
//     }
// }
// function outremove(d){
//     for(i=0; i<3; i++){
//         stkcount[i].style.background = 'white';
//         }
//     for(i=0; i<4; i++){
//         ballc[i].style.background = 'white';
//         }
//     for(i=0; i<3; i++){
//     outc[i].style.background = 'white';
//     }
    
// }
// 백그라운드 리무브 /

//홈런
function comhoomrun() {
    if(roo1 != 1){
        comsore(ccount);
    }else if( roo3 == 1){
        comsore(ccount);
        comsore(ccount);
        comsore(ccount);
        comsore(ccount);
    
    } else {
        comsore(ccount);
        comsore(ccount);
        comsore(ccount);

    }
}

function userhoomrun() {
    if(roo1 != 1){
        userscore(ucount);

    }else if( roo3 == 1){
        userscore(ucount);
        userscore(ucount);
        userscore(ucount);
        userscore(ucount);

    } else {
        userscore(ucount);
        userscore(ucount);
        userscore(ucount);
    }
}
function comsore(h){ // 점수 변경
    ccount++;
    rcount++;
    computer_score.innerHTML = h; 
}

function userscore(h){ // 점수변경
    ucount++;
    rcount++;
    user_score.innerHTML = h;
}
document.querySelectorAll('.user')[0].addEventListener('click',deadball)
document.querySelectorAll('.user')[1].addEventListener('click',sticker)
document.querySelectorAll('.user')[2].addEventListener('click',ballsw)


document.querySelectorAll('.com')[0].addEventListener('click',swing)
document.querySelectorAll('.com')[1].addEventListener('click',noswing)

function swing() {
    document.querySelector('#roo4').classList.remove('on')
    qkqh++;
    if(qkqh >= 20){
        textElem.innerHTML= "";
        qkqh = "";
    }
    if(out == 3){
        if ( tun == 0 ){
            outremove()
            turnc(`${l}회 말`)
            tun = 1;
            stc = 0;
            out = 0
            roo1 = 0
            roo2 = 0
            roo3 = 0
           
            
            
        } else {
            outremove()
            turnu(`${l}회 초`)
            tun = 0;
            stc = 0;
            out = 0;
            roo1 = 0
            roo2 = 0
            roo3 = 0
         
           
            
        }
    }
    if(Math.random() < 0.95){
    if(Math.random() < 0.4){
        showText('스트라이크 입니다.')
        stc = stc + 1;
        stkc(stc);
        if(stc == 3){
            showText(`${out+1}아웃입니다.`)
            if(out == 2){
                qkqh = 0;
                textElem.innerHTML="";
                showText('교대입니다.')
              rooremove();
              uroundcount(m-1,rcount);
              outremove()
              document.querySelectorAll('.user')[0].style.display = 'inline-block'
              document.querySelectorAll('.user')[1].style.display = 'inline-block'
              document.querySelectorAll('.user')[2].style.display = 'inline-block'
              document.querySelectorAll('.com')[0].style.display = 'none'
              document.querySelectorAll('.com')[1].style.display = 'none'
              document.querySelectorAll('.sc')[1].style.background = ''
              document.querySelectorAll('.sc')[1].style.color = 'white'
              if (m == 4){
                document.querySelectorAll('.user')[0].style.display ='none'
                document.querySelectorAll('.user')[1].style.display ='none'
                document.querySelectorAll('.user')[2].style.display ='none'
                document.querySelectorAll('.com')[0].style.display='none'
                document.querySelectorAll('.com')[1].style.display='none'
                strikremove();
                ballremove();
                outremove();
                endGame(ccount-1, ucount-1);
            }
            }
            strikremove();
            ballremove();
            out = out + 1
            outco(out);
            stc = 0;
            balc = 0;
    }
}   else if(Math.random() < 0.4){
    
    showText('1루타 입니다.')
            if(roo1 == 0 ){
                rooback(0);
                roo1 = roo1 + 1;
            }else if (roo2 ==0){
                rooback(1);
                roo2 = roo2 + 1;
            }else if (roo3 ==0) {
                rooback(2);
                roo3 = roo3 + 1;
            } else{
                showText('1점획득.')
                userscore(ucount);
            }
            balc = 0;
            stc = 0;
            strikremove();
            ballremove();
     } else {
             showText('파울 입니다.')
                if(stc <= 1){
                    stc = stc + 1;
                    stkc(stc);
                }else {
                    showText('파울 입니다.(2스트라이크)')  
                }
            } }
            else {
                showText('홈런 입니다.')
            strikremove();
            rooremove();
            ballremove();
            userhoomrun();
            balc = 0;
            stc = 0;
            roo1 = 0;
            roo2 = 0;
            roo3 = 0;
            }
           
}

function noswing(){
    document.querySelector('#roo4').classList.remove('on')
    qkqh++;
    if(qkqh >= 20){
        textElem.innerHTML= "";
        qkqh = "";
    }
    if(out == 3){
        if ( tun == 0 ){
            outremove()
            turnc(`${l}회 말`)
            tun = 1;
            stc = 0;
            out = 0
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        } else {
            outremove()
            turnu(`${l}회 초`)
            tun = 0;
            stc = 0;
            out = 0;
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        }
    }
    if(Math.random() < 0.5){
        showText('스트라이크 입니다.')
            stc = stc + 1;
            stkc(stc);
            if(stc == 3){
                showText(`${out+1}아웃입니다.`)
                if(out == 2){
                    qkqh = 0;
                    textElem.innerHTML="";
                    showText('교대입니다.')
                  rooremove();
                  uroundcount(m-1,rcount);
                  outremove()
                  document.querySelectorAll('.user')[0].style.display = 'inline-block'
                  document.querySelectorAll('.user')[1].style.display = 'inline-block'
                  document.querySelectorAll('.user')[2].style.display = 'inline-block'
                  document.querySelectorAll('.com')[0].style.display = 'none'
                  document.querySelectorAll('.com')[1].style.display = 'none'
                  document.querySelectorAll('.sc')[1].style.background = ''
                  document.querySelectorAll('.sc')[1].style.color = 'white'
                  if (m == 4){
                    document.querySelectorAll('.user')[0].style.display ='none'
                    document.querySelectorAll('.user')[1].style.display ='none'
                    document.querySelectorAll('.user')[2].style.display ='none'
                    document.querySelectorAll('.com')[0].style.display='none'
                    document.querySelectorAll('.com')[1].style.display='none'
                    strikremove();
                    ballremove();
                    outremove();
                    endGame(ccount-1, ucount-1);
                }
                }
                strikremove();
                ballremove();
             
                out = out + 1
                outco(out);
                stc = 0;
                balc = 0;
            }
    }else if(Math.random() < 0.4){
        showText('볼 입니다.')
        balc = balc + 1;
        ballco(balc);
        if(balc == 4){
            showText(`볼넷 입니다. 1루 전진`)
            strikremove();
            ballremove();
            stc = 0;
            balc = 0 ;
            if(roo1 == 0 ){
                rooback(0);
                roo1 = roo1 + 1;
            }else if (roo2 ==0){
                rooback(1);
                roo2 = roo2 + 1;
            }else if (roo3 ==0) {
                rooback(2);
                roo3 = roo3 + 1;
            } else{
                userscore(ucount);
            }
        }
    } else {
        showText('데드볼, 1루 전진')
        strikremove();
        ballremove();
        if(roo1 == 0 ){
            rooback(0);
            roo1 = roo1 + 1;
        }else if (roo2 ==0){
            rooback(1);
            roo2 = roo2 + 1;
        }else if (roo3 ==0) {
            rooback(2);
            roo3 = roo3 + 1;
        } else{
            userscore(ucount);
        }
    }
 
}

function sticker() {
    document.querySelector('#roo4').classList.remove('on')
    qkqh++;
    if(qkqh >= 20){
        textElem.innerHTML= "";
        qkqh = "";
    }
    if(out == 3){
        if ( tun == 0 ){
            outremove()
            turnc(`${l}회 말`)
            tun = 1;
            stc = 0;
            out = 0
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        } else {
            outremove()
            turnu(`${l}회 초`)
            tun = 0;
            stc = 0;
            out = 0;
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        }
    }
     document.querySelectorAll('.sc')[0].style.background = 'lime'
    document.querySelectorAll('.sc')[0].style.color = 'black'
        if(Math.random() < 0.95 ){ //컴퓨터 공을 못치는경우
            if(Math.random() < 0.6){
            showText('스트라이크 입니다.')
            stc = stc + 1;
            stkc(stc);
            if(stc == 3){
                showText(`${out+1}아웃입니다.`)
                if(out == 2){
                    qkqh = 0;
                    textElem.innerHTML="";
                    outremove()
                    showText('교대입니다.')
                  rooremove();
                  croundcount(m-1,rcount);
                
                  document.querySelectorAll('.user')[0].style.display = 'none'
                  document.querySelectorAll('.user')[1].style.display = 'none'
                  document.querySelectorAll('.user')[2].style.display = 'none'
                  document.querySelectorAll('.com')[0].style.display = 'inline-block'
                  document.querySelectorAll('.com')[1].style.display = 'inline-block'
                  document.querySelectorAll('.sc')[0].style.background = ''
                  document.querySelectorAll('.sc')[0].style.color = 'white'
             
                }
                strikremove();
                ballremove();
           
                out = out + 1
                outco(out);
                stc = 0;
                balc = 0;
            
            } 
            } else if(Math.random() <0.7){
                showText('파울 입니다.')
                if(stc <= 1){
                    stc = stc + 1;
                    stkc(stc);
                }else {
                    showText('파울 입니다.(2스트라이크)')  
                }
            } else{
                showText('1루타 입니다.')
                if(roo1 == 0 ){
                    rooback(0);
                    roo1 = roo1 + 1;
                }else if (roo2 ==0){
                    rooback(1);
                    roo2 = roo2 + 1;
                }else if (roo3 ==0) {
                    rooback(2);
                    roo3 = roo3 + 1;
                } else{
                    showText('1점획득.')
                    comsore(ccount);
                }
                balc = 0;
                stc = 0;
                strikremove();
                ballremove();

            }
        }else{
            showText('홈런 입니다.')
            strikremove();
            rooremove();
            ballremove();
            comhoomrun();
            balc = 0;
            stc = 0;
            roo1 = 0;
            roo2 = 0;
            roo3 = 0;
}

}

function ballsw() {
    document.querySelector('#roo4').classList.remove('on')
    qkqh++;
    if(qkqh >= 20){
        textElem.innerHTML= "";
        qkqh = "";
    }
    if(out == 3){
        if ( tun == 0 ){
            outremove()
            turnc(`${l}회 말`)
            tun = 1;
            stc = 0;
            out = 0
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        } else {
            outremove()
            turnu(`${l}회 초`)
            tun = 0;
            stc = 0;
            out = 0;
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        }
    }
     document.querySelectorAll('.sc')[0].style.background = 'lime'
    document.querySelectorAll('.sc')[0].style.color = 'black'
    if(Math.random() < 0.95 ){ //컴퓨터 공을 못치는경우
        if(Math.random() < 0.5){
            showText('볼 입니다.')
                balc = balc + 1;
                ballco(balc);
                if(balc == 4){
                    showText(`볼넷 입니다. 1루 전진`)
                    strikremove();
                    ballremove();
                    stc = 0;
                    balc = 0;
                    if(roo1 == 0 ){
                        rooback(0);
                        roo1 = roo1 + 1;
                    }else if (roo2 ==0){
                        rooback(1);
                        roo2 = roo2 + 1;
                    }else if (roo3 ==0) {
                        rooback(2);
                        roo3 = roo3 + 1;
                    } else{
                        showText('1점 획득')
                        comsore(ccount);
                    }
                }
        } else if(Math.random() < 0.7){
        showText('스트라이크 입니다.')
        stc = stc + 1;
        stkc(stc);
        if(stc == 3){
            showText(`${out+1}아웃입니다.`)
            if(out == 2){
                qkqh = 0;
                textElem.innerHTML="";
                outremove()
                showText('교대입니다.')
              rooremove();
              croundcount(m-1,rcount);
            
              document.querySelectorAll('.user')[0].style.display = 'none'
              document.querySelectorAll('.user')[1].style.display = 'none'
              document.querySelectorAll('.user')[2].style.display = 'none'
              document.querySelectorAll('.com')[0].style.display = 'inline-block'
              document.querySelectorAll('.com')[1].style.display = 'inline-block'
              document.querySelectorAll('.sc')[0].style.background = ''
              document.querySelectorAll('.sc')[0].style.color = 'white'
         
            }
            strikremove();
            ballremove();
       
            out = out + 1
            outco(out);
            stc = 0;
            balc = 0;
        
        } 
        } else if(Math.random() <0.6){
            showText('파울 입니다.')
            if(stc <= 1){
                stc = stc + 1;
                stkc(stc);
            }else {
                showText('파울 입니다.(2스트라이크)')  
            }
        } else{
            showText('1루타 입니다.')
            if(roo1 == 0 ){
                rooback(0);
                roo1 = roo1 + 1;
            }else if (roo2 ==0){
                rooback(1);
                roo2 = roo2 + 1;
            }else if (roo3 ==0) {
                rooback(2);
                roo3 = roo3 + 1;
            } else{
                showText('1점획득.')
                comsore(ccount);
            }
            balc = 0;
            stc = 0;
            strikremove();
            ballremove();

        }
    }else{
        showText('홈런 입니다.')
        strikremove();
        rooremove();
        ballremove();
        comhoomrun();
        balc = 0;
        stc = 0;
        roo1 = 0;
        roo2 = 0;
        roo3 = 0;
}
}

function deadball() {
    qkqh++;
    if(qkqh >= 20){
        textElem.innerHTML= "";
        qkqh = "";
    }
    document.querySelector('#roo4').classList.add('on')
    showText('데드볼, 1루 전진')
    strikremove();
    ballremove();
    if(roo1 == 0 ){
        rooback(0);
        roo1 = roo1 + 1;
    }else if (roo2 ==0){
        rooback(1);
        roo2 = roo2 + 1;
    }else if (roo3 ==0) {
        rooback(2);
        roo3 = roo3 + 1;
    } else{
        showText('1점획득')
        comsore(ccount)
    }
  

}
 
function game_start() {
    qkqh++;
    if(qkqh >= 30){
        textElem.innerHTML= "";
        qkqh = "";
    }
    if(out == 3){
        if ( tun == 0 ){
            outremove()
            turnc(`${l}회 말`)
            tun = 1;
            stc = 0;
            out = 0
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        } else {
            outremove()
            turnu(`${l}회 초`)
            tun = 0;
            stc = 0;
            out = 0;
            roo1 = 0
            roo2 = 0
            roo3 = 0
            
        }
    }

    if(tun == 0)
    { document.querySelectorAll('.sc')[0].style.background = 'lime'
    document.querySelectorAll('.sc')[0].style.color = 'black'
        if(Math.random() < 0.7 ){ //컴퓨터 공을 못치는경우
            if(Math.random() < 0.5){
            showText('스트라이크 입니다.')
            stc = stc + 1;
            stkc(stc);
            if(stc == 3){
                showText(`${out+1}아웃입니다.`)
                if(out == 2){
                    qkqh = 0;
                    textElem.innerHTML="";
                    outremove()
                    showText('교대입니다.')
                  rooremove();
                  croundcount(m-1,rcount);
                
                  document.querySelectorAll('.user')[0].style.display = 'none'
                  document.querySelectorAll('.user')[1].style.display = 'none'
                  document.querySelectorAll('.user')[2].style.display = 'none'
                  document.querySelectorAll('.com')[0].style.display = 'inline-block'
                  document.querySelectorAll('.com')[1].style.display = 'inline-block'
                  document.querySelectorAll('.sc')[0].style.background = ''
                  document.querySelectorAll('.sc')[0].style.color = 'white'
             
                }
                strikremove();
                ballremove();
           
                out = out + 1
                outco(out);
                stc = 0;
                balc = 0;
            }
            } else {
                showText('볼 입니다.')
                balc = balc + 1;
                ballco(balc);
                if(balc == 4){
                    showText(`볼넷 입니다. 1루 전진`)
                    strikremove();
                    ballremove();
                    stc = 0;
                    balc = 0;
                    if(roo1 == 0 ){
                        rooback(0);
                        roo1 = roo1 + 1;
                    }else if (roo2 ==0){
                        rooback(1);
                        roo2 = roo2 + 1;
                    }else if (roo3 ==0) {
                        rooback(2);
                        roo3 = roo3 + 1;
                    } else{
                        showText('1점 획득')
                        comsore(ccount);
                    }
                }
            }
        } else if(Math.random() < 0.5){  // 공을 친경우....
                showText('파울 입니다.')
                if(stc <= 1){
                    stc = stc + 1;
                    stkc(stc);
                }else {
                    showText('파울 입니다.(2스트라이크)')  
                }
            }else if(Math.random() < 0.1) {
            showText('홈런 입니다.')
            strikremove();
            rooremove();
            ballremove();
            comhoomrun();
            balc = 0;
            stc = 0;
            roo1 = 0;
            roo2 = 0;
            roo3 = 0;

        } else { 
            showText('1루타 입니다.')
            if(roo1 == 0 ){
                rooback(0);
                roo1 = roo1 + 1;
            }else if (roo2 ==0){
                rooback(1);
                roo2 = roo2 + 1;
            }else if (roo3 ==0) {
                rooback(2);
                roo3 = roo3 + 1;
            } else{
                showText('1점획득.')
                comsore(ccount);
            }
            balc = 0;
            stc = 0;
            strikremove();
            ballremove();
        }
           
        
        
    }else {
        document.querySelectorAll('.sc')[1].style.background = 'lime'
    document.querySelectorAll('.sc')[1].style.color = 'black'
        if(Math.random() < 0.7 ){ // 사용자/ 공을못치는경우
            if(Math.random() < 0.5){
            showText('스트라이크 입니다.')
            stc = stc + 1;
            stkc(stc);
            if(stc == 3){
       
                showText(`${out+1}아웃입니다.`)
                if(out == 2){
                    qkqh = 0;
                    textElem.innerHTML="";
                    outremove()
                    showText('교대입니다.')
                    rooremove();
                    document.querySelectorAll('.user')[0].style.display = 'none'
                  document.querySelectorAll('.user')[1].style.display = 'none'
                  document.querySelectorAll('.user')[2].style.display = 'none'
                  document.querySelectorAll('.com')[0].style.display = 'inline-block'
                  document.querySelectorAll('.com')[1].style.display = 'inline-block'
                  document.querySelectorAll('.sc')[0].style.background = ''
                  document.querySelectorAll('.sc')[0].style.color = 'white'

                    uroundcount(m-1,rcount);
                    document.querySelectorAll('.sc')[1].style.background = ''
    document.querySelectorAll('.sc')[1].style.color = 'white'
             
                }
              
                strikremove();
                ballremove();
                out = out + 1
                outco(out)
                stc = 0;
                balc = 0;
            }
            }else{
            showText('볼 입니다.')
            balc = balc + 1;
            ballco(balc);
            if(balc == 4){
                showText(`볼넷 입니다. 1루 전진`)
                strikremove();
                ballremove();
                stc = 0;
                balc = 0 ;
                if(roo1 == 0 ){
                    rooback(0);
                    roo1 = roo1 + 1;
                }else if (roo2 ==0){
                    rooback(1);
                    roo2 = roo2 + 1;
                }else if (roo3 ==0) {
                    rooback(2);
                    roo3 = roo3 + 1;
                } else{
                    userscore(ucount);
                }
            }
         }
        }else if(Math.random() < 0.5){  // 공을 친경우....
            showText('파울 입니다.')
            if(stc <= 1){
                stc = stc + 1;
                stkc(stc);
            }else {
                showText('파울 입니다.(2스트라이크)')  
            }
        }else if(Math.random() < 0.1) {
        showText('홈런 입니다.')
        strikremove();
        ballremove();
        rooremove();
        userhoomrun();
        balc = 0;
        stc = 0;
    } else { 
        showText('1루타 입니다.')
        if(roo1 == 0 ){
            rooback(0);
            roo1 = roo1 + 1;
        }else if (roo2 ==0){
            rooback(1);
            roo2 = roo2 + 1;
        }else if (roo3 ==0) {
            rooback(2);
            roo3 = roo3 + 1;
        } else{
            showText('1점획득.')
            userscore(ucount);
        }
        balc = 0;
        stc = 0;
        strikremove();
        ballremove();
    }
    }
    if (m == 4){
        document.querySelector('button').disabled=true
        strikremove();
        ballremove();
        outremove();
        if(ccount == ucount){showText('비겼습니다.')}
        else if(ccount > ucount){showText('컴퓨터가 이겼습니다.')}
        else { showText('사용자가 이겼습니다.')}
    }
    

}


// strik(0)
// ball(0)
// out(0)
// showText(`홈런입니다`)
// turnu(`${i}회말`);