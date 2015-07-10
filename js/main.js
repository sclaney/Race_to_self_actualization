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
button.click(nextPrompt); //clicking the buttons sets off a chain reaction of functions

function nextPrompt(){ //this function removes the first prompt in the array and puts it in back
  var shiftedValue = prompts.shift();
  prompts.push(shiftedValue);
  updatePrompt();
  resetStartTime();
  if (whichPlayer === 'Player1') { //this sets the new colors based on which players turn it is
    player1Select.css('background-color', 'E91E63');
    player2Select.css('background-color', '9E9E9E');
  } else if (whichPlayer === 'Player2') {
    player2Select.css('background-color', 'E91E63');
    player1Select.css('background-color', '9E9E9E');
  }
}

function resetStartTime() { //this is the function that starts the timer
  startTimer = new Date().getTime();
}

function updatePrompt() { //this displays the first prompt in the array
  prompt.html(prompts[0]);
  resetStuff();
}

function resetStuff() { //this resets the game for the next round
  textarea.val('');
  input = "";
  button.prop('disabled', true);
  button.css('background-color', '#9E9E9E');
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
    button.prop('disabled', false);
    button.css('background-color', '#2196F3'); //then the button becomes clickable to start the next round
    if (whichPlayer === 'Player1') { //then we say if the player is player 1
      P1Time = totalTime; //add this total time to the variable for their time
    } else if (whichPlayer === 'Player2'){ //and if it's player 2
      P2Time = totalTime; //add the time to the variable that holds player 2's time
    }
      playerSwitch(); //then we switch the player turns WHICH WE DO AFTER THE IF STATEMENT
    return true;
  }
});

textarea.keydown(function() { //this makes it so hitting the delete button actually deletes the input string
  if(event.which === 8) { //delete is key code 8
    input = input.substring(0, input.length -1);
    console.log(input);
  }
  if (event.which === 13) { //this makes it so pressing enter starts the next round and nothing else
    nextPrompt();
    return false;
  }
  if (event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40) {
    return false; //this makes it so you can't use your arrow keys to move around the textarea
  }
});

/////////////////////////////KEYBOARD PRESS/////////////////////////////////////


/////////////////////////////WIN LOGIC//////////////////////////////////////////


// This will compare P1Time to P2Time to determine the winner
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
  colorSwitch(); //and then run through a color switch function to set the scoreboard
}

function getGameWinner() { //this determines if someone has won the round, and only fires after player 2's turn
  if (P1Total === 5) {
    alert('GAME OVER! PLAYER 1 WINS!!!!');
    button.prop('disabled', true);
    button.css('background-color', '#9E9E9E'); //this makes it so you can press the button to start next round
  } else if (P2Total === 5) {
    alert('GAME OVER! PLAYER 2 WINS!!!!');
    button.prop('disabled', true);
    button.css('background-color', '#9E9E9E');
  }
}

//here's the functionality for the reset button
resetButton.click(resetGame);

function resetGame() { //this resets all the colors, inputs, scores, and prompts, but not the prompt array for some reason
  textarea.val('');
  input = "";
  button.prop('disabled', false);
  P1Time = 0;
  P2Time = 0;
  P1Total = 0;
  P2Total = 0;
  button.click(nextPrompt);
  button.css('background-color', '#2196F3');
  prompt.html(startPrompt);
  prompts=['This','First prompt','Second prompt','This is the third prompt'];
  T1R1.css('background-color', '#9E9E9E');
  T1R2.css('background-color', '#9E9E9E');
  T1R3.css('background-color', '#9E9E9E');
  T1R4.css('background-color', '#9E9E9E');
  T1R5.css('background-color', '#9E9E9E');
  T2R1.css('background-color', '#9E9E9E');
  T2R2.css('background-color', '#9E9E9E');
  T2R3.css('background-color', '#9E9E9E');
  T2R4.css('background-color', '#9E9E9E');
  T2R5.css('background-color', '#9E9E9E');
  player1Select.css('background-color', '#E91E63');
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

function colorSwitch() { //this is the function that checks the total score and updates the score board
  if (P1Total === 1) {
    T1R1.css('background-color', '#FF5722');
  }
  if (P1Total === 2) {
    T1R2.css('background-color', '#FFEB3B');
  }
  if (P1Total === 3) {
    T1R3.css('background-color', '#CDDC39');
  }
  if (P1Total === 4) {
    T1R4.css('background-color', '#4CAF50');
  }
  if (P1Total === 5) {
    T1R5.css('background-color', '#03A9F4');
  }
  if (P2Total === 1) {
    T2R1.css('background-color', '#FF5722');
  }
  if (P2Total === 2) {
    T2R2.css('background-color', '#FFEB3B');
  }
  if (P2Total === 3) {
    T2R3.css('background-color', '#CDDC39');
  }
  if (P2Total === 4) {
    T2R4.css('background-color', '#4CAF50');
  }
  if (P2Total === 5) {
    T2R5.css('background-color', '#03A9F4');
  }
}





////////////////////////////COLOR CHANGE////////////////////////////////////////
