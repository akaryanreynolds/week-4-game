// This loads the js data to the page:
window.onload = function() {

// Here are all the global varables:
var wins = 0;
var losses = 0;
var playersTotal = 0;
var randomNumber;
var blueValue;
var clearValue;
var pinkValue;
var greenValue;

// Here we run the functions below to generate the numbers to play the game:
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
	document.getElementById("randomNumber").innerHTML = ("You need to get to: " + randomNumber);


// Here I am generating the crystals random #'s:
	function blueCrystal(){
		blueValue = [Math.floor(Math.random() * 5 + 1)];
		console.log("Blue number is " + blueValue);
	}
	document.getElementById("blue").innerHTML = blueValue;

	function clearCrystal(){
		clearValue = [Math.floor(Math.random() * 8 + 1)];
			console.log("Clear number is " + clearValue);
	}

	function pinkCrystal(){
		pinkValue = [Math.floor(Math.random() * 13 + 1)];
			console.log("Pink number is " + pinkValue);
	}

	function greenCrystal(){
		greenValue = [Math.floor(Math.random() * 1 + 1)];
			console.log("Green number is " + greenValue);
	}



// Here we call the click functions:
$(document).ready(function() {

	$("#blue").on("click", function() {
		// Need to add the blueValue to playersScore
	        alert("Blue clicked!");
	      });

	$("#clear").on("click", function() {
	        alert("Clear clicked!");
	      });

	$("#pink").on("click", function() {
	        alert("Pink clicked!");
	      });

	$("#green").on("click", function() {
		
	        alert("Green clicked!");
	      });

	$("#playersScore").text("Your current total is: " + playersTotal);
	
});

// This is the game ending "if" statments:
	if (playersTotal == randomNumber){
		wins++
		resetWin();
	}

	if (playersTotal > randomNumber){
		losses++
		resetLoose();
	}
};

// Here are the reset functions for the game, that are also called in the "if" statements:
function resetWin(){
	playersTotal = 0;
	alert("Amazing!! You matched the Computer!!" + "\nPush OK to play again!")
	compNumber();
	blueCrystal();
	clearCrystal();
	pinkCrystal();
	greenCrystal();
}

function resetLoose(){
	playersTotal = 0;
	alert("You LOOOOOOOOSE to high!!" + "\nPush OK to play again!")
	compNumber();
	blueCrystal();
	clearCrystal();
	pinkCrystal();
	greenCrystal();
}

