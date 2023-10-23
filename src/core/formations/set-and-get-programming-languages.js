import { createWarningMessage } from "../../components/layout/warning-message.js";

/**
 * Todas as linguagens de programação com modelo de formatação:
 * 
 * @order
 * 0 - CSharp
 * 
 * 1 - JavaScript
 * 
 * 2 - Python
 */
export const programmingLanguagesWithTemplates = ["CSharp", "JavaScript", "Python"];

export function getProgrammingLanguage() {
    return localStorage.getItem('programmingLanguage');
}

export function setProgrammingLanguage(programmingLanguage) {
    localStorage.setItem('programmingLanguage', programmingLanguage);
    createWarningMessage("Saved");
}