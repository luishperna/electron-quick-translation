import { reserveLanguages } from "./change-between-languages.js";

export function createReverseLanguages() {
    let reverseLanguages = document.getElementsByClassName('reverse-languages');

    for (let i = 0; i < reverseLanguages.length; i++) {
        let buttonReverseLanguages = document.createElement('button');
        buttonReverseLanguages.src = '../assets/img/icons/reverse.png';
        buttonReverseLanguages.style.width = '20px';
        buttonReverseLanguages.style.height = '20px';
        buttonReverseLanguages.style.background = 'transparent';
        buttonReverseLanguages.style.border = 'none';
        buttonReverseLanguages.style.backgroundImage = 'url(../assets/img/icons/reverse.png)';
        buttonReverseLanguages.style.backgroundSize = 'cover'; // Ajustando o tamanho da imagem para cobrir o botão completamente

        buttonReverseLanguages.addEventListener('click', reserveLanguages);

        reverseLanguages[i].appendChild(buttonReverseLanguages);
    }
}