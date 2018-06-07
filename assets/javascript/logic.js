$(document).ready(function () {

  var config = {
    apiKey: "AIzaSyAtHZV7SfR4uD4jXWbfnuu4s7bAUTGfB2M",
    authDomain: "r-p-s-722d2.firebaseapp.com",
    databaseURL: "https://r-p-s-722d2.firebaseio.com",
    projectId: "r-p-s-722d2",
    storageBucket: "",
    messagingSenderId: "923445765862"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var playerOne = "";
  var playerTwo = "";
  var playerOneWins = 0;
  var playerTwoWins = 0;
  var playerOneGuess = "";
  var playerTwoGuess = "";
  var playerOneLosses = 0;
  var playerOneLosses = 0;
  var guess = ["Rock", "Paper", "Scissors"];

// Connections

  var connectionsRef = database.ref("/connections");
  var connectedRef = database.ref(".info/connected");




});
