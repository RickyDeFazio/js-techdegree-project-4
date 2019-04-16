/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App (Game of Thrones Edition)
 * app.js */

let game = null;
const btn_reset = document.querySelector('#btn__reset');
const qwerty = document.getElementById('qwerty');
const keyrow = document.querySelectorAll('.keyrow');

/**
 * Resets board back to start:
 * 1. Remove guessed letters from display. 
 * 2. Remove 'guess' classes from keys.
 * 3. Removes disabled attr.
 * 4. Replaces faded hearts with starting hearts.
 * 5. Starts new game.
 */

btn_reset.addEventListener('click', () => {
  const ul = document.querySelector('#phrase ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  for (let i = 0; i < keyrow.length; i++){
    const childrenKeys = keyrow[i].children;
    for (let i = 0; i < childrenKeys.length; i++){
      childrenKeys[i].className = 'key';
      childrenKeys[i].disabled = false;
    }
  }
  const scoreboardOl = document.querySelector('#scoreboard ol');
  const scoreboardLi = scoreboardOl.children;
  for (let i = 0; i < scoreboardLi.length; i++){
    scoreboardLi[i].firstChild.src = 'images/liveHeart.png';
  }
  game = new Game();
  game.startGame();
});

/**
 * Listens for clicks on the on-screen qwerty keys and calls handleInteraction on event targeted button.
 */

qwerty.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
  }
});

/**
 * Listens for keyboard keys from player, allowing player to use keyboard to make guesses. If keyboard key matches one of the on-screen keys, call handleInteraction method.
 */

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keyrow.length; i++){
    const childrenKeys = keyrow[i].children;
    for (let i = 0; i < childrenKeys.length; i++){
      if (e.key === childrenKeys[i].textContent){
        game.handleInteraction(childrenKeys[i]);
      }
    }
  }
});

