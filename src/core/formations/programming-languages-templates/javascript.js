import { toCamelCase, toPascalCase } from "./helpers/naming-conventions.js";

export function formatToJavaScript(typeOfFormatting, text) {
    let formattedText;
    let type = typeOfFormatting[1].toLowerCase();
    let subtype = typeOfFormatting[2].toLowerCase();

    switch (type) {
        case "c":
            formattedText = `class ${toPascalCase(text)} {\n\n}`;
            break;
        case "f":
            formattedText = `function ${toCamelCase(text)}() {\n${subtype === " " ? "\n\n" : "\treturn ;\n"}}`;
            break;
        case "v":
            formattedText = `var ${toCamelCase(text)} = ;`;
            break;
        default:
            formattedText = text;
            break;
    }

    return formattedText;
}