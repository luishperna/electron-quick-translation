import { allLanguages, getSourceLanguageCode, getTargetLanguageCode, setSourceLanguage, setTargetLanguage } from "./set-and-get-languages.js";

let sourceLanguageCode = getSourceLanguageCode();
let targetLanguageCode = getTargetLanguageCode();

export function reserveLanguages() {
    let selectionLanguageSource = document.getElementById('selection-language-source');
    let selectionLanguageTarget = document.getElementById('selection-language-target');

    const languageSourceCurrent = selectionLanguageSource.value;
    const languageTargetCurrent = selectionLanguageTarget.value;

    selectionLanguageSource.value = languageTargetCurrent;
    selectionLanguageTarget.value = languageSourceCurrent;

    setSourceLanguage(languageTargetCurrent);
    setTargetLanguage(languageSourceCurrent);
}

export function createChangeBetweenLanguagesField() {
    let changeBetweenLanguagesFields = document.getElementsByClassName('change-language-field');

    for (let i = 0; i < changeBetweenLanguagesFields.length; i++) {
        let languageSelectionField = document.createElement('select');
        languageSelectionField.setAttribute('id', `selection-language-${i === 0 ? 'source' : 'target'}`);
        languageSelectionField.style.width = '80px'
        languageSelectionField.style.height = '32px'
        languageSelectionField.style.fontSize = '12px';
        languageSelectionField.style.fontWeight = 'normal';
        languageSelectionField.style.letterSpacing = '1px';
        languageSelectionField.style.border = 'none';
        languageSelectionField.style.borderRadius = '5px';
        languageSelectionField.style.background = '#202020';
        languageSelectionField.style.color = '#FFFFFF';
        languageSelectionField.style.opacity = 0.7;
        languageSelectionField.style.textAlign = 'center';

        languageSelectionField.addEventListener('change', () => {
            let selectedLanguage = languageSelectionField.value;

            if (i === 0) {
                setSourceLanguage(selectedLanguage);
            } else {
                setTargetLanguage(selectedLanguage);
            }
        });

        changeBetweenLanguagesFields[i].appendChild(languageSelectionField);
    }

    let selectionLanguageSource = document.getElementById("selection-language-source");
    let selectionLanguageTarget = document.getElementById("selection-language-target");

    allLanguages.forEach((language) => {
        let languageOption = new Option(language.code.toUpperCase(), language.code);

        selectionLanguageSource.add(languageOption.cloneNode(true));
        selectionLanguageTarget.add(languageOption);
    });

    selectionLanguageSource.value = sourceLanguageCode;
    selectionLanguageTarget.value = targetLanguageCode;
}