

let sum = 0;
let cards =[];
let blackjack = false
let isalive = false
let message = ""
let message_ = document.getElementById("ele")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = document.getElementById("player");
let playerN = {
  name:"Ananya",
  chip:80
}
player.textContent = playerN.name + " : $" + playerN.chip;

function getrandomcard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1;
    return randomNumer;

}
function startgame(){

  isalive = true;
  let firstCard = getrandomcard();
  let secondCard = getrandomcard();
  sum = firstCard + secondCard;
  cards = [firstCard,secondCard]
  rendergame();

}
function rendergame(){
sumEl.textContent = "Sum : " + sum;
cardEl.textContent = "Cards: ";
for(let i =0;i<cards.length;i++){
  cardEl.textContent += cards[i] + " ";

}

if(sum<21){
      message =  "Do you want to draw a new Card"

}
else if(sum===21){
  message = "Wohooo! You got a BlackJack"
  blackjack = true
}
else{
  message = "You lost"
  isalive = false;

}
message_.textContent = message;
}

function newcard(){
  if(isalive===true && blackjack===false){
    let card = getrandomcard();
    sum+= card;
    cards.push(card);
    startgame();
  }


}
