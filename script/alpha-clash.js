/*function play(){
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection=document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}*/
function continueGame(){
    const alphabet=getARandomAlphabet();
    console.log('your random alphabet is: ',alphabet);
    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundcolorById(alphabet);
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}