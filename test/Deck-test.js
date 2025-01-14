const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    it('should be a function', () => {
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be able to add cards to the deck', () => {
        const deck = new Deck([card1]);

        expect(deck.allCards).to.include(card1);
    });

    it('should be able to add multiple cards to the deck', () => {
        const deck = new Deck([card1, card2, card3]);

        expect(deck.allCards).to.include(card1, card2, card3);
    });

    it('should be able to count how many cards are in the deck', () => {
        const deck = new Deck([card1, card2, card3]);

        expect(deck.countCards()).to.equal(3);
    });
});