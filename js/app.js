// defining array of cards
let cards = ['diamond', 'diamond','anchor','anchor','bolt','bolt','cube','cube','leaf','leaf','bicycle','bicycle','bomb','bomb','paper-plane-o','paper-plane-o'];
let deck = document.getElementsByClassName('deck')[0];
let restart = document.getElementsByClassName('restart')[0];
let moves = $('.moves');
let timer, clock, matched;
let rating = [16,22,28]; //set rating
let stars = $('.fa-star');

function start(){
  clock = 0;
  matched = 0;
  $('.timer').remove();
  timer = setInterval(function(){ myTimer();}, 1000);
  let shuffledCards = shuffle(cards); // first shuffle array cards creating new array shuffledCards; (shuffled using function shuffle)
  deck.innerHTML = ''; //empty deck
  counter = 0; //set counter of moves to zero;
  moves.text(counter +' Moves'); //assign value of counter to moves displayed
  restart.addEventListener('click', start);  // add event listener to restart button
  resetRating(); //reset stars
  const setTimer = document.createElement('div');
  $(setTimer).addClass('timer');
  $(setTimer).insertBefore( $('.restart') );

  // empty deck first and create loop inserting cards from shuffled array

    for (let i = 0; i < shuffledCards.length; i++){
        const newElement = document.createElement('li');
        $(newElement).addClass('card');
        newElement.innerHTML = '<i class="fa fa-' + shuffledCards[i] + '"></i>';
        newElement.addEventListener('click', showCard);  //add event listener to all cards triggering function showing card
        deck.appendChild(newElement);
      }
  }
// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// function showing clicked card

function showCard (evt) {
    evt.target.removeEventListener('click',showCard);  //remove event listener, so the same card cannot be clicked again
    let openedCards =document.getElementsByClassName('open show');  //check which cards are opened
        $(evt.target).toggleClass('open show'); //opening card only in case it's not opened already
        counter ++;
        moves.text(counter + ' Moves');
        checkRating();  //checking current rating
        if (openedCards.length == 2){  // if two cards are opened they are checked for match
          checkMatch();

          }
      }
// checking number of moves and changes star rating
function checkRating (){
  if(counter > rating[0] && counter < rating[1]){
    stars.eq(2).removeClass('fa-star').addClass('fa-star-o');
    }
  else if (counter > rating[1] && counter <rating[2]) {
    stars.eq(1).removeClass('fa-star').addClass('fa-star-o');
  }
}
function resetRating(){
  stars.removeClass('fa-star-o').addClass('fa-star');
}

// function closing open cards
function closeCards () {
    openCards = $('.show');
    openCards.removeClass( 'show open');
    openCards[0].addEventListener('click',showCard); // add listner back to cards (not sure how to add it to both of them)
    openCards[1].addEventListener('click',showCard);
    openCards = '';
}

// function checking if the two opened cards are matching
function checkMatch () {
  openCards = $('.show');
  if(openCards[0].innerHTML == openCards[1].innerHTML){
    openCards.removeClass('show open').addClass('match');
    matched++;

    if (matched == cards.length/2){  // checking if all cards were matched
      setTimeout(function(){ finish(); }, 300); // set delay as it was finishing before showing last card
    }
  } else {
    setTimeout(function(){ closeCards(); }, 250);  // if there is no match cards will be closed with preset delay
    }
}
// function counting time from starting game

function myTimer() {
    clock += 1;
    document.getElementsByClassName('timer')[0].innerHTML = 'Time: ' + clock;
  }

// function stopping timer

function stopTimer() {
    clearInterval(timer);
}

// function creating new element and insetring it before indicated element

function createElement (elName,type,id,html,before) {
  var elName = document.createElement(type);
  elName.innerHTML = html;
  elName.id = id;
  $(elName).insertBefore( $(before) );
  }
//function closing game and showing results

function finish (){
  $(deck).remove();//remove deck
  $('.timer').remove(); //remove timer
  $('.moves').remove(); // remove Moves counter
  stopTimer(); // stop the clock

  createElement('congrats','p','congratsID','<p>CONGRATULATIONS !!!</p>'+
  '<p>You matched all cards in</p><p>'+ counter +' moves and ' + clock +
  ' seconds</p>',".restart");
  createElement('rating','p','ratingID','<p>Your rating is:</p>',".restart");
  $('.stars').insertBefore( $('.restart') );
  createElement('repeat','p','repeatID','<p>If you want to play again hit restart button</p>',".restart");

  //change function of restart button from reset to reload page

  restart.addEventListener('click', function reload ()
      {
        window.location.reload(true);
      }
    );
}

start();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
