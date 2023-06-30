function startGameClicked() {

    /** ToDo:
     *  Flip the cards to show all the pairs of images 
     */

    const duration = 1000;
    setTimeout(() => {
    for (i of cards) {
        i.style.background = "rgb(45, 148, 183)"
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
    const allCards = [card1, card2, card3, card4, card5, card6, card7,
        card8, card9, card10, card11, card12, card13, card14, card15,
        card16, card17, card18, card19, card20];
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