/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App (Game of Thrones Edition)
 * app.js */

let game = null;
const btn_reset = document.querySelector('#btn__reset');

btn_reset.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
  }
});