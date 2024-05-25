import { gameScreenImgEl } from "./Common.js";

let cookieHp = 5;
let initialDamage = 1;

//根據所需的遊戲狀態建立類實例，初始化餅乾的狀態
class GameState {
  constructor(initialHp, gaming) {
    this.isGaming = gaming;
    this.cookieHp = initialHp;
    this.currentCookieHp = initialHp;
    this.currentPhase = 1;
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

const clickCookie = () => {
  //當餅乾的破損狀態到達6
  if (newCookie.cookieHpPercentage() < 20) {
    cookieHp = cookieHp * 1.5;
    newCookie = new GameState(cookieHp, false);
    gameScreenImgEl.src = "./assets/phase1.png";
    initialDamage++;
    console.log(newCookie, initialDamage);
  }

  newCookie.clickCookie(initialDamage);
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
