let languages = {
    'en-US': 'English US',
    'en-CA': 'English CA',
    'pt-BR': 'Portuguese BR'
}

function fieldFeaturesToTranslation() {
    let language = document.getElementById('language-title-0');
    let text = document.getElementById('text-in-selected-language-0');

    language.innerText = languages['en-US'];
    text.focus();

    text.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Impede que o caractere de nova linha seja inserido
            translateAsync();
        }
    });
}

function fieldFeaturesTranslationResult() {
    let language = document.getElementById('language-title-1');
    let text = document.getElementById('text-in-selected-language-1');

    language.innerText = languages['pt-BR'];
}

function translateAsync() {
    let textToTranslate = document.getElementById('text-in-selected-language-0').value;
    let translatedTextResult = document.getElementById('text-in-selected-language-1');
    
    let apiUrlMyMemory = `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=en-us|pt-br`;
    
    translatedTextResult.value = '...';
    
    fetch(apiUrlMyMemory)
        .then(res => res.json())
        .then(data => {
            let translation = data.responseData.translatedText;
            translatedTextResult.value = translation;

            navigator.clipboard.writeText(translation);
        })
        .catch(err => translatedTextResult.value = err)
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

        translationFields[i].appendChild(languageTitle);
        translationFields[i].appendChild(textInSelectedLanguage);
    }

    fieldFeaturesToTranslation();
    fieldFeaturesTranslationResult();
}
