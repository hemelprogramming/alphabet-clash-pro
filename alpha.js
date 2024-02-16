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
  // console.log('Random alphabet', alphabet);
  // dispaly show
  const currentAlphabetById = document.getElementById('current-alphabet');
  currentAlphabetById.innerText = alphabet;
  // set background color
  setBackgroundColor(alphabet);
}
function play() {
  // hide everything show background
  hideElementById('home-screen');
  hideElementById('score-show');
  showElementById('play-graound-id');
  // reset score and life
  setTextElementById('current-life', 5);
  setTextElementById('current-score', 0);
  continueGame();
}
function gameOVer() {
  hideElementById('play-graound-id');
  showElementById('score-show');
  // final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementById('final-score', lastScore);
  setTextElementById('final-score', lastScore);
  // clear the sleced last alphabet
  const currentAlphabet = currentTextAlphabetById('current-alphabet');
  removeBackgroundColor(currentAlphabet);
}
function currentTextAlphabetById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
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
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-yellow-300');
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
//key handeler
function handelKeyboardKeyupEvent(event) {
  const playerPress = event.key;
  // console.log('plyer press', playerPress);
  // get expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPress, expectedAlphabet);
  // check matched or not
  if (playerPress === expectedAlphabet) {
    // console.log('You get a point');
    const currentScore = getTextElementValueById('current-score');
    const updateScore = currentScore + 1;
    setTextElementById('current-score', updateScore);
    // --------------------------------------------------
    // // update score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // new score
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    // console.log('You missed.you lost a life');
    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife - 1;
    setTextElementById('current-life', updateLife);
    if (updateLife === 0) {
      gameOVer();
    }
    // stop the game
    if (playerPress === 'Escape') {
      gameOVer();
    }
    // --------------------------------------------------
    // // life update
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // new life
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener('keyup', handelKeyboardKeyupEvent);
