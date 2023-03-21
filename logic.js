var cards = document.getElementById("cards")
var cardsRect = cards.getBoundingClientRect();


function nextStage(){

    cards.style.transitionDuration = '2s'
    cards.style.top = cardsRect.top + 100 + 'px';
    cards.classList.add('hide')

}