import { toCamelCase, toPascalCase } from "./helpers/naming-conventions.js";

const variableTypes = {
    b: "bool",
    c: "char",
    d: "double",
    f: "float",
    i: "int",
    s: "string"
}

const methodsTypes = Object.assign(variableTypes, { v: "void" });

export function formatToCSharp(typeOfFormatting, text) {
    let formattedText;
    let type = typeOfFormatting[1].toLowerCase();
    let subtype = typeOfFormatting[2].toLowerCase();

    switch (type) {
        case "c":
            formattedText = `public class ${toPascalCase(text)}\n{\n\n}`;
            break;
        case "e":
            formattedText = `public enum ${toPascalCase(text)}\n{\n\n}`;
            break;
        case "i":
            formattedText = `public interface I${toPascalCase(text)}\n{\n\n}`;
            break;
        case "m":
            let methodType = subtype === " " ? methodsTypes["v"] : methodsTypes[subtype];
            formattedText = `public ${methodType} ${toPascalCase(text)}()\n{${subtype === " " || subtype === "v" ? "\n\n" : "\n\treturn ;\n"}}`;
            break;
        case "p":
            let propertyVariableType = subtype === " " ? variableTypes["s"] : variableTypes[subtype];
            formattedText = `public ${propertyVariableType} ${toPascalCase(text)} { get; set; }`;
            break;
        case "v":
            let variableType = subtype === " " ? variableTypes["s"] : variableTypes[subtype];
            formattedText = `${variableType} ${toCamelCase(text)} = ;`;
            break;
        default:
            formattedText = text;
            break;
    }

    return formattedText;
}