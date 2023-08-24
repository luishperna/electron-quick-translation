let languages = {
    'en-US': 'English US',
    'en-CA': 'English CA',
    'pt-BR': 'Portuguese BR'
}

let primaryLanguage = localStorage.getItem('primaryLanguage');
let secondaryLanguage = localStorage.getItem('secondaryLanguage');

async function translateAsync(sourceLanguage, targetLanguage, textToTranslate) {
    let translation = null;
    let apiUrlMyMemory = `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${sourceLanguage}|${targetLanguage}`;

    return fetch(apiUrlMyMemory)
        .then(res => res.json())
        .then(data => {
            translation = data.responseData.translatedText;
            return translation;
        })
        .catch(err => {
            console.log(err);
            translation = null;
            return translation;
        })
}

async function separationOfResponsibilityBetweenFields(fieldOrder) {
    let language = null;
    let textField = null;
    let translationResultField = null;
    let sourceLanguage = null;
    let targetLanguage = null;

    if (fieldOrder === 'primary') {
        language = document.getElementById('language-title-0');
        textField = document.getElementById('text-in-selected-language-0');
        translationResultField = document.getElementById('text-in-selected-language-1');
        sourceLanguage = primaryLanguage;
        targetLanguage = secondaryLanguage;
    } else {
        language = document.getElementById('language-title-1');
        textField = document.getElementById('text-in-selected-language-1');
        translationResultField = document.getElementById('text-in-selected-language-0');
        sourceLanguage = secondaryLanguage;
        targetLanguage = primaryLanguage;
    }

    translationResultField.value = '...';

    let textToTranslate = textField.value;
    let translatedText = await translateAsync(sourceLanguage, targetLanguage, textToTranslate);

    if (translatedText !== null) {
        navigator.clipboard.writeText(translatedText);
    }

    translationResultField.value = translatedText;
}

export function createTranslationField() {
    let translationFields = document.getElementsByClassName('translation-field');

    for (let i = 0; i < translationFields.length; i++) {
        let languageTitle = document.createElement('h3');
        languageTitle.setAttribute('id', `language-title-${i}`);
        languageTitle.style.fontSize = '12px';
        languageTitle.style.fontWeight = 'normal';
        languageTitle.style.letterSpacing = '1px';
        languageTitle.style.color = '#FFFFFF';
        languageTitle.style.opacity = 0.7;

        languageTitle.innerText = i === 0 ? languages[primaryLanguage] : languages[secondaryLanguage];

        let textInSelectedLanguage = document.createElement('textarea');
        textInSelectedLanguage.setAttribute('id', `text-in-selected-language-${i}`);
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
                let fieldOrder = i === 0 ? 'primary' : 'secondary';
                await separationOfResponsibilityBetweenFields(fieldOrder);
            }
        });

        translationFields[i].appendChild(languageTitle);
        translationFields[i].appendChild(textInSelectedLanguage);

        if (i === 0) {
            textInSelectedLanguage.focus();
        }
    }
}
