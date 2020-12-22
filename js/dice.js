
var playButton = document.querySelector(".play")
var resetButton = document.querySelector(".reset")

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)

function play(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = 'dice' +  randomNumber1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins"
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins"
    } else {
        document.querySelector("h1").innerHTML = "Draw!!!"
    }
}

function reset(){
    document.querySelector("h1").innerHTML = "Get Ready"

    var diceImage = document.querySelectorAll("img")

    var randomImageSource = "images/dice6.png" ;

    diceImage[0].setAttribute("src", randomImageSource);
    diceImage[1].setAttribute("src", randomImageSource);
}


