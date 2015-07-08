var prompt = document.getElementById('prompt');
var response = document.getElementById('response');
var button = document.getElementById('button');
document.getElementById('button').disabled = true;
var textarea = document.getElementsByTagName('textarea');
var P1Time; //This variable will hold the time it took player 1 to complete the prompt
var P2Time; //This variable will hold the time it took player 2 to complete the prompt
var P1Total; //This variable will keep track of how many rounds player 1 has won
var P2Total; //This variable will keep track of how many rounds player 2 has won


/////////////////////////////SWITCH PLAYER//////////////////////////////////////


// This is the variable that holds which player is currently playing
var whichPlayer = 'Player1';

// This function switches the player when it's called
function playerSwitch() {
  if (whichPlayer = 'Player1') {
    whichPlayer = 'Player2';
  } else {
    whichPlayer = 'Player1';
  }
}

/////////////////////////////SWITCH PLAYER//////////////////////////////////////


/////////////////////////////BUTTON CLICK///////////////////////////////////////


// This is the array that holds all the prompts
var prompts = ['This','This is the first prompt, it is not meant to really mean anything','This is the second prompt','This is the third prompt'];

// Here's the event listener that loads a new prompt when the button is clicked
// It still needs more logic to delete a prompt once it has been used once.
// It also needs to only be clickable when a round is over
button.addEventListener('click', nextPrompt);

function nextPrompt(){
  var shiftedValue = prompts.shift();
  prompts.push(shiftedValue);
  updatePrompt();
  startTimer = new Date().getTime();//Might move this later
}

function updatePrompt() {
  prompt.innerHTML = prompts[0];
  resetStuff();
}

function resetStuff() {
  $('textarea').val(' ');
  input = " ";
  document.getElementById('button').disabled = true;
}

/////////////////////////////BUTTON CLICK///////////////////////////////////////



/////////////////////////////KEYBOARD PRESS/////////////////////////////////////

//This will be the logic that states that if the text in the response box is
// equal to the text in the prompt, the round will end.
// it should be able to disable the response box so you can't type in it anymore
var input = "";

$('textarea').keypress(function() {
  console.log(String.fromCharCode(event.which));
  input = input + String.fromCharCode(event.which);

  console.log(input);
  if(input === $.trim($('#prompt').html())) {
    var endTimer = new Date().getTime();
    totalTime = ((endTimer - startTimer)/1000); //polluted the global here by taking away var
    alert("You did it! It took " + totalTime + " seconds to finish.");
    document.getElementById('button').disabled = false;
    playerSwitch();
    if (whichPlayer === 'Player1') {
      P1Time = totalTime;
    } else if (whichPlayer === 'Player2'){
      P2Time = totalTime;
      getRoundWinner(); //trying to get the round winner, not sure if this is right
    }
    return true;
  }
});

$('textarea').keydown(function() {
  if(event.which === 8) { //delete is key code 8
    input = input.substring(0, input.length -1);
    console.log(input);
  }
});

/////////////////////////////KEYBOARD PRESS/////////////////////////////////////


/////////////////////////////WIN LOGIC//////////////////////////////////////////


// This is where the win logic will go, it will compare P1Time to P2Time to determine the winner
function getRoundWinner(){
  if (P1Time < P2Time) {
    alert('Player 1 has won this round!');
    P1Total++;
  } else if (P2Time < P1Time){
    alert('Player 2 has won this round!');
    P2Total++;
  }
}

/////////////////////////////WIN LOGIC//////////////////////////////////////////


