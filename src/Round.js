class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
    };

    returnCurrentCard() {
        return this.deck.allCards[0];
    };
};

module.exports = Round;