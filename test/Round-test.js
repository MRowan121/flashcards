const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    it.skip('should be a function', () => {
        const round = new Round(deck);
        expect(Round).to.be.a('function');
    });

    it.skip('should have an undefined current card property', () => {

    });

    it.skip('should have a return current card method', () => {

    });

    it.skip('should be able to reassign current card property to the correct card', () => {

    });

    it.skip('should have a turn count property with default value of 0', () => {

    });

    it.skip('should be able to update the turn count', () => {

    });

    it.skip('should create a new instance of Turn when a guess is made', () => {

    });

    it.skip('should update turn count even if answer is incorrect', () => {

    });

    it.skip('should update the current card to be the next card after each turn', () => {

    });

    it.skip('should have an incorrect guesses property with value of an empty array', () => {

    });

    it.skip('should add card id for missed questions to the incorrect questions array', () => {

    });

    it.skip('should return feedback whether guess is correct or not', () => {

    });

    it.skip('should be able to calculate percent correct', () => {

    });

    it.skip('should show user when round is over and what % they scored', () => {

    });
});