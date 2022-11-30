class Round {
    constructor(deck) {
        this.deck = deck;
    };

    returnCurrentCard() {
        return this.deck.allCards[0];
    };
};

module.exports = Round;