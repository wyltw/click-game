import { rankingListEl, resetButtonEl, state } from "./Common.js";
//既然已經建立了全局的state，那麼如同網路請求資料一樣，應該在第一時間使用來自先前的本地儲存更新state
const storedScoreList = JSON.parse(localStorage.getItem("playerScores"));
if (storedScoreList) {
  state.playerScoreList = storedScoreList;
}

resetButtonEl.addEventListener("click", () => {
  rankingListEl.innerHTML = "";
  state.playerScoreList = [];
  localStorage.clear();
});
