"use strict";

const SCORE_MAP = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty",
};

function convertDrawScoreToString(score) {
  if (score >= 3) return "Deuce";
  return `${SCORE_MAP[score]}-All`;
}

function convertNormalScoreToString(score1, score2) {
  return `${SCORE_MAP[score1]}-${SCORE_MAP[score2]}`;
}

function convertAdvantageScoreToString(score1, score2) {
  return score1 > score2 ? "Advantage player1" : "Advantage player2";
}

function convertWinScoreToString(score1, score2) {
  return score1 > score2 ? "Win for player1" : "Win for player2";
}

function getScore(score1, score2) {
  // draw
  if (score1 === score2) {
    return convertDrawScoreToString(score1);
  }

  // normal gameplay
  if (score1 < 4 && score2 < 4) {
    return convertNormalScoreToString(score1, score2);
  }

  const scoreDifference = Math.abs(score1 - score2);

  if (scoreDifference === 1) {
    // advantage case
    return convertAdvantageScoreToString(score1, score2);
  } else {
    // win case
    return convertWinScoreToString(score1, score2);
  }
}

module.exports = getScore;
