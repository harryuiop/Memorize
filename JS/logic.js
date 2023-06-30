function startGameClicked() {
    const cards = [card1, card2, card3, card4, card5, card6, card7,
                    card8, card9, card10, card11, card12, card13, card14, card15,
                    card16, card17, card18, card19, card20];
    
    for (i of cards) {
        i.style.background = "rgb(70, 63, 26)"
    }

      const duration = 1000;
      setTimeout(() => {
        for (i of cards) {
            i.style.background = "rgb(45, 148, 183)"
        }
      }, duration);
    }

    
    function getPairs(){
        
    }
    
    function givePairsAnImage(){
        
    }
    
    function onClickChangeBackground(id) {
        if (id.style.background == "rgb(45, 148, 183)") {
            id.style.background = "rgb(70, 63, 26)";
        } else {
            id.style.background = "rgb(45, 148, 183)"
        }
    }