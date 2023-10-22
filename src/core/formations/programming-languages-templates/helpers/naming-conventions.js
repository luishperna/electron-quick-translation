export function toCamelCase(text) {
    let formattedText = text.toLowerCase();

    if (formattedText.includes(" ")) {
        let words = formattedText.split(" ");
        formattedText = words[0];

        for (let i = 1; i < words.length; i++) {
            formattedText += words[i][0].toUpperCase() + words[i].substring(1);
        }
    }

    return formattedText;
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

    return formattedText;
}