// function play() {
//   const homeScreen = document.getElementById('home-screen');
//   // home section
//   homeScreen.classList.add('hidden');
//   // play ground section
//   const playGraound = document.getElementById('play-graound-id');
//   playGraound.classList.remove('hidden');
// }

// call function

// continue game
function continueGame() {
  const alphabet = getRendomAlphabet();
  // console.log(alphabet);
  // dispaly show
  const currentAlphabetById = document.getElementById('current-alphabet');
  currentAlphabetById.innerText = alphabet;
  // set background color
  setBackgroundColor(alphabet);
}
function play() {
  hideElementById('home-screen');
  showElementById('play-graound-id');
  continueGame();
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function getRendomAlphabet() {
  const alphabetString = 'abcdefghijklmnopurstqvwxyz';
  const alphasbes = alphabetString.split('');
  // console.log(alphasbes);

  // random Numbar
  const randamNumbar = Math.random() * 25;
  const index = Math.round(randamNumbar);
  // console.log(index);
  const alphabetvalue = alphasbes[index];
  // console.log(index, alphabetvalue);
  return alphabetvalue;
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-yellow-300');
}
