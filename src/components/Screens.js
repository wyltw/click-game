import {
  titleScreenEl,
  mainMenuEl,
  scoreScreenEl,
  scoreScreenFormEl,
  recordBlockButtonEl,
  homeBlockButtonEl,
  startBlockButtonEl,
  pregameTimerEl,
  rankingEl,
} from "./Common.js";
import startNewGame from "./startNewGame.js";
import { startPregameTimer } from "./Timer.js";

export const renderScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};

export const showRankingEl = (boolean = true) => {
  if (boolean) {
    scoreScreenFormEl.classList.add("hidden");
    rankingEl.classList.remove("hidden");
  } else {
    rankingEl.classList.add("hidden");
    scoreScreenFormEl.classList.remove("hidden");
  }
};

titleScreenEl.addEventListener("click", () => {
  renderScreen(titleScreenEl, mainMenuEl);
});

recordBlockButtonEl.addEventListener("click", () => {
  showRankingEl();
  renderScreen(mainMenuEl, scoreScreenEl);
});

homeBlockButtonEl.addEventListener("click", () => {
  showRankingEl(false);
  renderScreen(scoreScreenEl, mainMenuEl);
});

startBlockButtonEl.addEventListener("click", () => {
  startNewGame();
  renderScreen(mainMenuEl, pregameTimerEl);
  startPregameTimer();
});
