"use strict";

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tarot = require('corpora/data/divination/tarot_interpretations.json');
var tarotDeck = tarot.tarot_interpretations;

var uniquePluck = function uniquePluck(arr, prop) {
    var types = {};
    arr.forEach(function (element) {
        types[element[prop]] = true;
    });

    return (0, _keys2.default)(types);
};

var getMajorArcana = function getMajorArcana() {
    return getBySuit("major");
};

var getMinorArcana = function getMinorArcana() {
    var minorSuits = getSuits().filter(function (element) {
        return element != "major";
    });
    return minorSuits.reduce(function (accumulator, suit) {
        return accumulator.concat(getBySuit(suit));
    }, []);
};

var getSuits = function getSuits() {
    return uniquePluck(tarotDeck, 'suit');
};

var getBySuit = function getBySuit(suit) {
    return tarotDeck.filter(function (element) {
        return element.suit === suit;
    });
};

var getByRank = function getByRank(rank) {
    return tarotDeck.find(function (element) {
        return element.rank == rank;
    });
};

module.exports = {
    tarotDeck: tarotDeck,
    suits: getSuits(),
    getBySuit: getBySuit,
    minorArcana: getMinorArcana(),
    majorArcana: getMajorArcana(),
    getByRank: getByRank
};