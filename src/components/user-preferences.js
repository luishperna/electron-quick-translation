export function setUserPreferences() {  
    let devMode = localStorage.getItem('devMode');
    let pinMode = localStorage.getItem('pinMode');
    let primaryLanguage = localStorage.getItem('primaryLanguage');
    let secondaryLanguage = localStorage.getItem('secondaryLanguage');

    if (!(devMode && pinMode && primaryLanguage && secondaryLanguage)) {
        localStorage.setItem('devMode', 'On');
        localStorage.setItem('pinMode', 'Off');
        localStorage.setItem('primaryLanguage', 'en-US');
        localStorage.setItem('secondaryLanguage', 'pt-BR');
    }
}
