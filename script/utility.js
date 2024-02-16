function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundcolorById(elementId){
const element=document.getElementById(elementId);
element.classList.add('bg-orange-400');
}

function removeBackgroundId(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvxyz';
    const alphabets=alphabetString.split('');

    const randomNumer =Math.random()*25;
    const index =Math.round(randomNumer);

    const alphabet=alphabets[index];
    return alphabet;

}

/*function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvxyz';
    const alphabets=alphabetString.split('');
    //console.log(alphabets);

    //get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index =Math.round(randomNumber);
   // console.log(index);

    const alphabet=alphabets[index];
    //console.log(index,alphabet);
    return alphabet;

}*/