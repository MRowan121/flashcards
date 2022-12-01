const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = undefined;
  };

  start() {
    let cards = [];
    prototypeQuestions.forEach(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      cards.push(newCard);
    });
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`);
    this.printQuestion(round);
  };

  printQuestion(round) {
    util.main(round);
  };
}

module.exports = Game;