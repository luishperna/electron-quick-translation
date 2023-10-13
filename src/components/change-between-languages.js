let languages = [
    {
        name: 'Spanish ES',
        code: 'es-ES'
    },
    {
        name: 'English US',
        code: 'en-US'
    },
    {
        name: 'English CA',
        code: 'en-CA'
    },
    {
        name: 'Portuguese BR',
        code: 'pt-BR'
    }
]

let primaryLanguage = localStorage.getItem('primaryLanguage');
let secondaryLanguage = localStorage.getItem('secondaryLanguage');

export function reserveLanguages() {
    let selectionLanguageSource = document.getElementById('selection-language-source');
    let selectionLanguageTarget = document.getElementById('selection-language-target');

    const languageSourceCurrent = selectionLanguageSource.value;
    const languageTargetCurrent = selectionLanguageTarget.value;

    selectionLanguageSource.value = languageTargetCurrent;
    selectionLanguageTarget.value = languageSourceCurrent;
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

        changeBetweenLanguagesFields[i].appendChild(languageSelectionField);
    }

    let selectionLanguageSource = document.getElementById("selection-language-source");
    let selectionLanguageTarget = document.getElementById("selection-language-target");

    languages.forEach((language) => {
        let languageOption = new Option(language.code.toUpperCase(), language.code);

        selectionLanguageSource.add(languageOption.cloneNode(true));
        selectionLanguageTarget.add(languageOption);
    });

    selectionLanguageSource.value = primaryLanguage;
    selectionLanguageTarget.value = secondaryLanguage;
}