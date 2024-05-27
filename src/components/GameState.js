//根據所需的遊戲狀態建立類實例，初始化餅乾的狀態

// 在嘗試使遊戲狀態回到初始化時export class造成了一些initialization error,因此先建立類實例再export。
class GameState {
  constructor(initialHp, isGaming) {
    this.cookieHp = initialHp;
    this.currentCookieHp = initialHp;
    this.isGaming = isGaming || false;
    // this.currentPhase = 1;
  }

  clickCookie(damage) {
    this.currentCookieHp = this.currentCookieHp - damage;
  }

  getCookieHpPercentage() {
    return (this.currentCookieHp / this.cookieHp) * 100;
  }
}

export const createCookie = (initialHp) => {
  return new GameState(initialHp);
};
