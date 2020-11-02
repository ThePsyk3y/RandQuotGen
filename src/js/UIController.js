/* const UIController = function () {}; */

export default function UIController(text, author) {
  const quoteTxt = `"${text}"`;
  const quoteAuth = `~&nbsp;${author}`;
  document.getElementById('quote-txt').innerHTML = quoteTxt;
  document.getElementById('quote-auth').innerHTML = quoteAuth;
}
