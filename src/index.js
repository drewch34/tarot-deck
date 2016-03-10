const tarot = require('corpora/data/divination/tarot_interpretations.json'),
  shuffle = require('knuth-shuffle').knuthShuffle;

function getMajorArcana() {
  return getBySuit('major');
};

function getMinorArcana() {
  var minorSuits = getSuits().filter( (element) => {return element != 'major';} );

  return minorSuits.reduce( (accumulator, suit) => {
    return accumulator.concat(getBySuit(suit));
  }, []);

};

function getSuits() {
  return [...new Set(tarotDeck.map( (value) => value.suit ))];
};

export const tarotDeck = tarot.tarot_interpretations;

export function getBySuit(suit) {
  return tarotDeck.filter( (element) => {return element.suit === suit;} );
};

export function getByRank(rank) {
  return tarotDeck.find( (element) => {return element.rank == rank;} );
};

export const suits = getSuits();

export const minorArcana = getMinorArcana();

export const majorArcana = getMajorArcana();

export function drawCard(deck = tarotDeck) {
  if (deck.length <= 0) return;
  let chosenCard = deck[Math.floor(Math.random() * deck.length)];

  chosenCard.reversed = Math.random() < 0.5;
  return chosenCard;
};

export function drawReading(numberOfCards = 3, originalDeck = tarotDeck) {
  return shuffle(originalDeck.slice(0).slice(0,numberOfCards));
}