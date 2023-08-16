const screen1 = document.querySelector(".screen1");
const closedCookie = screen1.querySelector("a");
const screen2 = document.querySelector(".screen2");
const openedCookie = screen2.querySelector("a");
let phrase = screen2.querySelector("p");
let phrases = [
  "As melhores coisas não são coisas, mas momentos, pessoas e sentimentos.",
  "Deixe que o vento leve o desnecessário e traga boa novas.",
  "Vai na fé, vai a pé, vai do jeito que der.",
  "O final feliz é a gente que faz.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

closedCookie.addEventListener("click", readPhrase);
openedCookie.addEventListener("click", changePhrase);

function readPhrase(event) {
  event.preventDefault();
  toggleScreen();

  let index = randomPhrases(0, phrases.length - 1);
  phrase.innerText = phrases[index];
}

function randomPhrases(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let phrase = Math.floor(step2) + min;
  return phrase;
}

function changePhrase(event) {
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
