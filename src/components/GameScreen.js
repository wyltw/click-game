import { gameScreenImgEl, scoreBoxScoreTextEl, state } from "./Common.js";
import startNewStage from "./startNewStage.js";

//以餅乾血量的百分比作為圖片切換的依據

const cookiePhases = [
  { phase: 2, threshold: 80 },
  { phase: 3, threshold: 60 },
  { phase: 4, threshold: 40 },
  { phase: 5, threshold: 20 },
  { phase: 6, threshold: 0 },
];

const clickCookie = () => {
  console.log(state.cookieHp, state.initialDamage);
  //當餅乾的血量小於0，創建新的實例並且增加血量和傷害，並且計算得分
  if (state.cookie.getCookieHpPercentage() < 0) {
    startNewStage();
  }

  state.cookie.clickCookie(state.initialDamage);
  for (const { phase, threshold } of cookiePhases) {
    if (state.cookie.getCookieHpPercentage() <= threshold) {
      gameScreenImgEl.src = `./src/assets/phase${phase}.png`;
      // console.log(threshold, state.cookie.getCookieHpPercentage());
      //不需要使用break，因為每次迭代phase和threshold固定，雖然血量低於閾值的條件判斷通過，但是通過時的phase固定，所以圖片並不會改變。直到最後一次迭代的條件通過，也就是血量低於閾值的時候，才變更新的圖片，且接下來因條件不符所以不會更換圖片。
      //第一次點擊
      // 80 80

      //第二次點擊
      // 60 80
      // 60 60

      // 第三次點擊
      // 40 80
      // 40 60
      // 40 40
    }
  }
};

gameScreenImgEl.addEventListener("click", clickCookie);
