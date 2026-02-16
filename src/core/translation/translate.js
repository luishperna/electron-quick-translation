import { getDeeplApiKey } from '../formations/set-and-get-api-key.js';
import { createWarningMessage } from '../../components/layout/warning-message.js';

export async function translateAsync(sourceLanguageCode, targetLanguageCode, textToTranslate) {
    const DEEPL_API_KEY = getDeeplApiKey();
    
    if (!DEEPL_API_KEY) {
        createWarningMessage('API key not found');
        return null;
    }
    
    const apiUrl = 'https://api-free.deepl.com/v2/translate';
    
    try {
        const sourceLang = sourceLanguageCode.split('-')[0];
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`
            },
            body: JSON.stringify({
                text: [textToTranslate],
                source_lang: sourceLang,
                target_lang: targetLanguageCode
            })
        });
        
        const data = await response.json();
        
        if (!response.ok) return null;
        
        return data.translations[0].text;
        
    } catch (err) {
        return null;
    }
}