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


var player1;
var player2;

var p1score = 0;
var p2score = 0;

$(".start-btn").click(function(){
  player1 = $(".p1").val();
  player2 = $(".p2").val();
  if ($(".p1").val()==="" || $(".p2").val()===""){
    alert("Enter Player Names first");
  }
  else {
      $(".start-btn").slideUp("slow");
      $(".letBegin").slideDown("slow");
      $(".p1name").text(player1);$(".p2name").text(player2);
      $(".g1").click(function() {
      var n1 = randomNumber();
      $(".r1 .img1").attr("src", "images/dice"+n1.toString()+".png");
      var n2 = randomNumber();
      $(".r1 .img2").attr("src", "images/dice"+n2.toString()+".png");

      if(n1>n2){
        p1score++;
      } else if (n2>n1)  {
        p2score++;
      } else {
        p1score++;p2score++;
      }
      $(".g1").slideUp();
    });

    $(".g2").click(function() {

      var n1 = randomNumber();
      $(".r2 .img1").attr("src", "images/dice"+n1.toString()+".png");
      var n2 = randomNumber();
      $(".r2 .img2").attr("src", "images/dice"+n2.toString()+".png");

      if(n1>n2){
        p1score++;
      } else if (n2>n1)  {
        p2score++;
      } else {
        p1score++;p2score++;
      }
      $(".g2").slideUp();
    });

    $(".g3").click(function() {

      var n1 = randomNumber();
      $(".r3 .img1").attr("src", "images/dice"+n1.toString()+".png");
      var n2 = randomNumber();
      $(".r3 .img2").attr("src", "images/dice"+n2.toString()+".png");

      if(n1>n2){
        p1score++;
      } else if (n2>n1)  {
        p2score++;
      } else {
        p1score++;p2score++;
      }

      if (p1score > p2score ){
        $("h1").text(player1 + " Wins");
      } else if (p2score > p1score) {
        $("h1").text(player2 + " Wins");
      } else if(p1score === p2score && p1score>0){
        $("h1").text("Match Draws");
      }
      $(".g3").slideUp();
    });

  }
});
