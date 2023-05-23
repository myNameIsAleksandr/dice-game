//Random numbers for both players
let randomNumber1 = Math.floor(Math.random() * 5);
let randomNumber2 = Math.floor(Math.random() * 5);

//Array of images
let randomImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

let hiddenText = document.querySelector(".hidden-text");
hiddenText.style.display = "none";

document.addEventListener("keypress", () => {
  hiddenText.style.display = "block";
  //Random picture for 1 player
  let pictureLeft = document.querySelector(".img1");
  pictureLeft.setAttribute("src", randomImages[randomNumber1]);

  //Random picture for 2 player
  let pictureRight = document.querySelector(".img2");
  pictureRight.setAttribute("src", randomImages[randomNumber2]);

  //Title changing condition
  let titleText = document.querySelector("h2");
  if (randomNumber1 > randomNumber2) {
    titleText.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    titleText.innerHTML = "Player 2 Wins!";
  } else {
    titleText.innerHTML = "RAW!";
  }
});
