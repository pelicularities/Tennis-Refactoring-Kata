"use strict";

function formatNormalGameScore(player1Score, player2Score) {
  var scoreMap = ["Love", "Fifteen", "Thirty", "Forty"];
  return player1Score === player2Score
    ? scoreMap[player1Score] + "-All"
    : scoreMap[player1Score] + "-" + scoreMap[player2Score];
}

function formatLateGameScore(player1Score, player2Score) {
  let player1Name = "player1";
  let player2Name = "player2";
  if (player1Score === player2Score) {
    return "Deuce";
  }
  const leader = player1Score > player2Score ? player1Name : player2Name;
  return Math.abs(player1Score - player2Score) === 1
    ? "Advantage " + leader
    : "Win for " + leader;
}

function getScore(player1Score, player2Score) {
  if (player1Score < 4 && player2Score < 4 && player1Score + player2Score < 6) {
    // normal game
    return formatNormalGameScore(player1Score, player2Score);
  } else {
    // deuce, advantage or win
    return formatLateGameScore(player1Score, player2Score);
  }
}

module.exports = getScore;
