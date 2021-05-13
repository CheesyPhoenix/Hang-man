let word = "";
let bestGuess = "";
let oldGuess = "";
let lives = 0;
let maxLives = 7;
let state = "NewGame"
let previousGuesses = [];

let standardWords = [
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
let words = [
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
    if (state == "NewGame"){
        document.form.reset();
        return false;
    }
    var data = Object.fromEntries(new FormData(document.querySelector("form")).entries());
    previousGuesses.push(data.inputField.toLowerCase().trim());
    document.getElementById("Main").innerHTML = previousGuesses;
    console.log(data)
    document.form.reset();
    if(state == "AddWords"){
        addWord(data.inputField);
        return false;
    }

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
                state = "NewGame";
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
                state = "NewGame";
                return false;
            }
            return false;
        }
    }
    else if(guess == word){
        document.getElementById("winText").innerHTML = "You Win!!!";
        document.getElementById("bestGuess").innerHTML = word;
        document.getElementById("Main").innerHTML = "";
        state = "NewGame";
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
    state = "InGame";
    document.getElementById("winText").innerHTML = "";
    document.getElementById("bestGuess").innerHTML = "";
    document.getElementById("Main").innerHTML = "";
    word = words[Math.floor(Math.random() * words.length)];
    bestGuess = "";
    for(i = 0; i < word.length; i++){
        bestGuess += "_";
    }
    formatOutput();
    lives = maxLives;
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    console.log(word);
    previousGuesses = [];
}

function formatOutput(){
    document.getElementById("bestGuess").innerHTML = bestGuess.split("").join(" ");
}


function addWord(wta){
    if(words[1] == standardWords[1]){
        words = [];
        words.push(wta.toLowerCase().trim());
        document.getElementById("bestGuess").innerHTML = words;
    }
    else{
        words.push(wta.toLowerCase().trim());
        document.getElementById("bestGuess").innerHTML = words;
    }
}

function undo(){
    if(state == "AddWords"){
        words.pop();
        document.getElementById("bestGuess").innerHTML = words;
    }
}

function customWords(){
    if (state == "NewGame"){
            state = "AddWords";
            document.getElementById("winText").innerHTML = "Enter new words";
            document.getElementById("bestGuess").innerHTML = words;
            document.getElementById("Main").innerHTML = "";
    }
}

function setLivesUp(){
    if(state == "NewGame" || state == "AddWords"){
        maxLives++;
        lives = maxLives;
        document.getElementById("lives").innerHTML = "Lives: " + lives;
    }
}
function setLivesDown(){
    if(state == "NewGame" || state == "AddWords"){
        maxLives = Math.max(maxLives - 1, 1);
        lives = maxLives;
        document.getElementById("lives").innerHTML = "Lives: " + lives;
    }
}