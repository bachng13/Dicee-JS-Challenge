var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)
var image1 = document.getElementById("img1")

var randomDiceImages1 = "dice" + randomNumber1 + ".png"
var sourcePath1 = "images/" + randomDiceImages1

image1.setAttribute("src", sourcePath1)

console.log(randomNumber1)

var image2 = document.getElementById("img2");

var randomDiceImages2 = "dice" + randomNumber2 + ".png"
var sourcePath2 = "images/" + randomDiceImages2

image1.setAttribute("src", sourcePath2)

console.log(randomNumber2)

if (randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "Player 1 Wins"
}
if (randomNumber1 < randomNumber2) {
    document.getElementById("title").innerHTML = "Player 2 Wins"
}
else if(randomNumber1 == randomNumber2){
    document.getElementById("title").innerHTML = "Draws"
}