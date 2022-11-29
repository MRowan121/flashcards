class Turn {
    constructor(guess, card) {
        this.userGuess = guess;
        this.currentCard = card;
    };

    returnGuess() {
        return this.userGuess;
    };

    returnCard() {
        return this.currentCard;
    };

    evaluateGuess() {
        if(this.userGuess !== this.currentCard.correctAnswer) {
            return false;
        };
    };

    giveFeedback() {
        if(this.evaluateGuess() === false) {
            return 'incorrect!';
        } else {
            return 'correct!';
        };
    };
};

module.exports = Turn;