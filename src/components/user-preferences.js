export function setUserPreferences() {  
    localStorage.setItem('devMode', 'On');
    localStorage.setItem('pinMode', 'Off');
    localStorage.setItem('primaryLanguage', 'en-US');
    localStorage.setItem('secondaryLanguage', 'pt-BR');
}
