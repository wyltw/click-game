export const showInvalidTnfo = (invalidInfoEl, text) => {
  invalidInfoEl.textContent = text;
  setTimeout(() => {
    invalidInfoEl.textContent = "";
  }, 2000);
};
