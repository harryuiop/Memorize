allCards = []
for (i = 1; i < 21; i++) {
    let card = document.getElementById('card' + i);
    allCards.push(card);
}

function startGameClicked() {

    let cardPairArray = getPairs()
    cardPairArrayWithImg = givePairsAnImage(cardPairArray)

    for (card of allCards) {
        flipCardUp(card)
    }

    const duration = 1000;
    setTimeout(() => {
    for (card of allCards) {
          flipCardDown(card)
        }
    }, duration);

    /**
     *  Ideas:
     *  - run in a while loop that every found pair gets added to a 
     *    found array, and then when the length of it is 20, game ends.
    */

}

function getPairs(){
    let usedCards = []
    let cardPairs = []
    let temporaryHolder = []

    const random = {
        integer: () => Math.floor(Math.random() * 20) + 1,
    };    
    
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

let pairHolder = []
function selectionLogic(card) {
    if (pairHolder.length === 0) {
        pairHolder.push(card)
        flipCardUp(card)
    } else {
        if (findCardsImage(card) === findCardsImage(pairHolder[0])) {
            flipCardUp(card)
            pairHolder = []
        } else {
            flipCardDown(pairHolder[0])
            flipCardDown(card)
            pairHolder = []
        }
    }
}

function flipCardUp(card) {
    card.style.background = "rgb(70, 63, 26)"
    card.style.display = "flex"; // Set display to flex
    card.style.justifyContent = "center"; // Center horizontally
    card.style.alignItems = "center"; // Center vertically
    card.style.color = "white";
    card.style.fontSize = "40px";

    for (pair of cardPairArrayWithImg) {
        let newHTMLContent = pair[2];

        for (cards of pair) {
            if (card === cards) {
            cards.innerHTML = newHTMLContent;
            }
        }
    }
}

function flipCardDown(card) {
    card.style.background = "rgb(45, 148, 183)"
    card.innerHTML = ""; 
}

function scoreUpdater() {
    let playersScore = 0
    
}

function findCardsImage(card) {
    for (pair of cardPairArrayWithImg) {
        let newHTMLContent = pair[2];
        for (cards of pair) {
            if (card === cards) {
                return newHTMLContent
            }
        }
    }
}