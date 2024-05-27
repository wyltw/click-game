import {
  INITIAL_PREGAME_TIMER,
  INITIAL_INGAME_TIMER,
  INITIAL_SCORE,
  gameScreenImgEl,
  scoreBoxScoreTextEl,
  scoreBoxTimerTextEl,
  pregameTimerEl,
} from "./Common.js";

export const resetGame = () => {
  pregameTimerEl.textContent = INITIAL_PREGAME_TIMER;
  scoreBoxTimerTextEl.classList.remove("timer-warning");
  scoreBoxScoreTextEl.textContent = INITIAL_SCORE;
  scoreBoxTimerTextEl.textContent = INITIAL_INGAME_TIMER;
  gameScreenImgEl.src = "./assets/phase1.png";
};
