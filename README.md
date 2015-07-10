###Race to Self-Actualization!

##Description
- This is a game that will allow two people to face off in a typing challange. 
- They will take turns re-typing prompts that they are presented with exactly how they are presented.
- Whichever player has a faster time in a round will win that round.
- When a player has won five rounds, the game is over.
- If there is time, the game will be styled to reflect climbing up Maslow's heirarchy of needs until they reach self-actualization.

##User Stories
- As a player, I want to have an input box to type the prompted sentence
- As a player, I want different prompts than my competitor, but I want the prompts to all be the same character length
- As a player, I want a button that starts the next round and loads a new prompt
- As a player, I want a reset button to be able to start a new game once one is over
- As a player, I want the computer to time my turns and log it
- As a player, I want the timer to start as soon as the round starts
- As a player, I want the timer to stop as soon as my input matches the prompt
- As a player, I want the computer to compare my time to another players time and determine a winner
- As a player, I want the game to stop once someone has won 5 rounds
- As a player, I want the button to only be clickable when a round is not taking place, and I want it to be grayed out while it's un-clickable.

##Icebox features
- As a player, I want to have a pyramid that logs which level of Maslow's heirarchy of needs I'm at until I reach self-actualization
- As a player, I want to be able to replace the player 1 and player 2 tags with different names
- As a player, I want the computer to calculate my avergae typing speed for each round and in total
- As a player, I want the name of whoever's turn it is to be highligted so I know whose turn it is
- As a psych-nerd, I want information on each level of the pyramid to learn more about the heirarchy
- As a psych-nerd, I want all the prompts to be relevant to the level of needs I'm trying to fulfill

##Technologies
- Used HTML and CSS to make and style the webpage and create the necessary buttons
- Used Javascript for logic that involves switching players, switching prompts, logging scores, timing how long turns take, and more.
- Used jQuery mostly for DOM manipulation.

##Design
- Referenced Google's material design page for the colors, direction on the shaddowing effects, and direction on the placement on elements on the page.

##Get Started
- To begin playing, just head over to this url
- Hit the start next round button to start the game
- Have player one type the prompt exactly as displayed
- After player 2's turn, the computer will determine who had the faster typing speed that round and give a point to the winner
- once someone has won five rounds, the game will end

##Next Steps
- I wasn't able to make it so the textarea was selected as soon as the next prompt was loaded, taking time away from the player since they had to click in the textarea to begin tpying
- I wasn't able to make it so the player could only click inside the textarea once to begin, but then not again after that since it might confuse them becuase going back with the mouse would break the 'input' string
- I wasn't able to get around to making a more rewarding winner page
- I wasn't able to make a feature that calculated the palyers' average typing speeds
- I wasn't able to get the array of prompts to reset back to its original order once the reset button has been clicked
