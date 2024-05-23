const titleScreenEl = document.querySelector(".title-screen");
const mainMenuEl = document.querySelector(".main-menu");
const mainMenuStartBtnEl = document.querySelector(".main-menu__btn--start");
const gameScreenEl = document.querySelector(".game-screen");
const transitionScreen = (hideEl, showEl) => {
  hideEl.classList.add("hidden");
  showEl.classList.remove("hidden");
};
titleScreenEl.addEventListener("click", () => {
  transitionScreen(titleScreenEl, mainMenuEl);
});

mainMenuStartBtnEl.addEventListener("click", () => {
  transitionScreen(mainMenuEl, gameScreenEl);
});
