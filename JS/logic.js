allCards = []
for (i = 1; i < 21; i++) {
    let card = document.getElementById('card' + i);
    allCards.push(card);
}

const random = {
    integer: () => Math.floor(Math.random() * 20) + 1,
  };

function startGameClicked() {


    /** ToDo:
     *  Flip the cards to show all the pairs of images 
     */

    const duration = 1000;
    setTimeout(() => {
    for (i of allCards) {
        i.style.background = "rgb(45, 148, 183)"
        console.log(i)
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

getPairs()
function getPairs(){

    console.log(random.integer())
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