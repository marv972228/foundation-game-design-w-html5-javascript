import { state } from "./gameState";
import { alien, missile, explosion, output } from "./gameObjects";
import { render } from "./render";
import { endGame } from "./endGame";

export function playGame() {
  state.shotsRemaining = state.shotsRemaining - 1;
  state.shotsMade = state.shotsMade + 1;
  state.gameState =
    " Shots: " + state.shotsMade + ", Remaining: " + state.shotsRemaining;

  //Find out whether the player's x and y guesses are inside
  //The alien's area
  if (state.guessX >= state.alienX && state.guessX <= state.alienX + 20) {
    //Yes, it's within the X range, so now let's
    //check the Y range

    if (state.guessY >= state.alienY && state.guessY <= state.alienY + 20) {
      //It's in both the X and Y range, so it's a hit!
      state.gameWon = true;
      explosion.style.left = state.alienX + "px";
      explosion.style.top = state.alienY + "px";
      explosion.style.display = "block";
      alien.style.display = "none";
      missile.style.display = "none";
      endGame();
    }
  } else {
    output.innerHTML = "Miss!" + state.gameState;

    //Check for the end of the game
    if (state.shotsRemaining < 1) {
      endGame();
    }
  }

  //Update the alien's position if the
  //game hasn't yet been won
  if (!state.gameWon) {
    //Update the alien's X position
    state.alienX = Math.floor(Math.random() * 281);

    //Add 30 to the new Y position so that
    //the alien moves down towards earth
    state.alienY += 30;
  }

  //Render the new game state
  render();
  console.log(`X: ${state.alienX} Y: ${state.alienY}`);
}
