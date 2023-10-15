import { getLanguageNameByCode, getSourceLanguageCode, getTargetLanguageCode } from "../../core/languages/set-and-get-languages.js";
import { createWarningMessage } from "./warning-message.js";
import { translateAsync } from "../../core/translation/translate.js";

let sourceLanguageCode = getSourceLanguageCode();
let targetLanguageCode = getTargetLanguageCode();

export function setLanguageTitleSource(languageName) {
    document.getElementById('language-title-source').textContent = languageName;
}

export function setLanguageTitleTarget(languageName) {
    document.getElementById('language-title-target').textContent = languageName;
}

export function cleanTranslationFields() {
    document.getElementById('text-in-selected-language-source').value = "";
    document.getElementById('text-in-selected-language-target').value = "";
}

export function changeValuesBetweenTranslationFields() {
    let textInSelectedLanguageSource = document.getElementById('text-in-selected-language-source');
    let textInSelectedLanguageTarget = document.getElementById('text-in-selected-language-target');

    const textLanguageSourceCurrent = textInSelectedLanguageSource.value;
    const textLanguageTargetCurrent = textInSelectedLanguageTarget.value;

    textInSelectedLanguageSource.value = textLanguageTargetCurrent;
    textInSelectedLanguageTarget.value = textLanguageSourceCurrent;
}

async function separationOfResponsibilityBetweenFields(destination) {
    let language = null;
    let textField = null;
    let translationResultField = null;
    let sourceLanguageCodeCurrent = null;
    let targetLanguageCodeCurrent = null;

    if (destination === 'source') {
        language = document.getElementById('language-title-source');
        textField = document.getElementById('text-in-selected-language-source');
        translationResultField = document.getElementById('text-in-selected-language-target');
        sourceLanguageCodeCurrent = getSourceLanguageCode();
        targetLanguageCodeCurrent = getTargetLanguageCode();
    } else {
        language = document.getElementById('language-title-target');
        textField = document.getElementById('text-in-selected-language-target');
        translationResultField = document.getElementById('text-in-selected-language-source');
        sourceLanguageCodeCurrent = getTargetLanguageCode();
        targetLanguageCodeCurrent = getSourceLanguageCode();
    }

    translationResultField.value = '...';

    let textToTranslate = textField.value;
    let translatedText = await translateAsync(sourceLanguageCodeCurrent, targetLanguageCodeCurrent, textToTranslate);

    if (translatedText !== null) {
        navigator.clipboard.writeText(translatedText);
        createWarningMessage('Copied');
    }

    translationResultField.value = translatedText;
}

export function createTranslationField() {
    let translationFields = document.getElementsByClassName('translation-field');

    for (let i = 0; i < translationFields.length; i++) {
        let languageTitle = document.createElement('h3');
        languageTitle.setAttribute('id', `language-title-${i === 0 ? 'source' : 'target'}`);
        languageTitle.style.fontSize = '12px';
        languageTitle.style.fontWeight = 'normal';
        languageTitle.style.letterSpacing = '1px';
        languageTitle.style.color = '#FFFFFF';
        languageTitle.style.opacity = 0.7;

        languageTitle.textContent = i === 0 ? getLanguageNameByCode(sourceLanguageCode) : getLanguageNameByCode(targetLanguageCode);

        let textInSelectedLanguage = document.createElement('textarea');
        textInSelectedLanguage.setAttribute('id', `text-in-selected-language-${i === 0 ? 'source' : 'target'}`);
        textInSelectedLanguage.style.width = '225px'
        textInSelectedLanguage.style.fontFamily = 'sans-serif';
        textInSelectedLanguage.style.fontSize = '16px';
        textInSelectedLanguage.style.fontWeight = 'normal';
        textInSelectedLanguage.style.letterSpacing = '1px';
        textInSelectedLanguage.style.resize = 'none';
        textInSelectedLanguage.style.border = 'none';
        textInSelectedLanguage.style.background = 'transparent';
        textInSelectedLanguage.style.color = '#FFFFFF';

        // Desativando efeito de foco (borda) quando o elemento é clicado
        textInSelectedLanguage.addEventListener('focus', function () {
            this.style.outline = 'none';
        });

        // Adicionando funcionalidade de tradução ao clicar no Enter
        textInSelectedLanguage.addEventListener('keydown', async function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Impede que o caractere de nova linha seja inserido
                let destination = i === 0 ? 'source' : 'target';
                await separationOfResponsibilityBetweenFields(destination);
            }
        });

        translationFields[i].appendChild(languageTitle);
        translationFields[i].appendChild(textInSelectedLanguage);

        if (i === 0) {
            textInSelectedLanguage.focus();
        }
    }
}
