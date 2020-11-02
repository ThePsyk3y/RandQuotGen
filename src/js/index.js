import '../scss/style.scss';
import APIController from './APIController';
import UIController from './UIController';

const Controller = (function () {
  function getQuoteFromAPI() {
    APIController.fetchFromServer()
      .then((quoData) => {
        const quotNum = Math.floor(Math.random() * 100);
        return quoData[quotNum];
      })
      .then((quoteData) => {
        UIController(quoteData.text, quoteData.author);
      });
  }
  const setupEventListeners = function () {
    document
      .querySelector('.quote-change')
      .addEventListener('click', getQuoteFromAPI);
  };
  return {
    init() {
      getQuoteFromAPI();
      setupEventListeners();
    },
  };
})(APIController, UIController);

Controller.init();
