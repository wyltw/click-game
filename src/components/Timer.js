import {
  scoreBoxTimerTextEl,
  pregameTimerEl,
  gameScreenEl,
  scoreScreenEl,
} from "./Common.js";
import { renderScreen, showRankingEl } from "./Screens.js";

const startIngameTimer = () => {
  //改成guard clause了
  const ingameTimerInterval = setInterval(() => {
    if (scoreBoxTimerTextEl.textContent == 4) {
      //在值是4秒的時候加上
      scoreBoxTimerTextEl.classList.add("timer-warning");
    }
    if (scoreBoxTimerTextEl.textContent > 0) {
      --scoreBoxTimerTextEl.textContent;
      return;
    }
    clearInterval(ingameTimerInterval);
    scoreBoxTimerTextEl.classList.remove("timer-warning");
    renderScreen(gameScreenEl, scoreScreenEl);
    showRankingEl(false);
    //只負責遊戲內倒數
  }, 1000);
};

export const startPregameTimer = () => {
  const pregameTimerInterval = setInterval(() => {
    if (pregameTimerEl.textContent > 1) {
      --pregameTimerEl.textContent;
      return;
    }
    renderScreen(pregameTimerEl, gameScreenEl);
    clearInterval(pregameTimerInterval);
    startIngameTimer();
  }, 1000);
};
