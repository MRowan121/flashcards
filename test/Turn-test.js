const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn;
    const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
    beforeEach(() => {
        turn = new Turn('Matthew', card);
    });
    
    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should have a user guess and a Card', () => {
        expect(turn.userGuess).to.equal('Matthew');
        expect(turn.currentCard).to.equal(card);
    });

    it('should be able to return the user guess', () => {
        expect(turn.returnGuess()).to.equal('Matthew');
    });

    it('should be able to return the current card details', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('should be able to evaluate the users guess', () => {
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should be able to give feedback based on user guess', () => {
        expect(turn.giveFeedback()).to.equal('incorrect!');
    });
});