const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
    let round;
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    beforeEach(() => {
        round = new Round(deck);
    });

    it.skip('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it.skip('should have a deck property', () => {
        expect(round.deck).to.include(deck);
    });

    it.skip('should have a return current card method', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it.skip('should have a turn count property with default value of 0', () => {
        expect(round.turns).to.equal(0);
    });

    it.skip('should have an incorrect guesses property with value of an empty array', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it.skip('should have an correct guesses property with value of an empty array', () => {
        expect(round.correctGuesses).to.deep.equal([]);
    });

    it.skip('should be able to update the turn count', () => {
        round.takeTurn('sea otter');
        expect(round.turns).to.equal(1);
        round.takeTurn('sea otter');
        expect(round.turns).to.equal(2);
    });

    it.skip('should create a new instance of Turn when a guess is made', () => {
        expect(round.takeTurn('sea otter')).to.be.an.instanceOf(Turn);
    });

    it.skip('should return feedback whether guess is correct', () => {
        expect(round.takeTurn('sea otter')).to.equal('correct!');
    });

    it.skip('should return feedback whether guess is incorrect', () => {
        expect(round.takeTurn('sea plotter')).to.equal('incorrect!');
    });

    it.skip('should update the current card to be the next card after each turn', () => {
        round.takeTurn('sea otter');
        expect(round.returnCurrentCard()).to.equal(card2);
        round.takeTurn('sea otter');
        expect(round.returnCurrentCard()).to.equal(card3);
    });

    it.skip('should add card id for missed questions to the incorrect questions array', () => {
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        expect(round.incorrectGuesses[0]).to.equal(14);
    });

    it.skip('should add card id for correct questions to the correct questions array', () => {
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        expect(round.incorrectGuesses[0]).to.equal(1);
    });

    it.skip('should be able to calculate percent correct', () => {
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        round.calculatePercentCorrect();
        expect(round.percentCorrect).to.equal(33);
    });

    it.skip('should show user when round is over and what % they scored', () => {
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        round.takeTurn('sea otter');
        expect(round.calculatePercentCorrect()).to.equal('**Round over!** You answered 33% of the questions correctly!');
    });
});