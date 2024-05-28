import {
  titleScreenEl,
  mainMenuEl,
  scoreScreenEl,
  scoreScreenFormEl,
  recordBlockButtonEl,
  homeBlockButtonEl,
  startBlockButtonEl,
  pregameTimerEl,
  gameScreenEl,
} from "./Common.js";
import startNewGame from "./startNewGame.js";
import { startPregameTimer } from "./Timer.js";

const renderScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};

titleScreenEl.addEventListener("click", () => {
  renderScreen(titleScreenEl, mainMenuEl);
});

recordBlockButtonEl.addEventListener("click", () => {
  rankingEl.classList.remove("hidden");
  renderScreen(mainMenuEl, scoreScreenEl);
});

homeBlockButtonEl.addEventListener("click", () => {
  scoreScreenFormEl.classList.add("hidden");
  renderScreen(scoreScreenEl, mainMenuEl);
});

startBlockButtonEl.addEventListener("click", () => {
  startNewGame();
  renderScreen(mainMenuEl, pregameTimerEl);
  startPregameTimer(gameScreenEl);
});

export default renderScreen;
