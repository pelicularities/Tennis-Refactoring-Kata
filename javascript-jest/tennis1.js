"use strict";

const SCORE_MAP = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty",
};

function convertDrawScoreToString(score) {
  if (score >= 3) {
    return "Deuce";
  } else {
    return `${SCORE_MAP[score]}-All`;
  }
}

function convertAdvantageScoreToString(score1, score2) {
  return score1 > score2 ? "Advantage player1" : "Advantage player2";
}

function convertWinScoreToString(score1, score2) {
  return score1 > score2 ? "Win for player1" : "Win for player2";
}

function convertNormalScoreToString(score1, score2) {
  return `${SCORE_MAP[score1]}-${SCORE_MAP[score2]}`;
}

function getScore(score1, score2) {
  if (score1 === score2) {
    // draw case
    return convertDrawScoreToString(score1);
  } else if (score1 >= 4 || score2 >= 4) {
    // win or advantage case
    if (Math.abs(score1 - score2) >= 2) {
      // win case
      return convertWinScoreToString(score1, score2);
    } else {
      // advantage case
      return convertAdvantageScoreToString(score1, score2);
    }
  } else {
    // normal gameplay
    return convertNormalScoreToString(score1, score2);
  }
}

module.exports = getScore;
