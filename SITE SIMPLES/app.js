'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function (){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    document.querySelector('#task').classList.add('list');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
})