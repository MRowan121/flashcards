const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
        this.percentCorrect = 0;
    };

    returnCurrentCard() {
        return this.deck.allCards[this.turns];
    };

    takeTurn(userGuess) {
        let turn = new Turn(userGuess, this.returnCurrentCard())
        this.turns ++;
        if(turn.giveFeedback() === 'incorrect!') {
            this.incorrectGuesses.push(turn.currentCard.id)
            return turn.giveFeedback();
        } else {
            this.correctGuesses.push(turn.currentCard.id)
            return turn.giveFeedback();
        };
    };

    calculatePercentCorrect() {
        let score = (((this.correctGuesses.length / this.deck.allCards.length) * 100).toFixed(0));
        this.percentCorrect = parseInt(score);
        return `**Round over!** You answered ${this.percentCorrect}% of the questions correctly!`;
    };

    endRound() {
        if(this.turns === this.deck.allCards.length) {
            return this.calculatePercentCorrect();
        };
    };
};

module.exports = Round;