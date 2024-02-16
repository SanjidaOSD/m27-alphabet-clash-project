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
        console.log('you got a point', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost your life');
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
    hiddenElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}