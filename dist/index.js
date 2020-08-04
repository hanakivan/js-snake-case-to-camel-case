"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeCaseToCamelCase = void 0;

var snakeCaseToCamelCase = function snakeCaseToCamelCase(string) {
  var split = string.split("-");

  if (split.length) {
    var firstWord = split.shift();
    split = split.map(function (word) {
      return word.trim();
    }).filter(function (word) {
      return word.length > 0;
    }).map(function (word) {
      var firstLetter = word.substring(0, 1).toUpperCase();
      var restOfTheWord = word.substring(1).toLowerCase();
      return "".concat(firstLetter).concat(restOfTheWord);
    });
    split.unshift(firstWord);
    return split.join("");
  } else {
    return string;
  }
};

exports.snakeCaseToCamelCase = snakeCaseToCamelCase;