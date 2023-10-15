import { setUserPreferences } from "./user-preferences.js";
import { createQuickModesIcon } from "./quick-modes-icon.js";
import { createCloseApplicationButton } from "./close-application-icon.js";
import { createSeparationLines } from "./separation-line.js";
import { createTranslationField } from "./translation-field.js";
import { createChangeBetweenLanguagesField } from "./change-between-languages.js";
import { createReverseLanguages } from "./reverse-languages.js";

setUserPreferences();
createQuickModesIcon();
createCloseApplicationButton();
createTranslationField();
createSeparationLines();
createChangeBetweenLanguagesField();
createReverseLanguages();