import { gameScreenImgEl } from "./Common.js";

const gameState = {
  isGaming: false,
  cookieHp: 5,
  cookieCurrentHp: this.cookieHp,
  cookieHpPercentage: function () {
    return (this.cookieCurrentHp / this.cookieHp) * 100;
  },
};

let cookieCurrentHp = gameState.cookieHp;

const clickCookie = () => {
  cookieCurrentHp = cookieCurrentHp - 1;
  cookieHpPercentage = (cookieCurrentHp / gameState.cookieHp) * 100;
  console.log(cookieCurrentHp);
  console.log(cookieHpPercentage);
  if (cookieHpPercentage <= 80) {
    gameScreenImgEl.src = "./assets/phase2.png";
  }
  if (cookieHpPercentage <= 60) {
    gameScreenImgEl.src = "./assets/phase3.png";
  }
  if (cookieHpPercentage <= 40) {
    gameScreenImgEl.src = "./assets/phase4.png";
  }
  if (cookieHpPercentage <= 20) {
    gameScreenImgEl.src = "./assets/phase5.png";
  }
  if (cookieHpPercentage <= 0) {
    gameScreenImgEl.src = "./assets/phase6.png";
  }
};

gameScreenImgEl.addEventListener("click", clickCookie);

// class GameState {
//   constructor() {
//     this.isGaming = false;
//     this.cookieHp = 5;
//   }
// }
