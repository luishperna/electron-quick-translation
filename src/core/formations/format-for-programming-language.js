import { formatToCSharp } from "./programming-languages-templates/csharp.js";

export function formatForProgrammingLanguage(programmingLanguage, typeOfFormatting, text) {
    if (!typeOfFormatting) {
        return text;
    }

    let formattedText;

    switch (programmingLanguage) {
        case "CSharp":
            formattedText = formatToCSharp(typeOfFormatting, text);
            break;
        default:
            break;
    }

    return formattedText;
}