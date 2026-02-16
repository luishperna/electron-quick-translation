import { createDivWithClass } from "../helpers/element/div-with-class.js";
import { setDeeplApiKey, getDeeplApiKey, validateDeeplApiKey } from "../../core/formations/set-and-get-api-key.js";

export function createApiKeyField() {
    const container = createDivWithClass('api-key-container');
    container.style.marginTop = '15px';
    container.style.marginBottom = '15px';

    const title = document.createElement('h3');
    title.textContent = 'DeepL API Key:';
    title.style.marginTop = '15px';
    title.style.marginBottom = '5px';
    title.style.fontSize = '12px';
    title.style.fontWeight = 'normal';
    title.style.letterSpacing = '1px';
    title.style.color = '#FFFFFF';
    title.style.opacity = 0.7;
    title.style.textAlign = 'center';

    const inputWrapper = createDivWithClass('input-wrapper');
    inputWrapper.style.position = 'relative';
    inputWrapper.style.marginBottom = '5px';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Paste your API Key here';
    input.value = getDeeplApiKey();
    input.style.width = '100%';
    input.style.height = '32px';
    input.style.fontSize = '12px';
    input.style.fontWeight = 'normal';
    input.style.letterSpacing = '1px';
    input.style.border = 'none';
    input.style.borderRadius = '5px';
    input.style.background = '#202020';
    input.style.color = '#FFFFFF';
    input.style.opacity = 0.7;
    input.style.padding = '0 10px';
    input.style.boxSizing = 'border-box';
    input.style.fontFamily = 'sans-serif';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save API Key';
    saveButton.style.width = '100%';
    saveButton.style.height = '32px';
    saveButton.style.fontSize = '12px';
    saveButton.style.fontWeight = 'normal';
    saveButton.style.letterSpacing = '1px';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '5px';
    saveButton.style.background = '#202020';
    saveButton.style.color = '#FFFFFF';
    saveButton.style.opacity = 0.7;
    saveButton.style.cursor = 'pointer';
    saveButton.style.marginTop = '5px';

    saveButton.addEventListener('mouseenter', () => {
        saveButton.style.opacity = 1;
    });

    saveButton.addEventListener('mouseleave', () => {
        saveButton.style.opacity = 0.7;
    });

    const defaultButtonText = 'Save API Key';
    saveButton.addEventListener('click', () => {
        const apiKey = input.value.trim();

        if (!apiKey) {
            saveButton.textContent = '⚠️ Please enter an API Key';
            saveButton.style.color = '#ff9800';
            setTimeout(() => {
                saveButton.textContent = defaultButtonText;
                saveButton.style.color = '#FFFFFF';
            }, 3000);
            return;
        }

        if (!validateDeeplApiKey(apiKey)) {
            saveButton.textContent = '❌ Invalid API Key';
            saveButton.style.color = '#f44336';
            setTimeout(() => {
                saveButton.textContent = defaultButtonText;
                saveButton.style.color = '#FFFFFF';
            }, 3000);
            return;
        }

        setDeeplApiKey(apiKey);
        saveButton.textContent = '✅ API Key saved successfully!';
        saveButton.style.color = '#4caf50';
        setTimeout(() => {
            saveButton.textContent = defaultButtonText;
            saveButton.style.color = '#FFFFFF';
        }, 3000);
    });

    const helpText = document.createElement('div');
    helpText.style.marginTop = '4px';
    helpText.style.textAlign = 'center';
    helpText.style.fontSize = '10px';
    helpText.style.color = '#FFFFFF';
    helpText.style.opacity = 0.7;

    const helpLabel = document.createTextNode('Get free API Key at ');

    const helpLink = document.createElement('a');
    helpLink.href = '#';
    helpLink.textContent = 'deepl.com/pro-api';
    helpLink.style.color = '#FFFFFF';
    helpLink.style.textDecoration = 'underline';
    helpLink.style.cursor = 'pointer';

    helpLink.addEventListener('click', (e) => {
        e.preventDefault();
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('open-external-link', 'https://www.deepl.com/pro-api');
    });

    helpText.appendChild(helpLabel);
    helpText.appendChild(helpLink);

    inputWrapper.appendChild(input);
    container.appendChild(title);
    container.appendChild(inputWrapper);
    container.appendChild(saveButton);
    container.appendChild(helpText);

    return container;
}
