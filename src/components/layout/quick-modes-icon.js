import { createInformationDialog } from "./information-dialog.js";
const { ipcRenderer } = require('electron');

let contentInHTMLHelpMode =
    `
    HELP - Quick tips:
    <hr>
    • ENTER for translate;<br>
    • CTRL + T minimize or maximize;<br>
    • Overlay app on PIN ICON;<br>
    • <strong>.</strong> (dot) enable dev mode.<br><br>
    Find out more here <a id="external-link" href="https://github.com/luishperna/electron-quick-translation">documentation</a>.
    `;

let pinMode = '';
let contentInHTMLPinMode = ``;

updateInfoDialogPinMode();

function updateInfoDialogPinMode() {
    pinMode = localStorage.getItem('pinMode');
    contentInHTMLPinMode = `
        Pin Mode: ${pinMode}
        <hr>
        Enable the mode to overlay the app.
        `;
}

function separationOfResponsibilityBetweenFields(quickMode) {
    switch (quickMode) {
        case 'help':
            createInformationDialog(contentInHTMLHelpMode);

            document.getElementById('external-link').addEventListener('click', function (event) {
                event.preventDefault();
                ipcRenderer.send('open-external-link', this.href);
            });
            break;
        case 'pin':
            let pinModeIcon = document.getElementById('quick-mode-icon-1');

            pinMode = pinMode == 'Off' ? 'On' : 'Off';
            localStorage.setItem('pinMode', pinMode);
            ipcRenderer.send('minimizeAndMaximizeMode', pinMode);

            pinModeIcon.style.opacity = pinMode === 'Off' ? 0.2 : 1;
            break;
        default:
            break;
    }
}

export function createQuickModesIcon() {
    let quickModes = document.getElementsByClassName('quick-mode-icon');

    for (let i = 0; i < quickModes.length; i++) {
        let currentMode = i === 0 ? 'help' : 'pin';

        let quickMode = document.createElement('img');
        quickMode.setAttribute('id', `quick-mode-icon-${i}`);
        quickMode.src = i === 0 ? '../assets/img/icons/help.png' : '../assets/img/icons/pin.png';
        quickMode.style.width = '18px';
        quickMode.style.height = '18px';

        if (currentMode === 'pin') {
            quickMode.style.opacity = pinMode === 'On' ? 1 : 0.2;
        }

        quickMode.addEventListener('click', function () {
            separationOfResponsibilityBetweenFields(currentMode);
        });

        quickMode.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            let contentInHTML = '';

            switch (currentMode) {
                case 'help':
                    contentInHTML = contentInHTMLHelpMode;
                    break;
                case 'pin':
                    updateInfoDialogPinMode();
                    contentInHTML = contentInHTMLPinMode;
                    break;
                default:
                    break;
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