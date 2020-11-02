const APIController = (function () {
  return {
    async fetchFromServer() {
      try {
        const res = await fetch('https://type.fit/api/quotes');
        const quoData = res.json();
        return quoData;
      } catch (error) {
        console.log(`Error in Fetching Data \n ${error}`);
      }
    },
  };
})();

export default APIController;
