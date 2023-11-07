import { setPinModeState } from "../../core/preferences/pin-mode/set-and-get-pin-mode.js";
const { ipcRenderer } = require('electron');

export function createCloseApplicationButton() {
    let closeApplicationIcons = document.getElementsByClassName('close-application-icon');

    for (let i = 0; i < closeApplicationIcons.length; i++) {
        let closeApplicationIcon = document.createElement('img');
        closeApplicationIcon.src = '../assets/img/icons/close.png';
        closeApplicationIcon.style.width = '18px';
        closeApplicationIcon.style.height = '18px';

        // Adicionando evento para fechar o aplicativo
        closeApplicationIcon.addEventListener('click', function () {
            setPinModeState('Off');
            ipcRenderer.send('closeApplication');
        });

        // Adicionando efeito de hover ao passar o mouse
        closeApplicationIcon.addEventListener('mouseenter', function () {
            closeApplicationIcon.style.transition = 'transform 0.5s ease';
            closeApplicationIcon.style.transform = 'scale(1.2)';
            closeApplicationIcon.style.cursor = 'pointer';
        });

        // Removendo efeito de hover quando o mouse sai
        closeApplicationIcon.addEventListener('mouseleave', function () {
            closeApplicationIcon.style.transition = 'transform 0.5s ease';
            closeApplicationIcon.style.transform = 'scale(1)';
        });

        closeApplicationIcons[i].appendChild(closeApplicationIcon);
    }
}