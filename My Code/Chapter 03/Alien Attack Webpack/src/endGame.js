import { state } from "./gameState";
import { output } from "./gameObjects";

export function endGame() {
    if (state.gameWon) {
        output.innerHTML =
            "Hit! You saved the earth!" +
            "<br>" +
            "It only took you " +
            state.shotsMade +
            " shots.";
    } else {
        output.innerHTML = "You lost!" + "<br>" + "The earth has been invaded!";
    }
}