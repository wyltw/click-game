import { state } from "./Common.js";

const savePlayerScore = (name, score) => {
  const playerScore = {};
  playerScore.name = name;
  playerScore.score = score;
  const newPlayerScoreList = [...state.playerScoreList, playerScore];
  if (newPlayerScoreList.length > state.playerScoreList.length) {
    localStorage.setItem("playerScores", JSON.stringify(newPlayerScoreList));
    //先前忘記在送出的同時一同更新全局state
    state.playerScoreList = [...state.playerScoreList, playerScore];
  }
};

export default savePlayerScore;