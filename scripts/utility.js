function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
  
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-400');
    
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-red-400');
    
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
    
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}