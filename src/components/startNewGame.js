import {
  INITIAL_PREGAME_TIMER,
  INITIAL_INGAME_TIMER,
  INITIAL_SCORE,
  COOKIE_HP,
  INITIAL_DAMAGE,
  gameScreenImgEl,
  scoreBoxScoreTextEl,
  scoreBoxTimerTextEl,
  pregameTimerEl,
  state,
} from "./Common.js";
import { createCookie } from "./GameState.js";

const startNewGame = () => {
  //為了重置遊戲狀態，就和更新餅乾難度一樣，建立新的實例，尤其是在點擊開始按鈕的時候。
  state.cookie = createCookie(COOKIE_HP);
  state.cookieHp = COOKIE_HP;
  state.initialDamage = INITIAL_DAMAGE;
  pregameTimerEl.textContent = INITIAL_PREGAME_TIMER;
  scoreBoxTimerTextEl.classList.remove("timer-warning");
  scoreBoxScoreTextEl.textContent = INITIAL_SCORE;
  scoreBoxTimerTextEl.textContent = INITIAL_INGAME_TIMER;
  gameScreenImgEl.src = "./assets/phase1.png";
};
export default startNewGame;
