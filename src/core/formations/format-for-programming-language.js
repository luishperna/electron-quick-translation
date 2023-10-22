import { programmingLanguagesWithTemplates } from "./set-and-get-programming-languages.js";
import { formatToCSharp } from "./programming-languages-templates/csharp.js";
import { formatToJavaScript } from "./programming-languages-templates/javascript.js";
import { formatToPython } from "./programming-languages-templates/python.js";

export function formatForProgrammingLanguage(programmingLanguage, typeOfFormatting, text) {
    if (!typeOfFormatting) {
        return text;
    }

    let formattedText;

    switch (programmingLanguage) {
        case programmingLanguagesWithTemplates[0]:
            formattedText = formatToCSharp(typeOfFormatting, text);
            break;
        case programmingLanguagesWithTemplates[1]:
            formattedText = formatToJavaScript(typeOfFormatting, text);
            break;
        case programmingLanguagesWithTemplates[2]:
            formattedText = formatToPython(typeOfFormatting, text);
            break;
        default:
            break;
    }

    return formattedText;
}