var prompt = document.getElementById('prompt');
var response = document.getElementById('response');
var button = document.getElementById('button');

// This is the array that holds all the prompts
var prompts = ['This is the first prompt, it is not meant to really mean anything',
'This is the second prompt', 'This is the third prompt'];

// Here's the event listener that loads a new prompt when the button is clicked
// It still needs more logic to delete a prompt once it has been used once.
// It also needs to only be clickable when a round is over
button.addEventListener('click', nextPrompt);

function nextPrompt(){  
  prompts.shift();
  updatePrompt();
}

function updatePrompt() {
  prompt.html(prompts[0]);
}


//This will be the logic that states that if the text in the response box is
// equal to the text in the prompt, the round will end.
// it should be able to disable the response box so you can't type in it anymore
if (response.innerHTML === prompt) {
  prompt.innerHTML = 'You did it!';
}
