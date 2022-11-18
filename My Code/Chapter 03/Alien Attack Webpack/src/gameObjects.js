import { state } from "./gameState";
import { playGame } from "./index";

export const cannon = document.querySelector("#cannon");
export const alien = document.querySelector("#alien");
export const missile = document.querySelector("#missile");
export const explosion = document.querySelector("#explosion");

export const inputX = document.querySelector("#inputX");
export const inputY = document.querySelector("#inputY");
export const output = document.querySelector("#output");

//The button
export const button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


function clickHandler() {
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