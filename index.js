function randomNumber() {
  var n = Math.random();
  n = n*6;
  n = Math.floor(n)+ 1;
  return n;
}

function SentenceCase(player) {
  player = player.slice(0,1).toUpperCase() + player.slice(1,).toLowerCase();
  return player;
}

var player1= prompt("Enter Player1 Name: ")
var player2= prompt("Enter Player2 Name: ")

player1 = SentenceCase(player1)
player2 = SentenceCase(player2)
//for 1st image
var n1 = randomNumber();
document.querySelector(".img1").setAttribute("src", "images/dice"+n1.toString()+".png");

//for 2nd image
var n2 = randomNumber();
document.querySelector(".img2").setAttribute("src", "images/dice"+n2.toString()+".png");

if(n1>n2){
  document.querySelector("h1").innerText = player1 + " Wins!";
} else if (n2>n1)  {
  document.querySelector("h1").innerText = player2 + " Wins!";
} else {
  document.querySelector("h1").innerText = "Draw Match!";
}
