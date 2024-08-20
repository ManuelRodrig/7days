let numberToGuess = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 3;

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const resultElement = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    const guessButton = document.getElementById('guessButton');
    const restartButton = document.getElementById('restartButton');

    if (userGuess == numberToGuess) {
        resultElement.textContent = "¡Felicidades! Adivinaste el número.";
        guessButton.disabled = true;
        restartButton.style.display = "inline";
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            resultElement.textContent = "Lo siento, ese no es el número. Intenta de nuevo.";
            attemptsElement.textContent = `Te quedan ${attemptsLeft} intento(s).`;
        } else {
            resultElement.textContent = `Lo siento, te has quedado sin intentos. El número era ${numberToGuess}.`;
            guessButton.disabled = true;
            restartButton.style.display = "inline";
        }
    }
}

function restartGame() {
    numberToGuess = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 3;

    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('guessButton').disabled = false;
    document.getElementById('restartButton').style.display = 'none';
}
