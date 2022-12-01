const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });

    it.skip('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it.skip('should be an instance of game', () => {
        expect(game).to.be.an.instanceOf(Game);
    });

    it.skip('should start with undefined as current round', () => {
        expect(game.currentRound).to.equal(undefined);
    });

    it.skip('should have a deck of cards', () => {
        game.start();
        expect(game.currentRound.deck.cards).to.be.an('array');
        expect(game.currentRound.deck.cards).to.equal(30);
    });

    it.skip('should keep track of the current round', () => {
        game.start();
        expect(game.currentRound).to.not.equal(undefined);
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
});