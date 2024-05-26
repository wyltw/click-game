import { startPregameTimer } from "./Timer.js";

//selector

export const titleScreenEl = document.querySelector(".title-screen");
export const mainMenuEl = document.querySelector(".main-menu");
export const mainMenuStartBtnEl = document.querySelector(
  ".main-menu__btn--start"
);
export const mainMenuRecordBtnEl = document.querySelector(
  ".main-menu__btn--record"
);
export const gameScreenEl = document.querySelector(".game-screen");
export const gameScreenImgEl = document.querySelector(".game-screen__img");
export const pregameTimerEl = document.querySelector(".pregame-timer");
export const scoreBoxScoreTextEl = document.querySelector(
  ".score-box__text--score"
);
export const scoreBoxTimerTextEl = document.querySelector(
  ".score-box__text--timer"
);
export const scoreScreenEl = document.querySelector(".score-screen");
export const scoreScreenHomeBtnEL = document.querySelector(
  ".score-screen__home-button"
);

export const scoreScreenFormEl = document.querySelector(".score-screen__form");

// constants

export const COOKIE_HP = 5;
export const iNITIAL_DAMAGE = 1;
export const iNITIAL_PREGAME_TIMER = Number(pregameTimerEl.textContent);
export const iNITIAL_INGAME_TIMER = Number(scoreBoxTimerTextEl.textContent);
export const INITAIL_SCORE = Number(scoreScreenEl.textContent);

//transition

export const transitionScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};

titleScreenEl.addEventListener("click", () => {
  transitionScreen(titleScreenEl, mainMenuEl);
});

mainMenuStartBtnEl.addEventListener("click", () => {
  transitionScreen(mainMenuEl, pregameTimerEl);
  startPregameTimer(gameScreenEl);
});

mainMenuRecordBtnEl.addEventListener("click", () => {
  transitionScreen(mainMenuEl, scoreScreenEl);
});

scoreScreenHomeBtnEL.addEventListener("click", () => {
  transitionScreen(scoreScreenEl, mainMenuEl);
});
