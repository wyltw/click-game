import {
  scoreBoxScoreTextEl,
  scoreScreenFormEl,
  scoreScreenNameInputEl,
  invalidNameTextEl,
  state,
} from "./Common.js";

import { showInvalidTnfo } from "./Error.js";

const savePlayerScore = (name, score) => {
  //guard clauses
  if (!scoreScreenNameInputEl.value.trim().length) {
    showInvalidTnfo(invalidNameTextEl, "請為自己想一個好名字！");
    return;
  }
  if (scoreScreenNameInputEl.value.length > 10) {
    showInvalidTnfo(invalidNameTextEl, "太...太長了！");
    return;
  }
  const playerScore = {};
  playerScore.name = name;
  playerScore.score = score;
  state.playerScoreList.push(playerScore);
  localStorage.setItem("playerScores", JSON.stringify(state.playerScoreList));
};

scoreScreenFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  savePlayerScore(
    scoreScreenNameInputEl.value,
    scoreBoxScoreTextEl.textContent
  );
});
