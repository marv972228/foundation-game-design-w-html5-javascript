import { output } from "./gameObjects";
import { state } from "./gameState";
import { playGame } from "./index";


export function clickHandler() {
    validateInput();
}

function validateInput() {
    state.guessX = parseInt(inputX.value);
    state.guessY = parseInt(inputY.value);
    if (isNaN(state.guessX) || isNaN(state.guessY)) {
        output.innerHTML = "Please enter a number.";
    } else if (state.guessX > 300 || state.guessY > 300) {
        output.innerHTML = "Please enter a number less than 300.";
    } else {
        playGame();
    }
}