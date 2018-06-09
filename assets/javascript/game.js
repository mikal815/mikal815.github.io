document.addEventListener('DOMContentLoaded', function(){
        
    var guessesLeftElem = document.getElementById('guesses-left');
    var placeholdersElem = document.getElementById('placeholders');
    var guessedLettersElem = document.getElementById('guessed-letters');
    var resetGameButtonElem = document.getElementById('start');  
    var winsElem = document.getElementById('wins');
    var lossesElem = document.getElementById('losses');  
    
    //Variables
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 12;
    var gameRunning = false;
    var words = ['strawberry', 'chocolate', 'mint', 'vanilla', 'pistachio', 'cherry', 'mango', 'neapolitan', 'coconut'];
    var pickedWord = '';
    var pickedWordUnderscores = [];
    var lettersGuessedCorrect = [];
    var lettersGuessedWrong = [];
    
    //Reset Game
    function resetGame () {
        gameRunning = "true"
        guessesRemaining = 12;
        lettersGuessedCorrect = [];
        lettersGuessedWrong = [];
        pickedWordUnderscores = [];
        pickedWord = words[Math.floor(Math.random() * (words.length))];
        // pickedWord = words[Math.floor(Math.random() * words.length)];
        
        for (var i = 0; i < pickedWord.length; i++) {
            pickedWordUnderscores.push("_");
        }
    
        
        guessesLeftElem.textContent = guessesRemaining;
        placeholdersElem.textContent = pickedWordUnderscores.join("");
        guessedLettersElem.textContent = lettersGuessedWrong;
        // document.getElementById("start").onkeydown = resetGame ();
        
    };
    
    function guessLetter(letter) {
        
        lettersGuessedCorrect.push(letter);
            
    
            for (var i = 0; i < pickedWord.length; i++) {
                if (pickedWord[i] === letter) {
                    pickedWordUnderscores[i] = letter;
                }
            }
    
        placeholdersElem.textContent = pickedWordUnderscores.join("");
        guessedWrong(letter);    
    }
    
    function guessedWrong(letter) {
        if (pickedWordUnderscores.indexOf(letter) === -1) {
            guessesRemaining--;
            lettersGuessedWrong.push(letter);
            guessedLettersElem.textContent = lettersGuessedWrong.join("");
            guessesLeftElem.textContent = guessesRemaining;
        }
        gameOver();
    }
    
    function gameOver () {
        if (guessesRemaining === 0) {
            gameRunning = false;
            losses++
            lossesElem.textContent = losses;
        }
        win();
    }
    
    function win () {
        if (pickedWord === pickedWordUnderscores.join("")) {
            gameRunning = false;
            wins++;
            winsElem.textContent = wins;
        }
    }
    
    resetGameButtonElem.addEventListener("click", resetGame);
    
    document.onkeyup = function(event) {
        
        guessLetter(event.key);
    }
    
    
    
    
    });