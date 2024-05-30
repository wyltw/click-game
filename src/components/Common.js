//selector
export const titleScreenEl = document.querySelector(".title-screen");
export const mainMenuEl = document.querySelector(".main-menu");
export const startBlockButtonEl = document.querySelector(
  ".block-button--start"
);
export const recordBlockButtonEl = document.querySelector(
  ".block-button--record"
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
export const homeBlockButtonEl = document.querySelector(".block-button--home");
export const rankingEl = document.querySelector(".ranking");
export const rankingListTitleEl = document.querySelector(".ranking__title");
export const rankingListEl = document.querySelector(".ranking__list");
export const rankingInfoEl = document.querySelector(".ranking__info");
export const scoreScreenFormEl = document.querySelector(".score-screen__form");
export const scoreScreenNameInputEl = document.querySelector(
  ".score-screen__input--name"
);

export const invalidNameTextEl = document.querySelector(".invalid-text--name");
export const submitButtonEl = document.querySelector(".button--submit");
export const resetButtonEl = document.querySelector(".button--reset");

// constants

export const COOKIE_HP = 5;
export const INITIAL_DAMAGE = 1;
export const INITIAL_PREGAME_TIMER = Number(pregameTimerEl.textContent);
export const INITIAL_INGAME_TIMER = Number(scoreBoxTimerTextEl.textContent);
export const INITIAL_SCORE = Number(scoreBoxScoreTextEl.textContent);

// state

export const state = {
  cookieHp: 0,
  initialDamage: 0,
  playerScoreList: [],
  cookie: {},
};
