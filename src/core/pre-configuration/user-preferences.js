export function setUserPreferences() {  
    let devMode = localStorage.getItem('devMode');
    let pinMode = localStorage.getItem('pinMode');
    let sourceLanguageCode = localStorage.getItem('sourceLanguageCode');
    let targetLanguageCode = localStorage.getItem('targetLanguageCode');
    let programmingLanguage = localStorage.getItem('programmingLanguage');

    if (!(devMode && pinMode && sourceLanguageCode && targetLanguageCode && programmingLanguage)) {
        localStorage.setItem('devMode', 'On');
        localStorage.setItem('pinMode', 'Off');
        localStorage.setItem('sourceLanguageCode', 'en-CA');
        localStorage.setItem('targetLanguageCode', 'pt-BR');
        localStorage.setItem('programmingLanguage', 'CSharp');
    }
}
