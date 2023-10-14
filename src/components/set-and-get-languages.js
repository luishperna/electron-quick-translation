import { setLanguageTitleSource, setLanguageTitleTarget } from "./translation-field.js";

export const allLanguages = [
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

export function getLanguageNameByCode(languageCode) {
    for (let i = 0; i < allLanguages.length; i++) {
        if (allLanguages[i].code === languageCode) {
            return allLanguages[i].name;
        }
    }
}

export function getSourceLanguageCode() {
    return localStorage.getItem('sourceLanguageCode');
}

export function getTargetLanguageCode() {
    return localStorage.getItem('targetLanguageCode');
}

export function setSourceLanguage(languageCode) {
    localStorage.setItem('sourceLanguageCode', languageCode);
    setLanguageTitleSource(getLanguageNameByCode(languageCode));
}

export function setTargetLanguage(languageCode) {
    localStorage.setItem('targetLanguageCode', languageCode);
    setLanguageTitleTarget(getLanguageNameByCode(languageCode));
}