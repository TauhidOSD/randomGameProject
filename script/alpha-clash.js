/*function play(){
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection=document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}*/
function handleKeyboardkeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed==='Escape'){
        gameOver();
    }
   //check the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
   // console.log(playerPressed,currentAlphabet) ;

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore=getTextElementValueBYId('current-score');
        const newScore=currentScore + 1;
        setTextElementById('current-score',newScore);

        

    //     const currentScoreElement=document.getElementById('current-score');
    //     const currentScoreText=currentScoreElement.innerText;
    //     const currentScore =parseInt(currentScoreText);
    //     console.log(currentScore);
       

    //    // currentScoreElement.innerText=newScore;

        // const newScore=currentScore + 1;
    //     currentScoreElement.innerText=newScore;
        

       //console.log('you have pressed correcly',expectedAlphabet);
        removeBackgroundId(expectedAlphabet);
        continueGame();
    }else{


         console.log('you missed. you lost a life');
         const currentLife=getTextElementValueBYId('current-life');
         const updatedLife=currentLife - 1;
         setTextElementById('current-life',updatedLife);

         if(updatedLife ===0){
           gameOver();
         }

        // const currentLifeElement =document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // const newLife=currentLife - 1; 
        // currentLifeElement.innerText=newLife;
    }


}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardkeyUpEvent);

function continueGame(){
    const alphabet=getARandomAlphabet();
    // console.log('your random alphabet is: ',alphabet);
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundcolorById(alphabet);
}



function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementById('current-life',5);
    setTextElementById('current-score',0);
    continueGame();
}
function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');
   //get last score
   const lastScore =getTextElementValueBYId('current-score');
   console.log(lastScore);
   setTextElementById('last-score',lastScore);

   //clear the last selected alphabet highlight
   const currentAlphabet=getElementTextById('current-alphabet'); 
   console.log(currentAlphabet);
   removeBackgroundId(currentAlphabet);
}