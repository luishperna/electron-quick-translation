/**
 * Função para criar todos as campos de seleção a partir do parâmetro recebido:
 * 
 * @param {Array}
 * listOfOptionsAndChangeFunctionsAllFields Formato esperado -> [{ options: [...], changeFunction: functionName, localStorageKey: "key" }, ...]
 */
export function createSelectionFields(listOfOptionsAndChangeFunctionsAllFields) {
    let fieldsForSelection = document.getElementsByClassName("fields-for-selection");

    for (let i = 0; i < listOfOptionsAndChangeFunctionsAllFields.length; i++) {
        let selectionField = document.createElement('select');
        selectionField.style.width = '235px'
        selectionField.style.height = '32px'
        selectionField.style.fontSize = '12px';
        selectionField.style.fontWeight = 'normal';
        selectionField.style.letterSpacing = '1px';
        selectionField.style.border = 'none';
        selectionField.style.borderRadius = '5px';
        selectionField.style.background = '#202020';
        selectionField.style.color = '#FFFFFF';
        selectionField.style.opacity = 0.7;
        selectionField.style.textAlign = 'center';

        // Adiciona função ao alterar a opção do campo de seleção
        selectionField.addEventListener('change', () => {
            let selectedValue = selectionField.value;
            listOfOptionsAndChangeFunctionsAllFields[i].changeFunction(selectedValue);
        });

        // Adiciona opções ao campo de seleção
        for (let j = 0; j < listOfOptionsAndChangeFunctionsAllFields[i].options.length; j++) {
            let option = new Option(listOfOptionsAndChangeFunctionsAllFields[i].options[j]);
            selectionField.add(option);
        }

        // Define a opção já armazenada como padrão no campo de seleção
        selectionField.value = localStorage.getItem(listOfOptionsAndChangeFunctionsAllFields[i].localStorageKey);

        fieldsForSelection[0].appendChild(selectionField);
    }
}