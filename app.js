const apiCall = 'https://api.adviceslip.com/advice';

const btnDice = document.querySelector('.btn-dice')
const containerLoad = document.querySelector('.loading-card')
const idAdvice = document.querySelector('.num-advice');
const quoteText = document.querySelector('.quote-text')


async function dataQuote () {

    const ans = await fetch(`${apiCall}`);
    const data = await ans.json();
    const advice = data.slip.advice;
    const id = data.slip.id;

    containerLoad.innerHTML=`
    <h1 class="num-advice">ADVICE #${id}</h1>

    <p class="quote-text">"${advice}"</p>`
}

// load initial item

window.addEventListener("DOMContentLoaded", ()=>{
    dataQuote();
    
})


btnDice.addEventListener('click',(e)=>{
    e.preventDefault()
    dataQuote();
})