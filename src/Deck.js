class Deck {
    constructor(newCards) {
        this.allCards = newCards;
    };

    countCards() {
        return this.allCards.length;
    }
};

module.exports = Deck;