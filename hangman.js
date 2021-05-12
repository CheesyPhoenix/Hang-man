let word = "";
let bestGuess = ""

const words = [
    "souple",
    "hybridized",
    "crossstringed",
    "diurnally",
    "firm",
    "jillaroo",
    "wandlike",
    "epoch",
    "triggerfish",
    "conspirator"
]

function formSubmit(){
    var data = Object.fromEntries(new FormData(document.querySelector("form")).entries());
    document.getElementById("main").innerHTML = data.inputField;
    console.log(data)
    document.form.reset();

    var guess = data.inputField;

    //Game Loop
    ///////////////////////////////
    if(guess.length < 2){
        if(word.includes(guess)){
            console.log(guess);
        }
    }

    ///////////////////////////////

    return false;
}

function newGame(){
    word = words[Math.floor(Math.random() * words.length)];
    bestGuess = "";
    for(i = 0; i < word.length; i++){
        bestGuess += "_ ";
    }
    document.getElementById("bestGuess").innerHTML = bestGuess;

    console.log(word);
}


