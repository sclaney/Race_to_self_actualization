var prompt = document.getElementById('prompt');
var response = document.getElementById('response');
var button = document.getElementById('button');
document.getElementById('button').disabled = true;
var textarea = document.getElementsByTagName('textarea');

// This is the array that holds all the prompts
var prompts = ['This', 'This is the first prompt, it is not meant to really mean anything',
'This is the second prompt', 'This is the third prompt'];

// Here's the event listener that loads a new prompt when the button is clicked
// It still needs more logic to delete a prompt once it has been used once.
// It also needs to only be clickable when a round is over
button.addEventListener('click', nextPrompt);

function nextPrompt(){
  var shiftedValue = prompts.shift();
  prompts.push(shiftedValue);
  updatePrompt();
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


//This will be the logic that states that if the text in the response box is
// equal to the text in the prompt, the round will end.
// it should be able to disable the response box so you can't type in it anymore
var input = "";

$('textarea').keypress(function() {
  console.log(String.fromCharCode(event.which));
  input = input + String.fromCharCode(event.which);

  console.log(input);
  if(input === $.trim($('#prompt').html())) {
    alert("You did it!");
    document.getElementById('button').disabled = false;
    return true;
  }
});

$('textarea').keydown(function() {
  if(event.which === 8) { //delete is key code 8
    input = input.substring(0, input.length -1);
    console.log(input);
  }
});



