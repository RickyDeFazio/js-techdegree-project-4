/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li');
      li.textContent = this.phrase[i];
      ul.appendChild(li);
      if (li.textContent === ' ') {
        li.className = 'space';
      } else {
        li.className = `hide letter ${this.phrase[i]}`
      }
    }
  };

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    }
    return false;
  }

  showMatchedLetter(letter) {
    const matchedLetters = document.querySelectorAll(`.${letter}`);
    matchedLetters.forEach(letter => {
      if (letter.classList.contains('hide')) {
        letter.classList.remove('hide');
        return letter.classList.add('show');
      }
    });
  }
}