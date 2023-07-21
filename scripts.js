// TODO: create a handler
window.addEventListener("load", function () {
const searchForm = document.getElementById("searchForm");
//   const submitBtn = document.getElementById("submitBtn");
let actions = {
  google: "https://google.com/search",
  duckDuckGo: "https://duckduckgo.com/",
  bing: "https://www.bing.com/search",
  ask: "https://www.ask.com/web",
};


  searchForm.addEventListener("submit", function (e) {
    let searchEngine = document.querySelector("input[name=engine]:checked");
    let input = document.getElementById("usrInput");
   


    console.log("Im running!");
    console.log(actions[searchEngine.value]);
  
    searchForm.setAttribute("action", actions[searchEngine.value] + '?q=' + input.value);
    searchForm['action'].submit();
  
    
    e.preventDefault();
  });


});

