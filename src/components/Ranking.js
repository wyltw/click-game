import { state, rankingListEl, rankingInfoEl } from "./Common.js";

const renderRankingList = () => {
  rankingListEl.innerHTML = "";
  if (state.playerScoreList.length) {
    rankingInfoEl.classList.add("hidden");
  } else {
    rankingInfoEl.classList.remove("hidden");
  }
  const rankingItems = state.playerScoreList;
  rankingItems.forEach((rankingItem) => {
    const newRankingItemHTML = `<li class="ranking__item"><span class="ranking__text">${rankingItem.name}</span
    ><span class="ranking__text">${rankingItem.score}</span
    ></li>`;
    rankingListEl.insertAdjacentHTML("beforeend", newRankingItemHTML);
  });
};

export default renderRankingList;
