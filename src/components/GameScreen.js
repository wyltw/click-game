import { gameScreenImgEl } from "./Common.js";

let cookieHp = 5;
let initialDamage = 1;

//根據所需的遊戲狀態建立類實例，初始化餅乾的狀態
class GameState {
  constructor(initialHp, gaming) {
    this.isGaming = gaming;
    this.cookieHp = initialHp;
    this.currentCookieHp = initialHp;
    // this.currentPhase = 1;
  }

  clickCookie(damage) {
    this.currentCookieHp = this.currentCookieHp - damage;
  }

  cookieHpPercentage() {
    return (this.currentCookieHp / this.cookieHp) * 100;
  }
}

let newCookie = new GameState(cookieHp, false);
//以餅乾血量的百分比作為圖片切換的依據

const cookiePhases = [
  { phase: 2, threshold: 80 },
  { phase: 3, threshold: 60 },
  { phase: 4, threshold: 40 },
  { phase: 5, threshold: 20 },
  { phase: 6, threshold: 0 },
];

const clickCookie = () => {
  //當餅乾的血量小於20
  if (newCookie.cookieHpPercentage() < 20) {
    cookieHp = cookieHp * 1.5;
    newCookie = new GameState(cookieHp, false);
    gameScreenImgEl.src = "./assets/phase1.png";
    initialDamage++;
    console.log(newCookie, initialDamage);
  }

  newCookie.clickCookie(initialDamage);
  for (const { phase, threshold } of cookiePhases) {
    if (newCookie.cookieHpPercentage() <= threshold) {
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
