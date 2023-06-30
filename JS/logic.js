allCards = []
for (i = 1; i < 21; i++) {
    let card = document.getElementById('card' + i);
    allCards.push(card);
}

const random = {
    integer: () => Math.floor(Math.random() * 20) + 1,
};

function startGameClicked() {

    let cardPairArray = getPairs()
    let cardPairArrayWithImg = givePairsAnImage(cardPairArray)

    for (card of allCards) {
        card.style.background = "rgb(96, 73, 44)"
        card.style.display = "flex"; // Set display to flex
        card.style.justifyContent = "center"; // Center horizontally
        card.style.alignItems = "center"; // Center vertically
        card.style.colour
    }

    for (pair of cardPairArrayWithImg) {
        let newHTMLContent = pair[2];

        for (card of pair) {
            card.innerHTML = newHTMLContent;
        }
    }


    /** ToDo:
     *  Flip the cards to show all the pairs of images 
     */

    const duration = 1000;
    setTimeout(() => {
    for (i of allCards) {
        i.style.background = "rgb(45, 148, 183)"

    for (pair of cardPairArrayWithImg) {
        let newHTMLContent = "";
        for (card of pair) {
            card.innerHTML = newHTMLContent
            }
        }
    }
}, duration);

    /**
     *  user will click one card, it will stay turned, if the next
     *  card they pick is wrong then flip them both back and deduct 
     *  from score.
     * 
     *  Ideas:
     *  - run in a while loop that every found pair gets added to a 
     *    found array, and then when the length of it is 20, game ends.
    */

}

function getPairs(){
    let usedCards = []
    let cardPairs = []
    let temporaryHolder = []
    
    while (cardPairs.length < 10) { 
        
        let randomValue = random.integer()
        
        if (!usedCards.includes(randomValue) || temporaryHolder.length == 2) { // NOTE: god awful performance
            
            if (temporaryHolder.length == 2) {
                cardPairs.push(temporaryHolder)
                temporaryHolder = []
                
            } else {
                usedCards.push(randomValue)
                temporaryHolder.push(allCards[randomValue-1])
            }
        }
    }
    return cardPairs
}
    
function givePairsAnImage(PairsArray){
    const imageBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    for (i of PairsArray) {
        let imgToAdd = imageBank.shift()
        i.push(imgToAdd)
    }
    return PairsArray
}
  
function onClickChangeBackground(id) {

    if (id.style.background == "rgb(45, 148, 183)") {
        id.style.background = "rgb(70, 63, 26)";
    } else {
        id.style.background = "rgb(45, 148, 183)"
    }

}