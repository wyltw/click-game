//selector

const titleScreenEl = document.querySelector(".title-screen");
const mainMenuEl = document.querySelector(".main-menu");
const mainMenuStartBtnEl = document.querySelector(".main-menu__btn--start");
const gameScreenEl = document.querySelector(".game-screen");
const gameScreenImgEl = document.querySelector(".game-screen__img");
const pregameTimerEl = document.querySelector(".pregame-timer");

//transition

const transitionScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};

titleScreenEl.addEventListener("click", () => {
  transitionScreen(titleScreenEl, mainMenuEl);
});

mainMenuStartBtnEl.addEventListener("click", () => {
  transitionScreen(mainMenuEl, pregameTimerEl);
  startPregameTimer();
});

const startPregameTimer = () => {
  const pregameTimerInterval = setInterval(() => {
    if (pregameTimerEl.textContent > 1) {
      --pregameTimerEl.textContent;
    } else {
      pregameTimerEl.classList.add("hidden");
      gameScreenEl.classList.remove("hidden");
      clearInterval(pregameTimerInterval);
      return;
    }
  }, 1000);
};
