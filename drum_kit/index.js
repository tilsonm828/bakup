// 1. add event listener to the pictures/buttons. When click on the buttons, 
// a sound will be played

let letters = ['a', 'w', 's', 'd', 'j', 'k', 'l'];

//get the number of the drum elements from HTML page
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

//add event listener to the drum pictures, you can do it with a for loop
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    if (letters.includes(buttonInnerHTML)) {
      updateRecord(buttonInnerHTML);
    }
    
  });

}

// 2. add event listener to the document element. Listen to any key press event. 
// if any of w, a, s, d, j, k or l is pressed, a sound will be display too.

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  if (letters.includes(event.key)) {
    updateRecord(event.key);
  }

});

//a fucntion can make sound, use key as a pass-in peremiter
// the program will play different sound base on the key pass in
// mp3 files are in the "sounds" folder, just find a way to play it
// you can use if/else statement or other flow control statements
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      // updateRecord(key);
      break;

    default: console.log(key);

  }


}

function updateRecord(key) {
  let keysPressed = document.querySelector("#keys-pressed");
  keysPressed.innerHTML = keysPressed.innerHTML + key; 
}

