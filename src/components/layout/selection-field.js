/**
 * Função para criar todos as campos de seleção a partir do parâmetro recebido:
 * 
 * @param {Array}
 * listOfOptionsAndChangeFunctionsAllFields Formato esperado -> [{ options: [...], changeFunction: functionName, localStorageKey: "key" }, ...]
 */
export function createSelectionFields(listOfOptionsAndChangeFunctionsAllFields) {
    let fieldsForSelection = document.getElementsByClassName("fields-for-selection");

    for (let i = 0; i < listOfOptionsAndChangeFunctionsAllFields.length; i++) {
        let fieldTitle = document.createElement('h3');
        fieldTitle.textContent = listOfOptionsAndChangeFunctionsAllFields[i].title;
        fieldTitle.style.marginTop = '15px';
        fieldTitle.style.marginBottom = '5px';
        fieldTitle.style.fontSize = '12px';
        fieldTitle.style.fontWeight = 'normal';
        fieldTitle.style.letterSpacing = '1px';
        fieldTitle.style.color = '#FFFFFF';
        fieldTitle.style.opacity = 0.7;
        fieldTitle.style.textAlign = 'center';

        let selectionField = document.createElement('select');
        selectionField.style.width = '100%';
        selectionField.style.height = '32px';
        selectionField.style.fontSize = '12px';
        selectionField.style.fontWeight = 'normal';
        selectionField.style.letterSpacing = '1px';
        selectionField.style.border = 'none';
        selectionField.style.borderRadius = '5px';
        selectionField.style.background = '#202020';
        selectionField.style.color = '#FFFFFF';
        selectionField.style.opacity = 0.7;
        selectionField.style.textAlign = 'center';

        // Executando a função ao alterar a opção do campo de seleção
        selectionField.addEventListener('change', () => {
            let selectedValue = selectionField.value;
            listOfOptionsAndChangeFunctionsAllFields[i].changeFunction(selectedValue);
        });

        // Adicionando opções ao campo de seleção
        for (let j = 0; j < listOfOptionsAndChangeFunctionsAllFields[i].options.length; j++) {
            let option = new Option(listOfOptionsAndChangeFunctionsAllFields[i].options[j]);
            selectionField.add(option);
        }

        // Definindo a opção já armazenada como padrão no campo de seleção
        selectionField.value = localStorage.getItem(listOfOptionsAndChangeFunctionsAllFields[i].localStorageKey);

        fieldsForSelection[0].appendChild(fieldTitle);
        fieldsForSelection[0].appendChild(selectionField);
    }
}