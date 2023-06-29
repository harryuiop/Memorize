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
    if (id.style.background == "black") {
        id.style.background = "white";
    } else {
        id.style.background = "black"
    }
}