  function setupStartGame() {
    const allCardsArray = Array.from(document.getElementsByClassName("card"));
    startGameClicked(allCardsArray)
  }
  
  function startGameClicked(allCardsArray) {
    for (card in allCardsArray) {
        console.log(card);
    }
  }

function onClickChangeBackground(id) {
    if (id.style.background == "rgb(45, 148, 183)") {
        id.style.background = "rgb(70, 63, 26)";
    } else {
        id.style.background = "rgb(45, 148, 183)"
    }
}