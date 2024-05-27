import {
  scoreBoxTimerTextEl,
  pregameTimerEl,
  transitionScreen,
  gameScreenEl,
  scoreScreenEl,
  scoreScreenFormEl,
  rankingEl,
} from "./Common.js";

const startIngameTimer = () => {
  const ingameTimerInterval = setInterval(() => {
    if (scoreBoxTimerTextEl.textContent > 0) {
      --scoreBoxTimerTextEl.textContent;
    } else {
      clearInterval(ingameTimerInterval);
      scoreBoxTimerTextEl.classList.remove("timer-warning");
      rankingEl.classList.add("hidden");
      scoreScreenFormEl.classList.remove("hidden");
      transitionScreen(gameScreenEl, scoreScreenEl);
      //比起遊戲結束時重置，開始重置也可以
    }
    if (scoreBoxTimerTextEl.textContent < 4) {
      scoreBoxTimerTextEl.classList.add("timer-warning");
    }
  }, 1000);
};

export const startPregameTimer = (showEl) => {
  const pregameTimerInterval = setInterval(() => {
    if (pregameTimerEl.textContent > 1) {
      --pregameTimerEl.textContent;
    } else {
      pregameTimerEl.classList.add("hidden");
      showEl.classList.remove("hidden");
      clearInterval(pregameTimerInterval);
      startIngameTimer();
    }
  }, 1000);
};
