// 컨트롤러
const button1 = document.querySelectorAll(".btn")[0];
const button2 = document.querySelectorAll(".btn")[1];

// strike, ball, out
const strikeScoreElem = document.querySelector(".strike_score");
const ballScoreElem = document.querySelector(".ball_score");
const outScoreElem = document.querySelector(".out_score");

// 점수
const computerScoreElems = document.querySelectorAll(".computer_score");
const playerScoreElems = document.querySelectorAll(".player_score");
const computerTotalScoreElem = document.querySelector(".computer_total_score");
const playerTotalScoreElem = document.querySelector(".player_total_score");

// 이닝
const inningElem = document.querySelector(".inning");

// 안내 글
const textAttackElem = document.querySelector("#attackText");
const textDefenseElem = document.querySelector("#defenseText");
const textResultElem = document.querySelector("#resultText");

// 공수 표현
const attackTurnElem = document.querySelector(".turn");

const base = [
  [false, document.querySelector("#base0")],
  [false, document.querySelector("#base1")],
  [false, document.querySelector("#base2")],
  [false, document.querySelector("#base3")],
];

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

const percentage = {
  strike: {
    out: 30,
    1: 70,
    2: 90,
    3: 95,
    homerun: 100,
  },
  ball: {
    out: 30,
    1: 70,
    2: 90,
    3: 95,
    homerun: 100,
  },
};

function play(btn) { //버튼을 누를때 동작하는 함수
  // 결과 초기화
  textResultElem.innerHTML = "";
  btnNumber = btn === "btn1" ? 1 : 2;
  game.currentResult = null;
  game.batting = null;
  game.battingResult = null;
  game.ballType = null;

  // 조건 값들(ballType, batting, battingResult) 세팅
  if (game.isComputerAttack) { //컴퓨터 공격
    if (btnNumber === 1) {
      game.ballType = "strike";
      setBatting();
      if (game.batting) getBattingResult(game.ballType);
    } else {
      game.ballType = "ball";
      setBatting();
      if (game.batting) getBattingResult(game.ballType);
    }

    textDefenseElem.innerHTML = `<strong>플레이어</strong>가 <strong>${game.ballType}</strong> 영역으로 공을 던졌습니다!`;
  } else {
    // 플레이어 공격
    setBallType();
    textDefenseElem.innerHTML = `<strong>컴퓨터</strong>가 <strong>${game.ballType}</strong> 영역으로 공을 던졌습니다!`;
    if (btnNumber === 1) {
      game.batting = true;
      getBattingResult(game.ballType);
    } else {
      game.batting = false;
    }
  }

  showAttackMsg();
  playResult();
  checkScore();
  console.log("결과: ", game.strike, game.ball, game.out);
}

function move(dis, fball) {
  let count = 0;
  if (dis === 4) {
    //홈런
    for (let i = 0; i < base.length; i++) {
      if (base[i][0]) {
        count++;
        base[i][0] = false;
      }
    }
    count += 1;

    if (game.isComputerAttack) {
      game.computerScore += count;
      game.inningScore += count;
      computerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      computerTotalScoreElem.innerHTML = game.computerScore;
    } else {
      game.playerScore += count;
      game.inningScore += count;
      playerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      playerTotalScoreElem.innerHTML = game.playerScore;
    }
  } else if (fball) {  //추가
    if(base[1][0]){
      // if(base[2][0]) {
      //   if(base[3][0]){
      //     count = 1;
      //   } else {
      //     base[3][0] = true;
      //   }
      // } else {
      //   base[2][0] = true;
      // }
      count = checkBase(1);
    }
    base[1][0] = true;

    if (game.isComputerAttack) {
      game.computerScore += count;
      game.inningScore += count;
      computerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      computerTotalScoreElem.innerHTML = game.computerScore;
    } else {
      game.playerScore += count;
      game.inningScore += count;
      playerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      playerTotalScoreElem.innerHTML = game.playerScore;
    }
  } else {
    for (let i = base.length - 1; i >= 0; i--) {
      if (base[i][0]) {
        let result = i + dis;
        if (result > base.length - 1) {
          count += 1;
          base[i][0] = false;
        } else {
          base[result][0] = true;
          base[i][0] = false;
        }
      } else if (i === 0) base[dis][0] = true;
    }

    if (game.isComputerAttack) {
      game.computerScore += count;
      game.inningScore += count;
      computerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      computerTotalScoreElem.innerHTML = game.computerScore;
    } else {
      game.playerScore += count;
      game.inningScore += count;
      playerScoreElems[game.inning - 1].innerHTML = game.inningScore;
      playerTotalScoreElem.innerHTML = game.playerScore;
    }
  }

  if (count > 0)
    textResultElem.innerHTML = `<strong>${count}명</strong>이 홈에 <strong>진입</strong>합니다!!`;

  let color;
  if (game.isComputerAttack) color = "#ff0000";
  else color = "#0000ff";

  for (let j = 0; j < base.length; j++) {
    if (base[j][0]) base[j][1].style.background = color;
    else base[j][1].style.background = "";
  }
  checkScore();
}

function checkBase(checkNum){
  let result;
  if(base[checkNum][0]) { // 자리에 사람이 있으면
      if(checkNum === base.length-1) {
        base[checkNum][0] = false;
        return 1;
      } else {
        result = checkBase(checkNum+1);
        base[checkNum+1][0] = true;
        base[checkNum][0] = false;
        return result;
      }
    } else { // 자리에 사람이 없을 때 옮겨주고 return
      base[checkNum][0] = true;
      base[checkNum-1][0] = false;
      return 0
  }
}

function showAttackMsg() {
  let who = game.isComputerAttack ? "컴퓨터" : "플레이어";
  if (game.batting) {
    if (game.battingResult === "out")
      textAttackElem.innerHTML = `<strong>${who}</strong>가 공을 쳤지만 <strong>아웃</strong>되었습니다.`;
    else if (game.battingResult === "1")
      textAttackElem.innerHTML = `<strong>${who}</strong>가 <strong>1루</strong>로 진출합니다.`;
    else if (game.battingResult === "2")
      textAttackElem.innerHTML = `<strong>${who}</strong>가 <strong>2루</strong>로 진출합니다.`;
    else if (game.battingResult === "3")
      textAttackElem.innerHTML = `<strong>${who}</strong>가 <strong>3루</strong>로 진출합니다.`;
    else if (game.battingResult === "homerun")
      textAttackElem.innerHTML = `<strong style="color: red">홈런!!!</strong>`;
    else if (game.battingResult === "헛스윙")
      textAttackElem.innerHTML = `<strong>${who}</strong>가 <strong>헛스윙</strong>을 했습니다.`;
  } else {
    textAttackElem.innerHTML = `<strong>${who}</strong>가 <strong>스윙을 하지 않았습니다.</strong>`;
  }
}

function showResultMsg() {
  if (game.currentResult) textResultElem.innerHTML = game.currentResult;
}

function playResult() {
  if (game.ballType === "ball") {
    if (!game.batting) {
      game.ball += 1;
    } else {
      switch (game.battingResult) {
        case "헛스윙":
          game.strike += 1;
          break;
        case "out":
          game.out += 1;
          game.strike = 0;
          break;
        case "1":
          move(1);
          break;
        case "2":
          move(2);
          break;
        case "3":
          move(3);
          break;
        case "homerun":
          move(4);
          game.ball = 0;
          game.strike = 0;
          break;
      }
    }
  } else if (game.ballType === "strike") {
    if (game.battingResult === "헛스윙" || !game.batting) {
      game.strike += 1;
    } else {
      switch (game.battingResult) {
        case "out":
          game.out += 1;
          game.strike = 0;
          break;
        case "1":
          move(1);
          break;
        case "2":
          move(2);
          break;
        case "3":
          move(3);
          break;
        case "homerun":
          move(4);
          game.ball = 0;
          game.strike = 0;
          break;
      }
    }
  }
  checkScore();
}

function getBattingResult(type) {
  // 확률 조정을 위한 type 매개변수
  let hitResult = Math.random() < 0.4 ? "안타" : "헛스윙";
  if (hitResult === "안타") {
    let p = Math.floor(Math.random() * 100);
    if (p < percentage[type]["out"]) {
      hitResult = "out";
    } else if (p < percentage[type]["1"]) {
      hitResult = "1";
    } else if (p < percentage[type]["2"]) {
      hitResult = "2";
    } else if (p < percentage[type]["3"]) {
      hitResult = "3";
    } else if (p < percentage[type]["homerun"]) {
      hitResult = "homerun";
    }
  }
  game.battingResult = hitResult;
  console.log(
    `${game.isComputerAttack ? "컴퓨터" : "플레이어"}`,
    game.ballType,
    game.batting,
    game.battingResult
  );
}

function setBallType() {
  game.ballType = Math.random() < 0.5 ? "strike" : "ball";
}

function setBatting() {
  game.batting = Math.random() < 0.5 ? true : false;
}

function checkScore() {
  if (game.ball === 4) {
    // game.strike += 1;
    game.ball = 0;
    move(1, true);
    textResultElem.innerHTML = "포볼! 1루 진출";
  } else if (game.strike === 3) {
    game.out += 1;
    game.strike = 0;
    textResultElem.innerHTML = "<strong>삼진 아웃!</strong>";
  }

  // 데이터 업데이트
  strikeScoreElem.innerHTML = game.strike;
  ballScoreElem.innerHTML = game.ball;
  outScoreElem.innerHTML = game.out;

  if (game.out === 3) changeAttack();
}

function changeAttack() {
  game.isComputerAttack = !game.isComputerAttack;
  game.inningScore = 0;

  if (game.isComputerAttack) {
    if (game.inning === 9) endGame();
    else {
      game.inning += 1;
      inningElem.innerHTML = game.inning;
    }
    computerScoreElems[game.inning - 1].innerHTML = game.inningScore;
    playerScoreElems[game.inning - 1].innerHTML = game.inningScore;
  }

  // elem style 변경
  const targetElem = document.querySelector(".attack");
  if (game.isComputerAttack) {
    targetElem.classList.remove("player");
    targetElem.classList.add("computer");
  } else {
    targetElem.classList.remove("computer");
    targetElem.classList.add("player");
  }

  changeButton();

  game.out = 0;
  game.strike = 0;
  game.ball = 0;

  outScoreElem.innerHTML = 0;
  strikeScoreElem.innerHTML = 0;
  ballScoreElem.innerHTML = 0;
  // base 초기화
  for (let i = 0; i < base.length; i++) {
    base[i][0] = false;
    base[i][1].style.background = "";
  }
}

function endGame() {
  // 결과 공지
  if (game.computerScore === game.playerScore) alert("비겼습니다.");
  else if (game.computerScore > game.playerScore) alert("졌습니다.");
  else alert("이겼습니다.");

  // 버튼 클릭 불가
  button1.disabled = true;
  button2.disabled = true;

  const modal = document.querySelector(".modal__container");
  setTimeout(() => {
    modal.style.display = "flex";
  }, 1000);
}

function changeButton() {
  if (game.isComputerAttack) {
    button1.innerHTML = "스트라이크";
    button2.innerHTML = "볼";
  } else {
    button1.innerHTML = "휘두르기";
    button2.innerHTML = "가만히 있기";
  }
}