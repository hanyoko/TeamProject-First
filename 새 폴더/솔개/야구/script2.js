//사용자가 볼치기를 눌렀을 때
//컴퓨터는 스트라이크랑 볼 중 하나를 선택 75% 25%
//볼을 선택하면 컴퓨터의 볼 점수가 1씩 증가
//컴퓨터의 볼 점수가 4점이 되면 내 주자가 한 명 나옴
//주자가 들어오면 점수 1증가



let text_elem = document.querySelector('.text');
//남은 턴 횟수
let turn_left = document.querySelector('.turn_number')
//점수판 엘리먼츠
let com_score_elem = document.querySelector('.com_score_raise');
let user_score_elem = document.querySelector('.user_score_raise');
//실패 점수, 볼 점수 엘리먼츠
let com_fail_elem = document.querySelectorAll('.com_fail span');
let user_fail_elem = document.querySelectorAll('.user_fail span');
//공격, 수비 버튼
let defense_btn = document.querySelectorAll('#defense button');
let attack_btn = document.querySelectorAll('#attack button');
// 1루
let position_1 = document.querySelector('.dot2');
// 2루
let position_2 = document.querySelector('.dot1');
// 3루
let position_3 = document.querySelector('.dot3');
// 4루
let position_4 = document.querySelector('.dot4');
let low_ball = 0; // 안타 쳤을 때 1 증가하는 점수
let ball_out = 0; //컴이 볼을 4번 쳤을 때 1 증가하는 점수

//컴퓨터 객체
let computer = {
    score: 0, //컴 점수
    fail: 0, //컴 스윙 실패/지켜보기 점수
    ball: 0, //컴이 볼을 칠 때마다 1 증가하는 점수
}
// 사용자 객체
let user = {
    score: 0,
    fail: 0,
    ball: 0,

}
// 전체 게임
let game = {
    is_com_turn: true, //컴퓨터 턴인지 확인
    turn_left: 9, // 남은 턴 횟수
    one: 0, // 2루 포지션
    two: 0, // 3루 포지션
    three: 0, // 4루 포지션
}

//안내글 변경해주는 함수
function text(msg){
    text_elem.innerHTML = msg;
}
//점수 변경 함수
function score_update(score, mal){ //score = 얻은 점수/ mal = 컴이냐 사람이냐 결정
    if(mal === 0){
        computer.score += score; //컴 스코어에 변수에서 받은 스코어 값을 더해라.
        com_score_elem.innerHTML = computer.score;
    }else {
        user.score += score;
        user_score_elem.innerHTML = user.score;
    }
}
//공격버튼 비활성화 함수
function disable_att(flag){
    for(let i = 0; i < attack_btn.length; i++){
        attack_btn[i].disabled = flag;
    }
}
//수비버튼 비활성화 함수
function disable_def(flag){
    for(let i = 0; i < defense_btn.length; i++){
        defense_btn[i].disabled = flag;
    }
}
//수비 버튼 이벤트 연결
defense_btn[0].addEventListener('click', function(){
    defense_turn(0);
})
defense_btn[1].addEventListener('click', function(){
    defense_turn(1);
})
//공격 버튼 이벤트 연결
attack_btn[0].addEventListener('click', function(){
    attack_turn(0);
})
attack_btn[1].addEventListener('click', function(){
    attack_turn(1);
})

//수비
function defense_turn(btn_type){
    let type_num = Math.floor(Math.random()*6);
    if (game.is_com_turn == true) {
        if (btn_type == 0) { //내가 스트라이크 버튼을 눌렀을 때
            if (type_num < 5 ){ //컴퓨터가 75%의 확률로 볼치기 선택
                hit();
            }else { //컴퓨터가 25%의 확률로 지켜보기 선택
                hit_fail()
                text(`컴퓨터가 지켜보기를 선택했습니다.`)
            }
        }else { //내가 볼 버튼을 눌렀을 때
            ball_score();
            text(`당신이 볼을 던졌습니다.`)
        }
    }
}
//공격
function attack_turn(btn_type){
    if (game.is_com_turn == false){
        if (btn_type == 0){
            hit();
        }else {
            hit_fail();
            text(`당신이 지켜보기를 선택했습니다.`);
        }
    }
}



//볼을 쳤을 때 홈런, 안타, 실패 상황
function hit(){
    let ran_num = Math.floor(Math.random()*9); //랜덤한 경우의 수
    if(game.is_com_turn == true){ //컴퓨터 공격 턴일 때
        if (ran_num < 3){ //안타를 친 상황.(ran_num값이 0~1이 나왔을 때)
            text(`컴퓨터가 안타를 쳤습니다.`);
            low_ball == 4? low_ball = 4 : low_ball++ ; //안타 횟수가 7이상이 되면 다시 0으로 리셋
            console.log(low_ball)
            dot_position(low_ball);
            removeOff();
            if(low_ball == 4) score_update(1,0); //나간 주자가 들어올 때 마다 점수 1 증가
        } else if ( ran_num > 7){ //홈런 친 상황
            text(`컴퓨터가 홈런을 쳤습니다.`);
            score_update(1,0);
            home_run(0);
            removeOff();
        }else{  // 공격 실패.(ran_num 값이 2~3이 나왔을 때)
            text(`컴퓨터가 공격에 실패했습니다.`);
            hit_fail(true);
        }
    }else { //사용자 공격 턴일 때
        if (Math.random() > 0.9){
            ball_score();
            text(`컴퓨터가 볼을 던졌습니다.`)
        }
        else {
            if (ran_num < 3 ){ //안타를 친 상황.(ran_num값이 0~1이 나왔을 때)
                text(`당신이 안타를 쳤습니다.`);
                low_ball == 4? low_ball = 4 : low_ball++ ; //안타 횟수가 7이상이 되면 다시 0으로 리셋
                dot_position(low_ball);
                removeOff();
                if(low_ball == 4) score_update(1,1); //나간 주자가 들어올 때 마다 점수 1 증가
            } else if ( ran_num > 7){ //홈런 친 상황 값이 4가 나왔을 때
                text(`당신이 홈런을 쳤습니다.`);
                score_update(1,1);
                home_run(1);
                removeOff();
            }else{  // 공격 실패.(ran_num 값이 2~3이 나왔을 때)
                text(`당신이 공격에 실패했습니다.`);
                hit_fail(false);
            }
        }
    }
}


//스윙 실패 시 실패 횟수 1씩 증가, 3번 실패 시 공수전환해주는 함수
function hit_fail() {
    if(game.is_com_turn == true){
        if(computer.fail >= 2){
            computer.fail = 0;
            disable_def(true) //수비버튼 비활성화
            disable_att(false) //공격버튼 활성화
            alert(`컴퓨터가 아웃되었습니다. 공수가 전환됩니다.`);
            if (game.one == 1) game.one = 0;
            if (game.two == 1) game.two = 0;
            if (game.three == 1) game.three = 0;
            removeOff();// 나가있던 주자들 원상복귀
            user.ball = 0;
            user_fail_elem[1].innerHTML = user.ball; //사용자의 볼 횟수 리셋
            low_ball = 0;
            console.log(low_ball)
            game.is_com_turn = false; //턴 바꿔주기
        }else computer.fail += 1;
        com_fail_elem[0].innerHTML = computer.fail;
    }else{ //컴퓨터 턴이 아닐 때, 즉 사용자가 공격일 때
        if(user.fail >= 2){
            user.fail = 0;
            disable_att(true) //공격버튼 비활성화
            disable_def(false) //수비버튼 활성화
            alert(`당신이 아웃되었습니다. 공수가 전환됩니다.`);
            if (game.one == 1) game.one = 0;
            if (game.two == 1) game.two = 0;
            if (game.three == 1) game.three = 0;
            removeOff();// 나가있던 주자들 원상복귀
            computer.ball = 0;
            com_fail_elem[1].innerHTML = computer.ball; //컴퓨터의 볼 횟수 리셋
            low_ball = 0;
            game.turn_left = game.turn_left - 1;
            turn_left.innerHTML = game.turn_left;
            if (game.turn_left == 0){
                if(computer.score > user.score){
                    alert(`게임이 종료되었습니다. 컴퓨터가 승리하였습니다.`)
                    document.querySelector('.com_score_text').style.color = 'Crimson'
                    document.querySelector('.com_score_text').innerHTML += ' 승'
                    document.querySelector('.user_score_text').style.color = 'MidnightBlue'
                    document.querySelector('.user_score_text').innerHTML += ' 패'
                }else if (user.score > computer.score){
                    alert(`게임이 종료되었습니다. 당신이 승리하였습니다.`)
                    document.querySelector('.user_score_text').style.color = 'Crimson'
                    document.querySelector('.user_score_text').innerHTML += ' 승'
                    document.querySelector('.com_score_text').style.color = 'MidnightBlue'
                    document.querySelector('.com_score_text').innerHTML += ' 패'
                }else {
                    alert(`게임이 종료되었습니다. 비겼습니다.`)
                    text(`비겼습니다.`)
                    document.querySelector('.user_score_text').style.color =DarkSeaGreen;
                    document.querySelector('.com_score_text').style.color = DarkSeaGreen;

                }
                disable_att(true);
                disable_def(true);
                text_elem.style.color = "tomato"
                text(`게임종료`)
            }
            game.is_com_turn = true; //턴 바꿔주기
        }else user.fail += 1;
        user_fail_elem[0].innerHTML = user.fail;
    }
}
//홈런 쳤을 때 나갔던 주자들 다 들어오고 나간 주자+1 만큼 점수 오르기
function home_run(flag){
    if (game.one == 1) score_update(1,flag);
    if (game.two == 1) score_update(1,flag);
    if (game.three == 1) score_update(1,flag);
    game.one = 0;
    game.two = 0;
    game.three = 0;
    low_ball = 0;
} 

//볼 던졌을 때 함수
function ball_score(){
    if(game.is_com_turn == true){ //컴퓨터 턴일 때
        if(ball_out >= 6) ball_out = 0;
        if(user.ball >= 4) user.ball = 1;
        else user.ball++;
        user_fail_elem[1].innerHTML = user.ball;
        if (user.ball == 4){
            ball_out += 1;
            if(ball_out == 4) score_update(1,0);
            if(ball_out == 5) score_update(1,0);
            if(ball_out == 6) score_update(1,0);
        }
        dot_position(ball_out);
        removeOff();
    }else { //사용자 턴일 때
        if(ball_out >= 6) ball_out = 0;
        if(computer.ball >= 4) computer.ball = 1;
        else computer.ball++;
        com_fail_elem[1].innerHTML = computer.ball;
        if (computer.ball == 4){
            ball_out += 1;
            if(ball_out == 4) score_update(1,1);
            if(ball_out == 5) score_update(1,1);
            if(ball_out == 6) score_update(1,1);
        }
        dot_position(ball_out);
        removeOff();
    }
}
//안타 쳤을 때 주자들이 1루씩 이동하는 함수
function dot_position(kind){
    if (kind == 1) {
        game.one = 1;
    }else if (kind == 2) {
        game.two = 1;
    }else if (kind == 3) {
        game.three = 1;
    }
}
//주자들이 이동했을 때 해당 포지션에 검정 동그라미 on/off 해주는 함수
function removeOff() {
    if (game.one == 1) position_1.classList.remove('off');
    else position_1.classList.add('off');
    if (game.two == 1) position_2.classList.remove('off');
    else position_2.classList.add('off');
    if (game.three == 1) position_3.classList.remove('off');
    else position_3.classList.add('off');
}











