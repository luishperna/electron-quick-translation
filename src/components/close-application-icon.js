const { ipcRenderer } = require('electron');

export function createCloseApplicationButton() {
    let closeApplicationIcons = document.getElementsByClassName('close-application-icon');

    for (let i = 0; i < closeApplicationIcons.length; i++) {
        let closeApplicationIcon = document.createElement('img');
        closeApplicationIcon.src = '../assets/img/icons/close.png';
        closeApplicationIcon.style.width = '18px';
        closeApplicationIcon.style.height = '18px';

        // Adiciona o evento para fechar o aplicativo
        closeApplicationIcon.addEventListener('click', function () {
            ipcRenderer.send('closeApplication');
        });

        // Adiciona o efeito de hover ao passar o mouse
        closeApplicationIcon.addEventListener('mouseenter', function () {
            closeApplicationIcon.style.transform = 'scale(1.2)';
            closeApplicationIcon.style.cursor = 'pointer';
        });

        // Remove o efeito de hover quando o mouse sai
        closeApplicationIcon.addEventListener('mouseleave', function () {
            closeApplicationIcon.style.transform = 'scale(1)';
        });

        closeApplicationIcons[i].appendChild(closeApplicationIcon);
    }
}