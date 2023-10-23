import { createDivWithClass } from "../helpers/element/div-with-class.js";
import { createSelectionFields } from "../layout/selection-field.js";
import { createBackButton } from "../layout/back-icon.js";
import { programmingLanguagesWithTemplates } from "../../core/formations/set-and-get-programming-languages.js";
import { setProgrammingLanguage } from "../../core/formations/set-and-get-programming-languages.js";

function createSettingsPage() {
    let settingsPage = document.getElementById('settings-page');

    let selectProgrammingLanguage = createDivWithClass('fields-for-selection');

    let backIconDiv = createDivWithClass('back-icon');

    let warningMessageDiv = createDivWithClass('warning-message');

    // Adiciona o elemento criado na página
    settingsPage.appendChild(selectProgrammingLanguage);
    settingsPage.appendChild(backIconDiv);
    settingsPage.appendChild(warningMessageDiv);
}

let listOfOptionsAndChangeFunctionsAllFields = [
    {
        title: "Select programming language:",
        options: programmingLanguagesWithTemplates,
        changeFunction: setProgrammingLanguage,
        localStorageKey: "programmingLanguage",
    },
]

createSettingsPage();
createSelectionFields(listOfOptionsAndChangeFunctionsAllFields);
createBackButton();