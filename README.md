# [tarot-deck](https://github.com/byronhulcher/tarot-deck) [![npm version](https://badge.fury.io/js/tarot-deck.svg)](https://badge.fury.io/js/tarot-deck)
Tarot for Node! A thin javascript wrapper for the Tarot Interpretations from github.com/dariusk/corpora

[![Circle CI](https://circleci.com/gh/byronhulcher/tarot-deck/tree/master.svg?style=shield)](https://circleci.com/gh/byronhulcher/tarot-deck/tree/master)
[![Code Climate](https://codeclimate.com/github/byronhulcher/tarot-deck/badges/gpa.svg)](https://codeclimate.com/github/byronhulcher/tarot-deck)
[![Test Coverage](https://codeclimate.com/github/byronhulcher/tarot-deck/badges/coverage.svg)](https://codeclimate.com/github/byronhulcher/tarot-deck/coverage)

# installation
```
npm install tarot-deck
```

#usage
```
var tarot = require('tarot-deck');

console.log( tarot.suits );
// [ 'major', 'wands', 'cups', 'swords', 'coins' ]

console.log( tarot.minorArcana );
// 56

console.log( tarot.getByRank(1) );
/* 
{ keywords: [ 'capability', 'empowerment', 'activity' ],
  meanings: 
   { light: 
      [ 'Taking appropriate action',
        'Receiving guidance from a higher power',
        'Becoming a channel of divine will',
        'Expressing masculine energy in appropriate and constructive ways',
        'Being yourself in every way' ],
     shadow: 
      [ 'Inflating your own ego',
        'Abusing talents',
        'Manipulating or deceiving others',
        'Being too aggressive',
        'Using cheap illusions to dazzle others',
        'Refusing to invest the time and effort needed to master your craft',
        'Taking shortcuts' ] },
  name: 'The Magician',
  rank: 1,
  suit: 'major' }
*/

console.log( tarot.drawCard() );
/*
{ keywords: [ 'health', 'wealth', 'practicality', 'receiving' ],
  meanings: 
   { light: 
      [ 'Outlining a plan for achieving prosperity',
        'Becoming aware of opportunities to improve income or health',
        'Realizing you have everything you need',
        'Appreciating everything the Universe has given you',
        'Receiving the perfect gift at the perfect time' ],
     shadow: 
      [ 'Indulging in relentless consumerism',
        'Wanting more, no matter how much you have',
        'Obsessing on your account balance',
        'Suffering from hypochondria',
        'Consuming blessings without expressing gratitude',
        'Taking what you want without concern for the needs of others' ] },
  name: 'ace of coins',
  rank: 1,
  suit: 'coins',
  reversed: true }
*/

console.log( tarot.drawReading() );
/*
[ { keywords: [ 'training', 'discipline', 'confidence', 'enough' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'nine of coins',
    rank: 9,
    suit: 'coins',
    reversed: true },
  { keywords: 
     [ 'wholeness',
       'integration',
       'totality',
       'completeness',
       'fullness' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'The World',
    rank: 21,
    suit: 'major',
    reversed: true },
  { keywords: [ 'implementation', 'action', 'exploration' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'three of wands',
    rank: 3,
    suit: 'wands',
    reversed: false } ]
*/

```
# exports
### tarotDeck
An array of objects representing tarot cards.  See above for an example of the fields these objects will contain.

### majorArcana
An array of objects representing only the Major Arcana tarot cards.  See above for an example of the fields these objects will contain.

### minorArcana
An array of objects representing only the Minor Arcana tarot cards.  See above for an example of the fields these objects will contain.

### suits
An array of the 5 suits of Tarot

### function getBySuit( string )
Function that returns an array of objects representing tarot cards which match the provided suit.  See above for an example of the fields these objects will contain.

### function getByRank( integer or string )
Function that returns a single object representing a tarot card which matches the provided rank.  The rank should be an integer or evaluate to an integer.  See above for an example of the fields this will contain.

### function drawCard( { float reversedChance = 0.5, array deck = tarotDeck } )
Will choose a random card from the the provided array of tarot cards.  If the `deck` argument is not provided then it will default to the the exported `tarotDeck`.
This will also add a `reversed` field to the object, which is a boolean of whether the card was drawn reversed or not.
The default odds for a reversed draw is 50%, but a `reversedChance` argument can be provided.

### function drawReading( integter numberOfCards = 3, { float reversedChance = 0.5, array deck = tarotDeck } )
Will draw up to `numberOfCards` from the the supplied `deck` argument and return them as an array.  If the `deck` argument is not provided then it will default to the the exported `tarotDeck`.
These cards are not replaced in the deck after they are drawn, so all cards are guarunteed unique.
They will also include the `reversed` field.  The default odd for a reversed draw is 50%, but a `reversedChance` argument can be provided.
The provided `deck` argument or its default are NOT modified in any way. Cards returned from this function will still exist in the `deck`.