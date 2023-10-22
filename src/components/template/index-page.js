import { createDivWithClass } from "../helpers/element/div-with-class.js";
import { createAlignmentAndSpacing } from "../helpers/style/alignment-and-spacing.js";
import { setUserPreferences } from "../../core/pre-configuration/user-preferences.js";
import { createQuickModesIcon } from "../layout/quick-modes-icon.js";
import { createCloseApplicationButton } from "../layout/close-application-icon.js";
import { createSeparationLines } from "../layout/separation-line.js";
import { createTranslationField } from "../layout/translation-field.js";
import { createChangeBetweenLanguagesField } from "../layout/change-between-languages.js";
import { createReverseLanguages } from "../layout/reverse-languages.js";

import { createSettingsButton  } from "../layout/settings-icon.js";

const numberOfModes = 2;

// Cria as divs para seus respectivos componentes da página
function createIndexPage() {
    let indexPage = document.getElementById('index-page');

    // Divs para os componentes de modos
    let quickIconsDiv = createDivWithClass('quick-icons');

    for (let i = 0; i < numberOfModes; i++) {
        let quickModeIconDiv = createDivWithClass('quick-mode-icon');
        quickIconsDiv.appendChild(quickModeIconDiv);
    }

    let closeApplicationIconDiv = createDivWithClass('close-application-icon');
    quickIconsDiv.appendChild(closeApplicationIconDiv);

    // Divs para os componentes de campos de traduções
    let upperTranslationFieldDiv = createDivWithClass('translation-field');
    let separationLineDiv = createDivWithClass('separation-line');
    let lowerTranslationFieldDiv = createDivWithClass('translation-field');

    // Divs para os componentes de seleção e troca de linguagens
    let changeBetweenLanguagesDiv = createDivWithClass('change-between-languages');

    let changeLanguageLeftFieldDiv = createDivWithClass('change-language-field');
    changeBetweenLanguagesDiv.appendChild(changeLanguageLeftFieldDiv);

    let reverseLanguageDiv = createDivWithClass('reverse-languages');
    changeBetweenLanguagesDiv.appendChild(reverseLanguageDiv);

    let changeLanguageRightFieldDiv = createDivWithClass('change-language-field');
    changeBetweenLanguagesDiv.appendChild(changeLanguageRightFieldDiv);

    let settingsIconDiv = createDivWithClass('settings-icon');

    let warningMessageDiv = createDivWithClass('warning-message');

    // Adiciona os elementos criados na página
    indexPage.appendChild(quickIconsDiv);
    indexPage.appendChild(upperTranslationFieldDiv);
    indexPage.appendChild(separationLineDiv);
    indexPage.appendChild(lowerTranslationFieldDiv);
    indexPage.appendChild(changeBetweenLanguagesDiv);
    indexPage.appendChild(settingsIconDiv);
    indexPage.appendChild(warningMessageDiv);
}

createAlignmentAndSpacing();
createIndexPage();
setUserPreferences();
createQuickModesIcon();
createCloseApplicationButton();
createTranslationField();
createSeparationLines();
createChangeBetweenLanguagesField();
createReverseLanguages();
createSettingsButton();