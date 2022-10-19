import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

const number = document.querySelector(".number--js");
const add = document.querySelector(".add--js");
const remove = document.querySelector(".remove--js");
const key = new Date().toLocaleString().slice(0, 10);

let currentNumber = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  currentNumber = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}
number.innerHTML = currentNumber;

add.addEventListener("click", () => {
  currentNumber++;
  number.innerHTML = currentNumber;
  localStorage.setItem(key, currentNumber);
});

remove.addEventListener("click", () => {
  if (currentNumber > 0) {
    currentNumber--;
  }
  number.innerHTML = currentNumber;
  localStorage.setItem(key, currentNumber);
});

const result = document.querySelector(".result--js");
result.innerHTML = `On ${key} you drank ${currentNumber} glasses of water.`;