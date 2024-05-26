import {
  pregameTimerEl,
  scoreBoxTimerTextEl,
  transitionScreen,
  gameScreenEl,
  scoreScreenEl,
} from "./Common.js";

const startIngameTimer = () => {
  const ingameTimerInterval = setInterval(() => {
    if (scoreBoxTimerTextEl.textContent > 0) {
      --scoreBoxTimerTextEl.textContent;
    } else {
      clearInterval(ingameTimerInterval);
    }
    if (scoreBoxTimerTextEl.textContent < 4) {
      scoreBoxTimerTextEl.classList.add("timer-warning");
    }
    if (scoreBoxTimerTextEl.textContent == 0) {
      transitionScreen(gameScreenEl, scoreScreenEl);
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
      pregameTimerEl.textContent = startIngameTimer();
    }
  }, 1000);
};
