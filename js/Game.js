/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  createPhrases() {
    const phrase1 = new Phrase('Fear cuts deeper than swords');
    const phrase2 = new Phrase('When you play a game of thones you win or you die');
    const phrase3 = new Phrase('Most men would rather deny a hard truth than face it');
    const phrase4 = new Phrase('Winter is coming');
    const phrase5 = new Phrase('Nothing burns like the cold');
    const phraseArr = [phrase1, phrase2, phrase3, phrase4, phrase5];
    return phraseArr;
  }
  
  getRandomPhrase() {
    const randomIndex =  Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  startGame() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(button) {
    if (this.activePhrase.checkLetter(button.textContent)){
      this.activePhrase.showMatchedLetter(button.textContent);
      button.classList.add('chosen');
      button.disabled = true;
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      }
    } else {
      button.classList.add('wrong');
      button.disabled = true;
      this.removeLife();
    }
  }

  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length === 0) {
      return true;
    }
    return false;
  }

  removeLife() {
    const scoreboardOl = document.querySelector('#scoreboard ol');
    const scoreboardLi = scoreboardOl.children;
    scoreboardLi[this.missed].firstChild.src = 'images/lostHeart.png';
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    } 
  }

  gameOver(gameOver) {
    const gameEndingMsg = document.querySelector('#game-over-message');
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('start');
    if (gameOver === true) {
      overlay.classList.add('win');
      gameEndingMsg.innerHTML = 'Congrats! You won!';
      overlay.classList.remove('lose');
    } else {
      overlay.classList.add('lose');
      gameEndingMsg.innerHTML = 'Sorry, better luck next time!'
      overlay.classList.remove('win');
    }
    overlay.style.display = 'flex';
  }
}