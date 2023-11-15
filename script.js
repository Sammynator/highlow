
const random = Math.floor(Math.random() * (1, 20));
console.log(random);

const guessSubmit = document.getElementById("guessSubmit");
guessSubmit.addEventListener('click', spellCheck);
guessInput.addEventListener('keypress', event => {
    if (event.key === 'Enter'){
        spellCheck();
    }
})

// checks if input is formatted correctly
function spellCheck(){
    const guessInput = document.getElementById("guessInput");
  
    if (parseInt(guessInput.value) <= 20 && parseInt(guessInput.value) >= 1){
        winCheck(guessInput.value);
    }
    else if (parseInt(guessInput.value) == 69){
        message.textContent = "Nice."
    }
    else if (parseInt(guessInput.value) == 420){
        message.textContent = "Nide, dude."
    }
    else if (parseInt(guessInput.value) > 20 || parseInt(guessInput.value) < 1){
        message.textContent = "Not a valid number.";
    }
    else if (isNaN(guessInput) === true ){
        message.textContent = "That is not a number. Try again.";
    }

    guessInput.value = '';
}

// Helper function that checks if number is correct
function winCheck(x){

        if (x < random && x >= 1){
            message.textContent = "Try a higher number!";
        }
        else if (x > random && x <= 20){
            message.textContent = "Try a lower number!";
        }
        else if (x == random){
            message.textContent = "Correct, you got it!";
            message.style.color = "green"
            setGameOver()
        }
        else{
            spellCheck();
        }

        x = '';

}
    
// Helper function that sets game to over
function setGameOver() {
    guessInput.disabled = true;
    guessSubmit.disabled = true;
    document.getElementById("guessSubmit").style.display = "none";
    document.getElementById("playAgain").style.display = "inline-block";
}



    
       


