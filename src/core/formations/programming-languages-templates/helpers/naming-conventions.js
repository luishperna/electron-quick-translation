function removeSpecialCharacters(text, noRemove = '') {
    const regex = new RegExp(`[^a-zA-Z0-9${noRemove}]`, 'g');
    // Separa os caracteres especiais de acentos e substitui 
    return text.normalize('NFD').replace(regex, "");
}

export function toCamelCase(text) {
    let formattedText = text.toLowerCase();

    if (formattedText.includes(" ")) {
        let words = formattedText.split(" ");
        formattedText = words[0];

        for (let i = 1; i < words.length; i++) {
            formattedText += words[i][0].toUpperCase() + words[i].substring(1);
        }
    }

    return removeSpecialCharacters(formattedText);
}

export function toPascalCase(text) {
    let formattedText = text[0].toUpperCase() + text.substring(1).toLowerCase();

    if (formattedText.includes(" ")) {
        let words = formattedText.split(" ");
        formattedText = words[0];

        for (let i = 1; i < words.length; i++) {
            formattedText += words[i][0].toUpperCase() + words[i].substring(1);
        }
    }

    return removeSpecialCharacters(formattedText);
}

export function toSnakeCase(text) {
    let formattedText = text.toLowerCase();
    const separationSpecialCharacter = '_';

    if (formattedText.includes(" ")) {
        let words = formattedText.split(" ");
        formattedText = words[0];

        for (let i = 1; i < words.length; i++) {
            formattedText += separationSpecialCharacter + words[i];
        }
    }

    return removeSpecialCharacters(formattedText, separationSpecialCharacter);
}