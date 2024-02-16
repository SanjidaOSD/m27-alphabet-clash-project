// function play() {

//     // hide part:
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show part:
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }




function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed:', playerPressed);

    // get the expected to press:
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed,expectedAlphabet);


    if (playerPressed === expectedAlphabet) {
        // console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        // -------------------------------------------------

// another way:
        // update score:
        // 1.get the current score:
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        //  const currentScore = parseInt(currentScoreText);
        //  console.log(currentScore);

        // // 2. increase the score by 1:
        // const newScore = currentScore + 1;

        // //3. show the update score:
        // currentScoreElement.innerText = newScore;
        // ------------------------------------------


        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost your life');

       const currentLife = getTextElementValueById('current-life');
       const updatedLife = currentLife - 1;
       setElementValueById('current-life', updatedLife)

       
// game over
        if (updatedLife === 0){
         gameOver();
            
        }


         // -------------------------------------------------
        // another way:

        //1. get the current life number:
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // console.log(currentLife);
        
        // // 2.reduce the life count:
        // const newLife = currentLife - 1;

        // // 3.display the update count:
        // currentLifeElement.innerText = newLife;
        // ---------------------------------------------

    }

}
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet:', alphabet)

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set background color:
    setBackgroundColorById(alphabet)
}

function play(){
    // hide everything show only the playground:
    hiddenElementById('home-screen');
    hiddenElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    continueGame()
    setElementValueById('current-life',5);
    setElementValueById('current-score',0);
}

function gameOver(){
hiddenElementById('play-ground');
showElementById('final-score');

// update final score:
const lastScore = getTextElementValueById('current-score');
console.log(lastScore)
setElementValueById('last-score', lastScore);

// clear the last selected alphabet highlight:
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet)

    
}