import { createInformationDialog } from "./information-dialog.js";
const { ipcRenderer } = require('electron');

let devMode = '';
let pinMode = '';
let contentInHTMLDevMode = ``;
let contentInHTMLPinMode = ``;

updateInfoDialogDevMode();
updateInfoDialogPinMode();

function updateInfoDialogDevMode() {
    devMode = localStorage.getItem('devMode');
    contentInHTMLDevMode = `
        Dev Mode: ${devMode}
        <hr>
        `;
}

function updateInfoDialogPinMode() {
    pinMode = localStorage.getItem('pinMode');
    contentInHTMLPinMode = `
        Pin Mode: ${pinMode}
        <hr>
        `;
}

function separationOfResponsibilityBetweenFields(quickMode) {
    if (quickMode === 'dev') {
        let devModeIcon = document.getElementById('quick-mode-icon-0');

        devMode = devMode == 'Off' ? 'On' : 'Off';
        localStorage.setItem('devMode', devMode);

        devModeIcon.style.opacity = devMode === 'On' ? 1 : 0.2;
    }
    else {
        let pinModeIcon = document.getElementById('quick-mode-icon-1');

        pinMode = pinMode == 'Off' ? 'On' : 'Off';
        localStorage.setItem('pinMode', pinMode);
        ipcRenderer.send('minimizeAndMaximizeMode', pinMode);

        pinModeIcon.style.opacity = pinMode === 'Off' ? 0.2 : 1;
    }
}

export function createQuickModesIcon() {
    let quickModes = document.getElementsByClassName('quick-mode-icon');

    for (let i = 0; i < quickModes.length; i++) {
        let currentMode = i === 0 ? 'dev' : 'pin';

        let quickMode = document.createElement('img');
        quickMode.setAttribute('id', `quick-mode-icon-${i}`);
        quickMode.src = i === 0 ? '../assets/img/icons/dev.png' : '../assets/img/icons/pin.png';
        quickMode.style.width = '18px';
        quickMode.style.height = '18px';

        if (currentMode === 'dev') {
            quickMode.style.opacity = devMode === 'On' ? 1 : 0.2;
        } else {
            quickMode.style.opacity = pinMode === 'Off' ? 0.2 : 1;
        }

        quickMode.addEventListener('click', function () {
            separationOfResponsibilityBetweenFields(currentMode);
        });

        quickMode.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            let contentInHTML = '';

            if (currentMode === 'dev') {
                updateInfoDialogDevMode();
                contentInHTML = contentInHTMLDevMode;
            } else {
                updateInfoDialogPinMode();
                contentInHTML = contentInHTMLPinMode;
            }

            createInformationDialog(contentInHTML);
        });

        // Adiciona o efeito de hover ao passar o mouse
        quickMode.addEventListener('mouseenter', function () {
            quickMode.style.transition = 'transform 0.5s ease';
            quickMode.style.transform = 'scale(1.2)';
            quickMode.style.cursor = 'pointer';
        });

        // Remove o efeito de hover quando o mouse sai
        quickMode.addEventListener('mouseleave', function () {
            quickMode.style.transition = 'transform 0.5s ease';
            quickMode.style.transform = 'scale(1)';
        });

        quickModes[i].appendChild(quickMode);
    }
}