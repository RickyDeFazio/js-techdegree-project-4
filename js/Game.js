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
    const phrase2 = new Phrase('When you play a game of thones, you win or you die');
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

  handleInteraction() {
    
  }
}