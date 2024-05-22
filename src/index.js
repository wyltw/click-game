const titleScreenEl = document.querySelector(".title-screen");
const tutorialEl = document.querySelector(".tutorial");
const clickToStart = () => {
  titleScreenEl.classList.add("hidden");
  tutorialEl.classList.remove("hidden");
};
titleScreenEl.addEventListener("click", clickToStart);
