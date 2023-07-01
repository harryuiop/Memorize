let allCards = []
let started = false
let cardPairArrayWithImg = []
let playerScore = 0

for (i = 1; i < 21; i++) {
    let card = document.getElementById('card' + i);
    allCards.push(card);
}

function startGameClicked() {
    if (started === false) {
        resetScore()
        let cardPairArray = getPairs()
        cardPairArrayWithImg = givePairsAnImage(cardPairArray)
        
        for (card of allCards) {
            flipCardUp(card)
        }
        
        const duration = 5000;
        setTimeout(() => {
            for (card of allCards) {
                flipCardDown(card)
            }
        }, duration);
        setTimeout(() => {
            for (card of allCards) {
                started = true
            }
        }, duration);
    }
}

function resetGameClicked() {
    started = false
    resetScore()
    for (card of allCards) {
        flipCardDown(card)
    }
    const durationd = 1000;
    setTimeout(() => {
        startGameClicked()
    }, durationd);
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

    if (pairHolder.length > 2) {
        pairHolder = []
    }

    else if (started === true && pairHolder.length <= 2) {

        if (pairHolder.length === 0 && !(card.style.background == "rgb(0, 128, 0)") && !(card === pairHolder[0])) {
            pairHolder.push(card)
            flipCardUp(card)

        } else {

            if (findCardsImage(card) === findCardsImage(pairHolder[0]) && !(card === pairHolder[0])) {
                flipCardUp(card)
                card.style.background = "rgb(0, 128, 0)"
                pairHolder[0].style.background = "rgb(0, 128, 0)"
                pairHolder = []
                increaseScore()

            } else if (!(card.style.background == ("rgb(0, 128, 0)")) && !(card === pairHolder[0])) {
                flipCardUp(card)
                card.style.background = "red"
                decreaseScore()
                if (pairHolder.length != 0) {
                    pairHolder[0].style.background = "red"
                    const durations = 400;

                    setTimeout(() => {
                        flipCardDown(pairHolder[0])
                        flipCardDown(card)
                        pairHolder = []
                    }, durations);
                }
            }
        }
    }
}

function flipCardUp(card) {
    const computedStyle = getComputedStyle(card);
    const backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor !== "rgb(0, 128, 0)" && backgroundColor !== "rgb(255, 0, 0)") {
        card.style.background = "rgb(70, 63, 26)";
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
}


function flipCardDown(card) {
    card.style.background = "rgb(45, 148, 183)"
    card.innerHTML = ""; 
}

function increaseScore() {
    playerScore += 10
    let scoreCard = document.getElementById("score")
    score.innerHTML = "Score: " + playerScore
}

function decreaseScore() {
    if (playerScore > 1) {
        playerScore -= 1
    }
    let scoreCard = document.getElementById("score")
    score.innerHTML = "Score: " + playerScore
}

function resetScore(){
    playerScore = 0
    score.innerHTML = "Score: " + playerScore
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