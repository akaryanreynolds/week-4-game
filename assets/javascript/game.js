// This loads the js data to the page:
window.onload = function() {

// Here are all the global varables:
var wins = 0;
var losses = 0;
var playersTotal = 0;
var randomNumber;
var crystalArray = [];
var blueValue;
var clearValue;
var pinkValue;
var greenValue;

// Here we run the functions below to generate the numbers to play the game:
compNumber();
// crystalValues();
blueCrystal();
clearCrystal();
pinkCrystal();
greenCrystal();

// Here I am generating the game random number the user will play to:
function compNumber(){
		randomNumber = [Math.floor(Math.random() * 101) + 19];
		console.log("Computer number is " + randomNumber);
		document.getElementById("randomNumber").innerHTML = ("You need to get to: " + randomNumber);
	}
	


// Here I am generating the crystals random #'s:
// function crystalValues(){
		function blueCrystal(){
			blueValue = Math.floor(Math.random() * 12) + 1;
			crystalArray.push(blueValue);
			console.log("Blue number is " + blueValue);
		}
		document.getElementById("blue").innerHTML = blueValue;

		function clearCrystal(){
			clearValue = [Math.floor(Math.random() * 12) + 1];
			crystalArray.push(clearValue);
			console.log("Clear number is " + clearValue);
		}

		function pinkCrystal(){
			pinkValue = [Math.floor(Math.random() * 12) + 1];
			crystalArray.push(pinkValue);
			console.log("Pink number is " + pinkValue);
		}

		function greenCrystal(){
			greenValue = [Math.floor(Math.random() * 12) + 1];
			crystalArray.push(greenValue);
			console.log("Green number is " + greenValue);
		}
	// }

	function resetWin(){
		playersTotal = 0;
		alert("Amazing!! You matched the Computer!!" + "\nPush OK to play again!")
		compNumber();
		// crystalValues();
		blueCrystal();
		clearCrystal();
		pinkCrystal();
		greenCrystal();
	}

	function resetLoose(){
		playersTotal = 0;
		alert("You LOOOOOOOOSE to high!!" + "\nPush OK to play again!")
		compNumber();
		// crystalValues();
		blueCrystal();
		clearCrystal();
		pinkCrystal();
		greenCrystal();
	}

// Here we call the click functions:
$(document).ready(function() {

	$("#blue").on("click", function() {
		// Need to add the blueValue to playersScore
			console.log(crystalArray);
			playersTotal += parseInt(crystalArray[0]);
			$("#playersScore").text("Your current total is: " + playersTotal);
	        // alert("Blue clicked!");
			if (playersTotal == randomNumber){
				wins++
				console.log("add: " + wins + "wins");
				$('#gameWins').text('Wins: ' + wins);
				resetWin();
			}

			if (playersTotal > randomNumber){
				losses++
				console.log("add: " + losses + "losses");
				$('#gameLosses').text('Losses: ' + losses);
				resetLoose();
			}
	      });

	$("#clear").on("click", function() {
			console.log(crystalArray);
			playersTotal += parseInt(crystalArray[1]);
			$("#playersScore").text("Your current total is: " + playersTotal);
	        // alert("Clear clicked!");

	        if (playersTotal == randomNumber){
				wins++
				console.log("add: " + wins + "wins");
				$('#gameWins').text('Wins: ' + wins);
				resetWin();
			}

			if (playersTotal > randomNumber){
				losses++
				console.log("add: " + losses + "losses");
				$('#gameLosses').text('Losses: ' + losses);
				resetLoose();
			}
	      });

	$("#pink").on("click", function() {
			console.log(crystalArray);
			playersTotal += parseInt(crystalArray[2]);
			$("#playersScore").text("Your current total is: " + playersTotal);
	        // alert("Pink clicked!");

	        if (playersTotal == randomNumber){
				wins++
				console.log("add: " + wins + "wins");
				$('#gameWins').text('Wins: ' + wins);
				resetWin();
			}

			if (playersTotal > randomNumber){
				losses++
				console.log("add: " + losses + "losses");
				$('#gameLosses').text('Losses: ' + losses);
				resetLoose();
			}
	      });

	$("#green").on("click", function() {
			console.log(crystalArray);
			playersTotal += parseInt(crystalArray[3]);
			$("#playersScore").text("Your current total is: " + playersTotal);
	        // alert("Green clicked!");

		    if (playersTotal == randomNumber){
				wins++
				console.log("add: " + wins + "wins");
				$('#gameWins').text('Wins: ' + wins);
				resetWin();
			}

			if (playersTotal > randomNumber){
				losses++
				console.log("add: " + losses + "losses");
				$('#gameLosses').text('Losses: ' + losses);
				resetLoose();
			}
	      });

	$("#playersScore").text("Your current total is: " + playersTotal);
	


// This is the game ending "if" statments:
	// if (playersTotal == randomNumber){
	// 	wins++
	// 	console.log(wins);
	// 	resetWin();
	// }

	// if (playersTotal > randomNumber){
	// 	losses++
	// 	console.log(losses);
	// 	resetLoose();
	// }
});

};

// Here are the reset functions for the game, that are also called in the "if" statements:
// function resetWin(){
// 	playersTotal = 0;
// 	alert("Amazing!! You matched the Computer!!" + "\nPush OK to play again!")
// 	compNumber();
// 	blueCrystal();
// 	clearCrystal();
// 	pinkCrystal();
// 	greenCrystal();
// }

// function resetLoose(){
// 	playersTotal = 0;
// 	alert("You LOOOOOOOOSE to high!!" + "\nPush OK to play again!")
// 	compNumber();
// 	blueCrystal();
// 	clearCrystal();
// 	pinkCrystal();
// 	greenCrystal();
// }

