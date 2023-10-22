import { formatToCSharp } from "./programming-languages-templates/csharp.js";
import { formatToJavaScript } from "./programming-languages-templates/javascript.js";
import { formatToPython } from "./programming-languages-templates/python.js";

export function formatForProgrammingLanguage(programmingLanguage, typeOfFormatting, text) {
    if (!typeOfFormatting) {
        return text;
    }

    let formattedText;

    switch (programmingLanguage) {
        case "CSharp":
            formattedText = formatToCSharp(typeOfFormatting, text);
            break;
        case "JavaScript":
            formattedText = formatToJavaScript(typeOfFormatting, text);
            break;
        case "Python":
            formattedText = formatToPython(typeOfFormatting, text);
            break;
        default:
            break;
    }

    return formattedText;
}