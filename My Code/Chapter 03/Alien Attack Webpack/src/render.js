import { state } from "./gameState";
import { alien, cannon, missile } from "./gameObjects";

export function render() {
    //Position the alien
    alien.style.left = state.alienX + "px";
    alien.style.top = state.alienY + "px";

    //Position the cannon
    cannon.style.left = state.guessX + "px";

    //Position the missile
    missile.style.left = state.guessX + "px";
    missile.style.top = state.guessY + "px";
}