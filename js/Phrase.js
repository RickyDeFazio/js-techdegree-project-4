/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    
  }

  checkLetter(letter) {
    if (this.phrase.includes(letter)){
      return true;
    }
    return false;
  }

  showMatchedLetter() {

  }
}