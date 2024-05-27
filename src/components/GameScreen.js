import {
  gameScreenImgEl,
  scoreBoxScoreTextEl,
  mainMenuEl,
  mainMenuStartBtnEl,
  pregameTimerEl,
  gameScreenEl,
  COOKIE_HP,
  INITIAL_DAMAGE,
  transitionScreen,
} from "./Common.js";
import { startPregameTimer } from "./Timer.js";
import { createCookie } from "./GameState.js";
import { resetGame } from "./ResetGame.js";

let cookieHp;
let initialDamage;
let newCookie;

mainMenuStartBtnEl.addEventListener("click", () => {
  resetGame();
  cookieHp = COOKIE_HP;
  initialDamage = INITIAL_DAMAGE;
  newCookie = createCookie(cookieHp);
  //為了重置遊戲狀態，就和更新餅乾難度一樣，建立新的實例，尤其是在點擊開始按鈕的時候。
  transitionScreen(mainMenuEl, pregameTimerEl);
  startPregameTimer(gameScreenEl);
});

//以餅乾血量的百分比作為圖片切換的依據

const cookiePhases = [
  { phase: 2, threshold: 80 },
  { phase: 3, threshold: 60 },
  { phase: 4, threshold: 40 },
  { phase: 5, threshold: 20 },
  { phase: 6, threshold: 0 },
];

const clickCookie = () => {
  console.log(newCookie, initialDamage);
  //當餅乾的血量小於0，創建新的實例並且增加血量和傷害，並且計算得分
  if (newCookie.getCookieHpPercentage() < 0) {
    cookieHp = cookieHp * 1.5;
    newCookie = createCookie(cookieHp);
    gameScreenImgEl.src = "./assets/phase1.png";
    ++initialDamage;
    ++scoreBoxScoreTextEl.textContent;
  }

  newCookie.clickCookie(initialDamage);
  for (const { phase, threshold } of cookiePhases) {
    if (newCookie.getCookieHpPercentage() <= threshold) {
      gameScreenImgEl.src = `./assets/phase${phase}.png`;
      // console.log(threshold, newCookie.cookieHpPercentage());
      //不需要使用break，因為每次phase和threshold固定，雖然條件判斷通過，但是phase固定，所以圖片並不會改變。
      //第一次
      // 80 80

      //第二次
      // 60 80
      // 60 60

      // 第三次
      // 40 80
      // 40 60
      // 40 40
    }
  }
};

gameScreenImgEl.addEventListener("click", clickCookie);

//一開始想到的實踐

// if (newCookie.cookieHpPercentage() <= 80) {
//   gameScreenImgEl.src = "./assets/phase2.png";
// }
// if (newCookie.cookieHpPercentage() <= 60) {
//   gameScreenImgEl.src = "./assets/phase3.png";
// }
// if (newCookie.cookieHpPercentage() <= 40) {
//   gameScreenImgEl.src = "./assets/phase4.png";
// }
// if (newCookie.cookieHpPercentage() <= 20) {
//   gameScreenImgEl.src = "./assets/phase5.png";
// }

//嘗試的錯誤實踐
// const cookiePhases = [80, 60, 40, 20, 0];
// for (let i = 0; i < cookiePhases.length; i++) {
//   console.log(`percentage ${newCookie.cookieHpPercentage()}`);
//   console.log(newCookie.currentPhase);
//   if (newCookie.cookieHpPercentage() <= cookiePhases[i]) {
//     newCookie.currentPhase++;
//     gameScreenImgEl.src = `./assets/phase${newCookie.currentPhase}.png`;
//     break;
//   }
// }
