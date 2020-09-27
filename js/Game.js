class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('A Dragon is not a slave'),
      new Phrase('Burn them all'),
      new Phrase('Winter is coming'),
      new Phrase('You know nothing Jon Snow'),
      new Phrase('You are no son of mine'),
      new Phrase('This is not the day I die'),
      new Phrase('I am the gift'),
      new Phrase('He always comes back'),
      new Phrase('For the watch'),
      new Phrase('The Nights Watch'),
      new Phrase('My Queen'),
      new Phrase('Lannisters pay their debt'),
    ];
    this.activePhrase = null;
  }

  /**
   * Hides the start screen overlay and assigns a random phrase to activePhrase.
   */
  startGame() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * When called, chooses a random phrase from phrase array.
   * Returns random phrase object.
   */
  getRandomPhrase() {
    const randomIndex =  Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Disables selected letter's on screen.
   * If phrase doesn't include guessed letter, display answer is wrong using 'wrong' color & remove life.
   * If guessed letter is in phrase, display answer is correct use 'correct' color & check if player has won.
   * @param {element} button - the button that corresponds to the letter selected.
   */
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

  /**
   * Checks if player has selected all the possible hidden letters.
   * Returns boolean value based on whether player has won or not.
   */
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length === 0) {
      return true;
    }
    return false;
  }

  /**
   * Removes heart/life for each time a player guesses incorrectly.
   * If player has missed 5 times, game ends & they lose.
   */
  removeLife() {
    if (this.missed === 5) {
      this.gameOver(false);
    } else {
      const scoreboardOl = document.querySelector('#scoreboard ol');
      const scoreboardLi = scoreboardOl.children;
      scoreboardLi[this.missed].firstChild.src = 'images/lostHeart.png';
      this.missed++;
    }
  }

  /**
   * Displays winning/losing message at end of game.
   * @param {boolean} gameOver - false = lose, true = win.
   */
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
