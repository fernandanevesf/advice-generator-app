'use strict'

const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const refreshBtn = document.querySelector('#refresh');

function getAdvice(){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
    .then ((response) => response.json())
    .then ((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;

        adviceId.innerHTML = `Advice #${dataId}`;
        adviceText.innerHTML = dataAdvice;
    })
}

window.addEventListener("load", getAdvice);

refreshBtn.addEventListener("click", getAdvice);