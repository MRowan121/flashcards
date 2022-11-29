const { expect } = require('chai');
const chai = require('chai');
// const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    
    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it.skip('should have a user guess and a Card', function() {
        const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
        const turn = new Turn('Matthew', card);

        expect(turn.userGuess).to.equal('Matthew');
        expect(turn.currentCard).to.equal(card);
    });

    it.skip('should be able to return the user guess', function() {
        const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
        const turn = new Turn('Matthew', card);

        expect(turn.returnGuess()).to.equal('Matthew');
    });

    it.skip('should be able to return the current card details', function() {
        const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
        const turn = new Turn('Matthew', card);

        expect(turn.returnCard()).to.equal(card);
    });

    it.skip('should be able to evaluate the users guess', function() {
        const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
        const turn = new Turn('Matthew', card);

        expect(turn.evaluateGuess()).to.equal(false);
    });

    it.skip('should be able to give feedback based on user guess', function() {
        const card = new Card(1, 'What is my last name?', ['Matthew', 'Brandon', 'Rowan'], 'Rowan');
        const turn = new Turn('Matthew', card);

        expect(turn.giveFeedback()).to.equal('incorrect!');
    });
});