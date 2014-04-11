// Andrew Rodriguez	
// SDI - 1404
// Assignment 2 Project 2
// JavaScript - FlowChart
// "Dragon" "Slaying" "Armor" "Weapon

// Preparing to fight a dragon! Deciding which armor to get and what weapon to use.

// Variables

var myname = "Andrew";
var armor1 = "lightweight";
var armor2 = "heavyduty";
var weapon1 = "sword";
var weapon2 = "crossbow";
var fightingadragon = true;
var numberofdragons = 1;
var numberofbows = 10;
var moredragons = 2;
var mypromt;

// Conditional

 if (armor1 === "lightweight"){
 	 console.log("we are going to be moving fast and swift");
 } else {
 	console.log("we're not going to be moving has fast")
 }

 };

 if (armor2 === "heavyduty"){
 	 console.log("we wont be moving to fast but we have a fast fire rate weapon");
 } else {
 	console.log("We will be moving swiftly")
 }

 };

 // Boolean

 fightingadragon = confirm("are we going to slay a dragon today?");

 // Boolean with while loop

 if (fightingadragon === true){
    Myprompt = prompt("How many dragons are we going to fight today?", "type number of dragons");
    Myprompt = parseInt("1");
       if (Myprompt <= 1)
       alert("Its time to slay a single dragon with my lightweight armor and sword!!!");
       else
       alert("multiple dragons!! No need to worry my heavy-duty armor and crossbow will do the trick")

 };

 if (fightingadragon === false){
 	mypromt = prompt("we wont be needing to decide what armor and weapon we need becasue were not preparing to fight a dragon");
 	mypromt = parseInt("0");
 	   if (mypromt >= 0)
 	   	alert("no need for you to decide on a type of armor");
 	    else
 	    alert("we wont be preparing to fight any dragons")

 };


