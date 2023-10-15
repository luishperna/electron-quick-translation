export function createInformationDialog(contentInHTML) {
    let dialog = document.createElement('dialog');
    dialog.innerHTML = contentInHTML;
    dialog.style.background = '#ffffff';
    dialog.style.border = 'none';
    dialog.style.borderRadius = '5px';
    dialog.style.fontSize = '12px';
    dialog.style.fontWeight = 'normal';
    dialog.style.letterSpacing = '1px';

    // Desativando efeito de foco (borda) quando o elemento é clicado
    dialog.addEventListener('focus', function () {
        this.style.outline = 'none';
    });

    document.body.appendChild(dialog);

    dialog.showModal();

    dialog.addEventListener('click', function () {
        dialog.close();
        dialog.remove();
    });

    dialog.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        dialog.close();
        dialog.remove();
    });
}