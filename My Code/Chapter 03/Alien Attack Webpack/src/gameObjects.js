
import { clickHandler } from "./userInput";

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