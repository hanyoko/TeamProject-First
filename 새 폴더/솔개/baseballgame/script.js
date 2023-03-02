
let isComputer = true;
let strike_score = 0;
let ball_score = 0;
let out_score = 0;
let computer_score = 0;
let user_score = 0;
let computer_at = 0;
let computer_at2 = 0;
let computer_at3 = 0;
let game_inning = 1;
let game_round = 0;
let temp = 0;
let txt = document.querySelector('#text');
let base_ru = document.querySelector('#base');
let base_ru_homerun = document.querySelector('#homerun');
let base_ru_homerun1 = document.querySelector('#homerun1');
let first = document.querySelector('#one');
let sec = document.querySelector('#two');
let third = document.querySelector('#three');
let strike = document.querySelector('#text_strike');
let game_switch = 0;
let chchch = document.querySelector('#chchch');

document.querySelector('#inning_num').innerHTML = game_inning;
document.querySelector('#text_strike').innerHTML = strike_score;
document.querySelector('#text_ball').innerHTML = ball_score;
document.querySelector('#text_out').innerHTML = out_score;
document.querySelector('#inning_chomal').innerHTML = '초';
document.querySelector('#btn1').addEventListener('click', computerhit);
document.querySelector('#btn2').addEventListener('click', computerball);

prom_name();
function prom_name(){
    let input_name = prompt('구단주의 이름을 입력하시오(세글자)');
    let in_name = document.querySelector('#user_name');
    if(input_name.length >= 1){
        in_name.innerHTML = input_name;
    }else {
        in_name.innerHTML = '구단주';
    }
} //구단주 입력

function maintext(msg){
    txt.innerHTML = msg;
} //main_text
function ch_round() {
    if (temp === 0) {
        document.querySelector('#inning_chomal').innerHTML = '말';
        maintext('📢 공수교대!!');
        chchch.style.display = 'block';
        game_switch ++;
        userhit();
        temp = 1;
    } else if(temp === 1) {
        document.querySelector('#inning_chomal').innerHTML = '초';
        maintext('📢 공수교대!!');
        chchch.style.display = 'block';
        game_switch ++;
        game_inning ++;
        document.querySelector('#inning_num').innerHTML = game_inning;
        temp = 0;
        ch_hit();
        game_end();
    }
} //게임 진행
function game_end(){
    if(game_inning == 10){
        document.querySelector('#inning_num').innerHTML = '끝!';
        if(computer_score > user_score){
            maintext('게임 끝!    컴퓨터 승리! 😂');
        }else if(computer_score < user_score){
            maintext('게임 끝!    사용자 승리! 😆');
        }else {
            maintext('게임 끝!    무승부! 😐');
        }
        document.querySelector('#btn1').disabled = true;
        document.querySelector('#btn2').disabled = true;
        document.querySelector('#inning').style.display = 'none';
        document.querySelector('#inning_chomal').style.display = 'none';
        document.querySelector('#text_strike').innerHTML = 0;
        document.querySelector('#text_ball').innerHTML = 0;
        document.querySelector('#text_out').innerHTML = 0;
        document.querySelector('#btn1').style.background = '#fff';
        document.querySelector('#btn1').style.color = '#000';
        document.querySelector('#btn1').style.opacity = 0.3;
        document.querySelector('#btn2').style.background = '#fff';
        document.querySelector('#btn2').style.color = '#000';
        document.querySelector('#btn2').style.opacity = 0.3;
        document.querySelector('#endend').style.display = 'block';
        chchch.style.display = 'none';
    }
} //게임종료
function ch_hit() {
    document.querySelector('#btn1').innerHTML = '스트라이크';
    document.querySelector('#btn2').innerHTML = '볼';
} //수비시 버튼
function userhit() {
    document.querySelector('#btn1').innerHTML = '적극적 공격';
    document.querySelector('#btn2').innerHTML = '소극적 공격';
} //공격시 버튼

function colorsp(){
    if(computer_at === 1 || computer_at2 === 1 || computer_at3 === 1){
        first.style.display = 'block';
    } else {
        first.style.display = 'none';
    }
    if(computer_at === 2 || computer_at2 === 2 || computer_at3 === 2){
        sec.style.display = 'block';
    } else {
        sec.style.display = 'none';
    }
    if(computer_at === 3 || computer_at2 === 3 || computer_at3 === 3){
        third.style.display = 'block';
    } else {
        third.style.display = 'none';
    }
} //주자 이미지 지정

function score_ch(){
    if (computer_at === 4){
        if(game_switch % 2 == 0) {
            computer_score += 1;
            computer_at = 1;
            document.querySelector('#c_score').innerHTML = computer_score;
        }
        else {
            user_score += 1;
            computer_at = 1;
            document.querySelector('#u_score').innerHTML = user_score;
        }
    }
} //1번째 주자
function score_ch2(){
    if (computer_at2 === 4){
        if(game_switch % 2 == 0) {
            computer_score += 1;
            computer_at2 = 1;
            document.querySelector('#c_score').innerHTML = computer_score;
        }
        else {
            user_score += 1;
            computer_at2 = 1;
            document.querySelector('#u_score').innerHTML = user_score;
        }
    }
} //2번째 주자
function score_ch3(){
    if (computer_at3 === 4){
        if (game_switch % 2 == 0) {
            computer_score += 1;
            computer_at3 = 1;
            document.querySelector('#c_score').innerHTML = computer_score;
        } else {
            user_score += 1;
            computer_at3 = 1;
            document.querySelector('#u_score').innerHTML = user_score;
        }
    }
} //마지막 주자 
function reset(){
    computer_at = 0;
    computer_at2 = 0;
    computer_at3 = 0;
    first.style.display = 'none'; 
    sec.style.display = 'none';  
    third.style.display = 'none';
} //reset

function computerhit(){
    let perhit = Math.floor(Math.random()*10)+1;
    let c_score = document.querySelector('#c_score');
    let u_score =  document.querySelector('#u_score');
    base_ru_homerun.style.display = 'none';
    base_ru_homerun1.style.display = 'none';
    chchch.style.display = 'none'
    if(perhit >= 9){
        let homerun = Math.floor(Math.random()*10)+1;
        if(homerun <= 2){
            if(computer_at >=1 && computer_at2 >=1 && computer_at3 >=1){
                if(game_switch % 2 == 0) {
                    computer_score += 4;
                } else {
                    user_score +=4;
                }
                reset()
            } else if((computer_at>=1 && computer_at2 >=1 && computer_at3 === 0) || (computer_at >=1 && computer_at3 >=1 && computer_at2 === 0) || (computer_at2 >=1 && computer_at3 >=1 && computer_at === 0)){
                if(game_switch % 2 == 0) {
                    computer_score += 3;
                } else {
                    user_score +=  3;
                }
                reset()
            } else if((computer_at >=1 && computer_at2 === 0 && computer_at3 === 0) || (computer_at2 >=1 && computer_at1 === 0 && computer_at3 === 0) || (computer_at3 >=1 && computer_at1 === 0 && computer_at2 === 0)){
                if (game_switch % 2 == 0) {
                    computer_score += 2;
                } else {
                    user_score += 2;
                }
                reset()
            } else {
                if (game_switch % 2 == 0) {
                    computer_score ++;
                } else {
                    user_score ++;
                }
                reset() 
            }
            if (game_switch % 2== 0) {
                c_score.innerHTML = computer_score;
            } else {
             u_score.innerHTML = user_score;
            }
            strike_score = 0;
            document.querySelector('#text_strike').innerHTML = strike_score;
            ball_score = 0;
            document.querySelector('#text_ball').innerHTML = ball_score;
            maintext('⭐ 홈런 ⭐');
            base_ru_homerun.style.display = 'block';
            base_ru_homerun1.style.display = 'block';
        }else{
            strike_score = 0;
            document.querySelector('#text_strike').innerHTML = strike_score;
            ball_score = 0;
            document.querySelector('#text_ball').innerHTML = ball_score;
            maintext('🏏 안타 🏏');
            if(computer_at === 0){
                computer_at ++ ;
                score_ch();
                score_ch2();
                score_ch3();
                
            } else if(computer_at >=1 && computer_at2 === 0){
                computer_at ++ ;
                computer_at2 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            } else if(computer_at2 >= 1 || computer_at3 === 0){
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            } else{
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            }
            colorsp();
        }
    }else{
        maintext('치지 못했습니다! 스트라이크!');
            strike_score ++;
            document.querySelector('#text_strike').innerHTML = strike_score;
            if(strike_score == 3) {
                document.querySelector('#text_strike').innerHTML = 0;
                out_score ++;
                maintext('❌ 아웃! ❌');
                strike_score = 0;
                document.querySelector('#text_out').innerHTML = out_score;
                ball_score = 0;
                strike_score = 0;
                document.querySelector('#text_ball').innerHTML = ball_score;
                document.querySelector('#text_strike').innerHTML = strike_score;
                if(out_score == 3) {
                    document.querySelector('#text_out').innerHTML = 0;
                    out_score = 0;
                    ball_score = 0;
                    strike_score = 0;
                    document.querySelector('#text_ball').innerHTML = ball_score;
                    document.querySelector('#text_strike').innerHTML = strike_score;
                    isComputer = false
                    ch_round();
                    reset()
                } 
            } else {
                out_score == 0;
                strike_score == 0;
            }
        }
} //스트라이크 버튼
function computerball(){
    let perhit = Math.floor(Math.random()*10)+1;
    let ballnohit = Math.floor(Math.random()*10)+1;
    let c_score = document.querySelector('#c_score');
    let u_score =  document.querySelector('#u_score');
    base_ru_homerun.style.display = 'none';
    base_ru_homerun1.style.display = 'none';
    chchch.style.display = 'none'
    if(perhit >= 9){
        let homerun = Math.floor(Math.random()*10)+1;
        if(homerun <= 2){
            if(computer_at >=1 && computer_at2 >=1 && computer_at3 >=1){
                if(game_switch % 2 == 0) {
                    computer_score += 4;
                } else {
                    user_score +=4;
                }
                reset()
            } else if((computer_at>=1 && computer_at2 >=1 && computer_at3 === 0) || (computer_at >=1 && computer_at3 >=1 && computer_at2 === 0) || (computer_at2 >=1 && computer_at3 >=1 && computer_at === 0)){
                if(game_switch % 2 == 0) {
                    computer_score += 3;
                } else {
                    user_score +=  3;
                }
                reset()
            } else if((computer_at >=1 && computer_at2 === 0 && computer_at3 === 0) || (computer_at2 >=1 && computer_at1 === 0 && computer_at3 === 0) || (computer_at3 >=1 && computer_at1 === 0 && computer_at2 === 0)){
                if (game_switch % 2 == 0) {
                    computer_score += 2;
                } else {
                    user_score += 2;
                }
                reset()
            } else {
                if (game_switch % 2 == 0) {
                    computer_score ++;
                } else {
                    user_score ++;
                }
                reset() 
            }
            if (game_switch % 2== 0) {
                c_score.innerHTML = computer_score;
            } else {
                u_score.innerHTML = user_score;
            }   
            strike_score = 0;
            document.querySelector('#text_strike').innerHTML = strike_score;
            ball_score = 0;
            document.querySelector('#text_ball').innerHTML = ball_score;
            maintext('⭐ 홈런 ⭐');
            base_ru_homerun.style.display = 'block';
            base_ru_homerun1.style.display = 'block';
        }else{
            strike_score = 0;
            document.querySelector('#text_strike').innerHTML = strike_score;
            ball_score = 0;
            document.querySelector('#text_ball').innerHTML = ball_score;
            maintext('🏏 안타 🏏');
            if(computer_at === 0){
                computer_at ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            } else if(computer_at >=1 && computer_at2 === 0){
                computer_at ++ ;
                computer_at2 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            } else if(computer_at2 >= 1 || computer_at3 ===0){
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            }else{
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            }
            colorsp();
        }
    }else{
        if(ballnohit > 6){
            maintext('치지 못했습니다! 스트라이크!');
            strike_score ++;
            document.querySelector('#text_strike').innerHTML = strike_score;
            if(strike_score == 3) {
                document.querySelector('#text_strike').innerHTML = 0;
                out_score ++;
                maintext('❌ 아웃! ❌');
                strike_score = 0;
                document.querySelector('#text_out').innerHTML = out_score;
                ball_score = 0;
                document.querySelector('#text_ball').innerHTML = ball_score;
                document.querySelector('#text_strike').innerHTML = strike_score;
                if(out_score == 3) {
                    document.querySelector('#text_out').innerHTML = 0;
                    out_score = 0;
                    ball_score = 0;
                    strike_score = 0;
                    document.querySelector('#text_ball').innerHTML = ball_score;
                    document.querySelector('#text_strike').innerHTML = strike_score;
                    isComputer = false
                    ch_round();
                    reset()
                } 
            } else {
                out_score == 0;
                strike_score == 0;
            }
        } else {
            maintext('볼!!');
            ball_score ++;
            document.querySelector('#text_ball').innerHTML = ball_score;
            ballrun();
        }
        }
    } //볼 버튼
function ballrun(){
        if(ball_score == 4){
            maintext('4볼 진루 🙂')
            ball_score = 0;
            strike_score = 0;
            document.querySelector('#text_ball').innerHTML = ball_score;
            document.querySelector('#text_strike').innerHTML = strike_score;
            if(computer_at === 0){
                computer_at ++ ;
                score_ch();
                score_ch2();
                score_ch3();
                
            } else if(computer_at >=1 && computer_at2 === 0){
                computer_at ++ ;
                computer_at2 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            } else if(computer_at2 >= 1 || computer_at3 ===0){
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            }else{
                computer_at ++ ;
                computer_at2 ++ ;
                computer_at3 ++ ;
                score_ch();
                score_ch2();
                score_ch3();
            }
            colorsp();
        }
    } //4볼