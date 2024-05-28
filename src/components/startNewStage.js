import { state, gameScreenImgEl, scoreBoxScoreTextEl } from "./Common.js";
import { createCookie } from "./GameState.js";

const startNewStage = () => {
  state.cookieHp *= 1.5;
  ++state.initialDamage;
  state.cookie = createCookie(state.cookieHp);
  gameScreenImgEl.src = "./assets/phase1.png";
  ++scoreBoxScoreTextEl.textContent;
};

export default startNewStage;
