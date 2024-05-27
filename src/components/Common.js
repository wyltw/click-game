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
export const scoreScreenFormEl = document.querySelector(".score-screen__form");
export const scoreScreenNameInputEl = document.querySelector(
  ".score-screen__input--name"
);

export const invalidNameTextEl = document.querySelector(".invalid-text--name");

export const scoreScreenSubmitButtonEl = document.querySelector(
  ".core-screen__submit-button"
);

// constants

export const COOKIE_HP = 5;
export const INITIAL_DAMAGE = 1;
export const INITIAL_PREGAME_TIMER = Number(pregameTimerEl.textContent);
export const INITIAL_INGAME_TIMER = Number(scoreBoxTimerTextEl.textContent);
export const INITIAL_SCORE = Number(scoreBoxScoreTextEl.textContent);

//transition

export const transitionScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};

titleScreenEl.addEventListener("click", () => {
  transitionScreen(titleScreenEl, mainMenuEl);
});

recordBlockButtonEl.addEventListener("click", () => {
  rankingEl.classList.remove("hidden");
  transitionScreen(mainMenuEl, scoreScreenEl);
});

homeBlockButtonEl.addEventListener("click", () => {
  scoreScreenFormEl.classList.add("hidden");
  transitionScreen(scoreScreenEl, mainMenuEl);
});

scoreScreenFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  //guard clauses
  if (!scoreScreenNameInputEl.value.trim().length) {
    invalidNameTextEl.textContent = "請為自己想一個好名字！";
    setTimeout(() => {
      invalidNameTextEl.textContent = "";
    }, 2000);
    return;
  }
  if (scoreScreenNameInputEl.value.length > 10) {
    invalidNameTextEl.textContent = "太...太長了！";
    setTimeout(() => {
      invalidNameTextEl.textContent = "";
    }, 2000);
    return;
  }
  invalidNameTextEl.textContent = "";
});

//將開始遊戲的按鈕的事件移動到遊戲邏輯中以利遊戲狀態重置
