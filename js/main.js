var prompt = $('#prompt');
var response = $('#response');
var button = $('#button');
var resetButton = $('#resetButton');
button.prop('disabled', false);
var textarea = $('textarea');
var P1Time; //This variable will hold the time it took player 1 to complete the prompt
var P2Time; //This variable will hold the time it took player 2 to complete the prompt
var P1Total = 0; //This variable will keep track of how many rounds player 1 has won
var P2Total = 0; //This variable will keep track of how many rounds player 2 has won
var startPrompt = 'Click the button to start the game';


/////////////////////////////SWITCH PLAYER//////////////////////////////////////


// This is the variable that holds which player is currently playing
var whichPlayer = 'Player1';

// This function switches the player when it's called
function playerSwitch() {
  if (whichPlayer === 'Player1') {
    whichPlayer = 'Player2';
  } else if (whichPlayer === 'Player2') {
    getRoundWinner();
    getGameWinner();
    whichPlayer = 'Player1';
  }
}

/////////////////////////////SWITCH PLAYER//////////////////////////////////////


/////////////////////////////BUTTON CLICK///////////////////////////////////////


// This is the array that holds all the prompts
var prompts=['This','First prompt','Second prompt','This is the third prompt'];

// Here's the event listener that loads a new prompt when the button is clicked
// It still needs more logic to delete a prompt once it has been used once.
// It also needs to only be clickable when a round is over
button.click(nextPrompt);

function nextPrompt(){
  var shiftedValue = prompts.shift();
  prompts.push(shiftedValue);
  updatePrompt();
  resetStartTime();
  if (whichPlayer === 'Player1') {
    player1Select.css('background-color', '303F9F');
    player2Select.css('background-color', '9E9E9E');
  } else if (whichPlayer === 'Player2') {
    player2Select.css('background-color', '303F9F');
    player1Select.css('background-color', '9E9E9E');
  }
}

function resetStartTime() {
  startTimer = new Date().getTime();
}

function updatePrompt() {
  prompt.html(prompts[0]);
  resetStuff();
}

function resetStuff() {
  textarea.val('');
  input = "";
  button.prop('disabled', true);
}



/////////////////////////////BUTTON CLICK///////////////////////////////////////



/////////////////////////////KEYBOARD PRESS/////////////////////////////////////

//This will be the logic that states that if the text in the response box is
// equal to the text in the prompt, the round will end.
// it should be able to disable the response box so you can't type in it anymore
var input = "";

textarea.keypress(function() {  //when there is a keypress in the textarea
  console.log(String.fromCharCode(event.which)); //the console log will show what's pressed
  input = input + String.fromCharCode(event.which); //and the computer takes that kepress and adds it into input

  console.log(input);
  if(input === $.trim(prompt.html())) { //if the users input is equal to the prompt (minus the whitespace)
    var endTimer = new Date().getTime(); //then the timer stops
    totalTime = ((endTimer - startTimer)/1000); //and we take the end time and subtract is from start time and divide it by 1000 to get time in seconds
    alert("You did it! It took " + totalTime + " seconds to finish."); //then an alert tells you you are finished and shows you your time
    button.prop('disabled', false); //then the button becomes clickable to start the next round
    if (whichPlayer === 'Player1') { //then we say if the player is player 1
      P1Time = totalTime; //add this total time to the variable for their time
    } else if (whichPlayer === 'Player2'){ //and if it's player 2
      P2Time = totalTime; //add the time to the variable that holds player 2's time
    }
      playerSwitch(); //then we switch the player turns WHICH WE DO AFTER THE IF STATEMENT
    return true;
  }
});

textarea.keydown(function() {
  if(event.which === 8) { //delete is key code 8
    input = input.substring(0, input.length -1);
    console.log(input);
  }
});

/////////////////////////////KEYBOARD PRESS/////////////////////////////////////


/////////////////////////////WIN LOGIC//////////////////////////////////////////


// This is where the win logic will go, it will compare P1Time to P2Time to determine the winner
function getRoundWinner(){
  console.log("Player one's time: " + P1Time);
  console.log("Player two time: " + P2Time);
  if (P1Time < P2Time) {
    alert('Player 1 has won this round!');
    P1Total += 1;
  } else if (P2Time < P1Time){
    alert('Player 2 has won this round!');
    P2Total += 1;
  }
  colorSwitch();
}

function getGameWinner() {
  if (P1Total === 5) {
    alert('GAME OVER! PLAYER 1 WINS!!!!');
    button.prop('disabled', true);
  } else if (P2Total === 5) {
    alert('GAME OVER! PLAYER 2 WINS!!!!');
    button.prop('disabled', true);
  }
}

resetButton.click(resetGame);

function resetGame() {
  textarea.val('');
  input = "";
  button.prop('disabled', false);
  P1Time = 0;
  P2Time = 0;
  P1Total = 0;
  P2Total = 0;
  button.click(nextPrompt);
  prompt.html(startPrompt);
  var prompts=['This','First prompt','Second prompt','This is the third prompt'];
  T1R1.css('background-color', '#9E9E9E');
  T1R1.css('background-color', '#9E9E9E');
  T1R1.css('background-color', '#9E9E9E');
  T1R1.css('background-color', '#9E9E9E');
  T1R1.css('background-color', '#9E9E9E');
  T2R1.css('background-color', '#9E9E9E');
  T2R2.css('background-color', '#9E9E9E');
  T2R3.css('background-color', '#9E9E9E');
  T2R4.css('background-color', '#9E9E9E');
  T2R5.css('background-color', '#9E9E9E');
  player1Select.css('background-color', '#303F9F');
  player2Select.css('background-color', '#9E9E9E');
}

/////////////////////////////WIN LOGIC//////////////////////////////////////////

////////////////////////////COLOR CHANGE////////////////////////////////////////

var T1R1 = $('#T1R1');
var T1R2 = $('#T1R2');
var T1R3 = $('#T1R3');
var T1R4 = $('#T1R4');
var T1R5 = $('#T1R5');

var T2R1 = $('#T2R1');
var T2R2 = $('#T2R2');
var T2R3 = $('#T2R3');
var T2R4 = $('#T2R4');
var T2R5 = $('#T2R5');

var player1Select = $('#player1Select');
var player2Select = $('#player2Select');

function colorSwitch() {
  if (P1Total === 1) {
    T1R1.css('background-color', '#FF3A2D');
  }
  if (P1Total === 2) {
    T1R2.css('background-color', '#FF2D55');
  }
  if (P1Total === 3) {
    T1R3.css('background-color', '#FFDB4C');
  }
  if (P1Total === 4) {
    T1R4.css('background-color', '#4CD964');
  }
  if (P1Total === 5) {
    T1R5.css('background-color', '#007AFF');
  }
  if (P2Total === 1) {
    T2R1.css('background-color', '#FF3A2D');
  }
  if (P2Total === 2) {
    T2R2.css('background-color', '#FF2D55');
  }
  if (P2Total === 3) {
    T2R3.css('background-color', '#FFDB4C');
  }
  if (P2Total === 4) {
    T2R4.css('background-color', '#4CD964');
  }
  if (P2Total === 5) {
    T2R5.css('background-color', '#007AFF');
  }
}





////////////////////////////COLOR CHANGE////////////////////////////////////////
