class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
    };

    returnCurrentCard() {
        return this.deck.allCards[this.turns];
    };
};

module.exports = Round;