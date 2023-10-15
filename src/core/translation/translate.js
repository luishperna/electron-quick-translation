export async function translateAsync(sourceLanguageCode, targetLanguageCode, textToTranslate) {
    let translation = null;
    let apiUrlMyMemory = `https://api.mymemory.translated.net/get?q=${textToTranslate}&langpair=${sourceLanguageCode}|${targetLanguageCode}`;

    return fetch(apiUrlMyMemory)
        .then(res => res.json())
        .then(data => {
            translation = data.responseData.translatedText;
            return translation;
        })
        .catch(err => {
            console.log(err);
            translation = null;
            return translation;
        })
}