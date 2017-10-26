window.onload = function() {

var wins = 0;
var losses = 0;
var playersScore = 0;
var playersTotal = [];
// var randomNumber;
// var blueValue;
// var clearValue;
// var pinkValue;
// var greenValue;



// Here we run the fuctions below to generate the numbers to play the game:

compNumber();
blueCrystal();
clearCrystal();
pinkCrystal();
greenCrystal();

// Here I am generating the game random number the user will play to:

function compNumber(){
		randomNumber = [Math.floor(Math.random() * 50)];
		console.log("Computer number is " + randomNumber);
	}
	// compNumber();

	document.getElementById("randomNumber").innerHTML = randomNumber;



// Here I am generating the crystals random #'s:

	function blueCrystal(){
		blueValue = [Math.floor(Math.random() * 5 + 1)];
		console.log("Blue number is " + blueValue);
	}
	document.getElementById("blue").innerHTML = blueValue;
	// blueCrystal();

	function clearCrystal(){
		clearValue = [Math.floor(Math.random() * 10 + 1)];
			console.log("Clear number is " + clearValue);
	}
	// clearCrystal();

	function pinkCrystal(){
		pinkValue = [Math.floor(Math.random() * 20 + 1)];
			console.log("Pink number is " + pinkValue);
	}
	// pinkCrystal();

	function greenCrystal(){
		greenValue = [Math.floor(Math.random() * 1 + 1)];
			console.log("Green number is " + greenValue);
	}
	// greenCrystal();

};

// Here we call the click functions

$(document).ready(function() {

	$("#blue").on("click", function() {
	        alert("Blue clicked!");
	      });

	$("#clear").on("click", function() {
	        alert("Clear clicked!");
	      });

	$("#pink").on("click", function() {
	        alert("Pink clicked!");
	      });

	$("#green").on("click", function() {
		// ADD
	        alert("Green clicked!");
	      });
});


// var playersScore = 0;
// for (var i = 0; i < playersTotal.length; i++) {
//     playersScore += playersTotal[i] << 0;
// }

