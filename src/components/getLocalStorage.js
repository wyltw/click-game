import { state } from "./Common.js";

const getLocalStorage = () => {
  state.playerScoreList = JSON.parse(localStorage.getItem("playerScores"));
};

export default getLocalStorage;
