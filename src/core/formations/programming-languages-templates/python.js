import { toPascalCase, toSnakeCase } from "./helpers/naming-conventions.js";

export function formatToPython(typeOfFormatting, text) {
    let formattedText;
    let type = typeOfFormatting[1].toLowerCase();
    let subtype = typeOfFormatting[2].toLowerCase();

    switch (type) {
        case ".":
            formattedText = toSnakeCase(text);
            break;
        case "c":
            formattedText = `class ${toPascalCase(text)}:`;
            break;
        case "f":
            formattedText = `def ${toSnakeCase(text)}():${subtype === " " ? "" : "\n\treturn"}`;
            break;
        case "v":
            formattedText = `${toSnakeCase(text)} = `;
            break;
        default:
            formattedText = text;
            break;
    }

    return formattedText;
}