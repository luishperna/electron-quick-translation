import { createDivWithClass } from "../helpers/element/div-with-class.js";
import { createSelectionFields } from "../layout/selection-field.js";
import { programmingLanguagesWithTemplates } from "../../core/formations/set-and-get-programming-languages.js";
import { setProgrammingLanguage } from "../../core/formations/set-and-get-programming-languages.js";

function createSettingsPage() {
    let settingsPage = document.getElementById('settings-page');

    let selectProgrammingLanguage = createDivWithClass('fields-for-selection');

    // Adiciona o elemento criado na página
    settingsPage.appendChild(selectProgrammingLanguage);
}

let listOfOptionsAndChangeFunctionsAllFields = [
    {
        options: programmingLanguagesWithTemplates,
        changeFunction: setProgrammingLanguage,
        localStorageKey: "programmingLanguage",
    },
]

createSettingsPage();
createSelectionFields(listOfOptionsAndChangeFunctionsAllFields);