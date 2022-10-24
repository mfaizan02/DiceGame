
var randomNumber1 = Math.floor(Math.random() * 6 + 1); 

var randomimage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomimage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1); 

var randomimage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomimage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Play 1 Wins"
}
else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Play 2 Wins 🚩"
}
else {
    document.querySelector("h1").innerHTML="DRAW!"   
}