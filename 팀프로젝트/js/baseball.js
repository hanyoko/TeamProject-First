// while(true) /*조건*/{
//     userName = prompt("팀 이름을 정해주세요(세글자)");
//     console.log(userName);
//     if(userName.length <= 3 && userName.length != 0){
//         break;
//     }
//     alert("이름을 다시 입력하시오")
// }
// // 해당조건을 통과한 이름을 전광판 userName에 입력
// document.querySelector("#userName").innerHTML=userName;
// alert(`${userName}님의 승리를 기원합니다!`)

let game = {
    isComputerAttack: true,
    inning: 1,
    strike: 0,
    ball: 0,
    out: 0,
    computerScore: 0,
    playerScore: 0,
    ballType: null,
    batting: null,
    battingResult: null,
    currentResult: null,
    inningScore: 0,
  };

  //컨트롤러
const button1 = document.querySelectorAll(".btn");
const button2 = document.querySelectorAll(".btn");
const button3 = document.querySelectorAll(".btn");

document.querySelectorAll('.btn')[0].addEventListener('click',swing)
document.querySelectorAll('.btn')[1].addEventListener('click',waiting)
document.querySelectorAll('.btn')[2].addEventListener('click',skill)

function swing() {
    document.querySelector
}




