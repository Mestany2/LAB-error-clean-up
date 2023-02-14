const startApp = () => {
    htmlStructure(); // always load first
    header();
    startSortingBtn();
    events(); // always load last
  };

  export default startApp;