'use strict';

/*
document.querySelector('.number').textContent;
document.querySelector('.score').textContent = 5;
// document.querySelector('.guess').value = 0;

let guess = document.querySelector('.guess').value;

if (guess === 5) {
    document.querySelector('.number').textContent = 5;
    console.log(document.querySelector('.score'));
}
*/

let hiddenNum = Math.trunc(Math.random() * 20) + 1;
let prevValidInput = '';
let realPrevValidInput = '';
let currentInput = '';
let isValid = (currentInput) => ((Number (currentInput) >= 1) && (Number (currentInput) <= 20)) || currentInput === ''; 
let score = 10;
let highscore = 0;
// document.querySelector('.number').textContent = hiddenNum;

function checkHandler() {
    const guessNum = Number (document.querySelector('.guess').value);
    let messageElement = document.querySelector('.message');
    let bodyElement = document.querySelector('body');
    let scoreElement = document.querySelector('.score');

    if (!guessNum) {
        messageElement.textContent = 'No number was entered, try again.';
        bodyElement.style.backgroundColor = 'red';
    } else if (guessNum < 1 || guessNum > 20) {

    } else if (guessNum === hiddenNum) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        messageElement.textContent = 'Correct!!!';
        messageElement.style.fontSize = '32px';
        bodyElement.style.backgroundColor = 'green';
        document.querySelector('.number').textContent = hiddenNum;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess').style.backgroundColor = '#eee';
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    } else if (guessNum > hiddenNum) {
        score--;
        scoreElement.textContent = score;
        console.log(inputFieldGuess);
        inputFieldGuess.value = '';
        messageElement.textContent = `${guessNum}? TOO HIGH.`;
        bodyElement.style.backgroundColor = 'red';
    } else if (guessNum < hiddenNum) {
        score--;
        scoreElement.textContent = score;
        console.log(inputFieldGuess);
        inputFieldGuess.value = '';
        messageElement.textContent = `${guessNum}? TOO LOW.`;
        bodyElement.style.backgroundColor = 'red';
    } else {
        messageElement.textContent = 'Something is wrong.';
        bodyElement.style.backgroundColor = 'red';
    }

    if (score === 0) {
        messageElement.textContent = 'You lost :(';
        messageElement.style.fontSize = '32px';
        bodyElement.style.backgroundColor = 'red';
        document.querySelector('.number').textContent = hiddenNum;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.guess').style.backgroundColor = '#eee';
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
    }
    console.log(guessNum, typeof guessNum);
}

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkHandler);

let inputFieldGuess = document.querySelector('.guess');
inputFieldGuess.addEventListener('keydown', function (event) {
    currentInput = prevValidInput + event.key;
    // console.log(event.key);
    // console.log(currentInput + ', ' + prevValidInput + '\n');
    if (event.key === 'Enter') {
        checkHandler();
    } else if (event.key === 'Backspace' || event.key === 'ArrowLeft' ||
               event.key === 'ArrowRight' || event.key === 'ArrowUp' ||
               event.key === 'ArrowDown') { 
        // Whitelist of non-numerical accepted keystrokes
        console.log(event.key);
    }/* else if (event.key >= '0' && event.key <= '9' && isValid(currentInput)) {
        console.log('Input accepted.')
        console.log(currentInput);
        //console.log(event.key);
    } else {
        console.log('Illegal Input prevented.');
        event.preventDefault();
    }*/
    
    /* let guessLength = inputFieldGuess.value.length;
    inputFieldGuess.selectionStart = 0;
    inputFieldGuess.selectionEnd = 0;*/
    
});
inputFieldGuess.addEventListener('input', function () {
     // prevValidInput is previous in relation to the keydown event listener,
     // but is the current in relation to the input event listener.
    prevValidInput = inputFieldGuess.value;
    if (!isValid(prevValidInput)) {
        document.querySelector('.guess').value = realPrevValidInput;
        prevValidInput = realPrevValidInput;
    }
    /*
    let guessLength = inputFieldGuess.value.length;
    inputFieldGuess.selectionStart = guessLength;
    inputFieldGuess.selectionEnd =guessLength; 
    */
    console.log(prevValidInput, realPrevValidInput);
    realPrevValidInput = prevValidInput;
});

let againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
    hiddenNum = Math.trunc(Math.random() * 20) + 1;
    score = 10;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').style.backgroundColor = '#222222';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});
