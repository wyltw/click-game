import { state, rankingListEl, rankingInfoEl } from "./Common.js";

const renderRankingList = () => {
  rankingListEl.innerHTML = "";
  if (state.playerScoreList.length) {
    rankingInfoEl.classList.add("hidden");
  } else {
    rankingInfoEl.classList.remove("hidden");
  }
  const rankingItems = state.playerScoreList;
  //sort的兩個參數就是欲操作陣列的前後兩個一對元素
  const orderRankingItems = rankingItems
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  orderRankingItems.forEach((rankingItem) => {
    const newRankingItemHTML = `<li class="ranking__item"><span class="ranking__text">玩家：${rankingItem.name}</span
    ><span class="ranking__text">${rankingItem.score}個餅乾</span
    ></li>`;
    rankingListEl.insertAdjacentHTML("beforeend", newRankingItemHTML);
  });
};

export default renderRankingList;
