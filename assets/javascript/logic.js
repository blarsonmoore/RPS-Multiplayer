$(document).ready(function () {

  console.log("Working");



  var route, destination, freq, arrivalTime;
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  
  //Initialize Firebase

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

// Connections

  // var connectionsRef = database.ref("/connections");
  // var connectedRef = database.ref(".info/connected");

  $("#add-train").on("click", function(){
    
     route = $("#route-input").val().trim();
     console.log(route);
     destination = $("#dest-input").val().trim();
     freq = $("#freq").val().trim();
     arrivalTime = $("#arr-time").val().trim();
     var newTrainData = {
         trainRoute: route,
         trainDest: destination,
         trainFreq: freq,
         trainArrivalTime: arrivalTime
     };
     database.ref("/Train").push(newTrainData);
  });

  database.ref("/Train").on("child_added", function(snapshot, prevChildKey){
    var newInfo = snapshot.val().trainRoute;
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var txt = document.createTextNode(newInfo);
   td.appendChild(txt);
   tr.appendChild(td);
   newInfo = snapshot.val().trainDest;
   var td = document.createElement("td");
   var txt = document.createTextNode(newInfo);
   td.appendChild(txt);
   tr.appendChild(td);
   newInfo = snapshot.val().trainFreq;
   var td = document.createElement("td");
   var txt = document.createTextNode(newInfo);
   td.appendChild(txt);
   tr.appendChild(td);
   newInfo = snapshot.val().trainArrivalTime;
   var td = document.createElement("td");
   var txt = document.createTextNode(newInfo);
   td.appendChild(txt);
   tr.appendChild(td);

   $("#table-titles").append(tr);
    console.log(td);
  });

});
