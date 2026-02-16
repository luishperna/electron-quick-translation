export function setUserPreferences() {  
    let pinMode = localStorage.getItem('pinMode');
    let sourceLanguageCode = localStorage.getItem('sourceLanguageCode');
    let targetLanguageCode = localStorage.getItem('targetLanguageCode');
    let programmingLanguage = localStorage.getItem('programmingLanguage');

    if (!(pinMode && sourceLanguageCode && targetLanguageCode && programmingLanguage)) {
        localStorage.setItem('pinMode', 'Off');
        localStorage.setItem('sourceLanguageCode', 'PT-BR');
        localStorage.setItem('targetLanguageCode', 'EN-US');
        localStorage.setItem('programmingLanguage', 'CSharp');

        location.reload();
    }
}
