let word = "";
let bestGuess = "";
let oldGuess = "";
let lives = 0;
let maxLives = 7;

const words = [
    "souple",
    "hybridized",
    "crosstringed",
    "diurnally",
    "firm",
    "jillaroo",
    "wandlike",
    "epoch",
    "triggerfish",
    "conspirator"
];

function formSubmit(){
    var data = Object.fromEntries(new FormData(document.querySelector("form")).entries());
    document.getElementById("Main").innerHTML = data.inputField;
    console.log(data)
    document.form.reset();

    var guess = data.inputField
    guess = guess.toLowerCase().trim();


    //Game Loop
    ///////////////////////////////
    if(guess.length < 2){
        if(word.includes(guess)){
            console.log(guess);
            bestGuess[1] = "a";
            console.log(bestGuess);
            console.log(word.charAt(word.search(guess)));
            oldGuess = bestGuess;
            bestGuess = "";
            console.log(oldGuess);
            console.log(bestGuess);
            for(i = 0; i < word.length; i++){
                if(oldGuess.charAt(i) != "_"){
                    bestGuess += oldGuess.charAt(i);
                }
                else if(word.charAt(i) == guess){
                    bestGuess += guess;
                }
                else if (oldGuess.charAt(i) == "_"){
                    bestGuess += "_";
                }
                console.log(oldGuess);
                console.log(bestGuess);
            }
            if(bestGuess.trim() == word){
                document.getElementById("winText").innerHTML = "You Win!!!";
                document.getElementById("bestGuess").innerHTML = word;
                document.getElementById("Main").innerHTML = "";
                return false;
            }
        }
        else{
            lives--;
            document.getElementById("lives").innerHTML = "Lives: " + lives;
            console.log(lives);
            if (lives <= 0){
                document.getElementById("winText").innerHTML = "You Lose...";
                document.getElementById("bestGuess").innerHTML = word;
                document.getElementById("Main").innerHTML = bestGuess.split("").join(" ");
                return false;
            }
            return false;
        }
    }
    else if(guess == word){
        document.getElementById("winText").innerHTML = "You Win!!!";
        document.getElementById("bestGuess").innerHTML = word;
        document.getElementById("Main").innerHTML = "";
        return false;
    }
    else{
        lives--;
        document.getElementById("lives").innerHTML = "Lives: " + lives;
        console.log(lives);
        return false;
    }

    ///////////////////////////////
    formatOutput();
    return false;
}

function newGame(){
    word = words[Math.floor(Math.random() * words.length)];
    bestGuess = "";
    for(i = 0; i < word.length; i++){
        bestGuess += "_";
    }
    formatOutput();
    lives = maxLives;
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    console.log(word);
}

function formatOutput(){
    document.getElementById("bestGuess").innerHTML = bestGuess.split("").join(" ");
}


