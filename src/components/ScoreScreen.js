import {
  scoreBoxScoreTextEl,
  scoreScreenFormEl,
  scoreScreenNameInputEl,
  invalidNameTextEl,
  state,
} from "./Common.js";

import { showInvalidTnfo } from "./Error.js";
import { showRankingEl } from "./Screens.js";
import renderRankingList from "./Ranking.js";
import savePlayerScore from "./savePlayerScore.js";

const handleSubmit = (event) => {
  event.preventDefault();
  //guard clauses
  if (!scoreScreenNameInputEl.value.trim().length) {
    showInvalidTnfo(invalidNameTextEl, "請為自己想一個好名字！");
    return;
  }
  if (scoreScreenNameInputEl.value.length > 10) {
    showInvalidTnfo(invalidNameTextEl, "太...太長了！");
    return;
  }

  if (newPlayerScoreList.length > state.playerScoreList.length) {
    savePlayerScore(
      scoreScreenNameInputEl.value,
      scoreBoxScoreTextEl.textContent
    );
    showRankingEl();
    renderRankingList();
  }
};

scoreScreenFormEl.addEventListener("submit", handleSubmit);
