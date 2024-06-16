import { state } from "./Common.js";

const savePlayerScore = (newPlayerName, newPlayerScore) => {
  const playerScore = { name: newPlayerName, score: newPlayerScore };
  const newPlayerScoreList = [...state.playerScoreList, playerScore];
  if (newPlayerScoreList.length > state.playerScoreList.length) {
    localStorage.setItem("playerScores", JSON.stringify(newPlayerScoreList));
    //先前忘記在送出的同時一同更新全局state
    state.playerScoreList = newPlayerScoreList;
  }
};

export default savePlayerScore;
