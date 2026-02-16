export function setDeeplApiKey(apiKey) {
    localStorage.setItem('DEEPL_API_KEY', apiKey);
}

export function getDeeplApiKey() {
    return localStorage.getItem('DEEPL_API_KEY') || '';
}

export function validateDeeplApiKey(apiKey) {
    return apiKey && apiKey.length >= 20;
}