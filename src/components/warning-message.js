export function createWarningMessage(message) {
    let warnings = document.getElementsByClassName('warning-message');

    for (let i = 0; i < warnings.length; i++) {
        let span = document.createElement('span');
        span.textContent = message;
        span.style.padding = '5px 34px';
        span.style.borderRadius = '5px';
        span.style.position = 'fixed';
        span.style.bottom = '10px';
        span.style.left = '50%';
        span.style.transform = `translateX(-50%)`;
        span.style.backgroundColor = '#ffffff';
        span.style.color = '#2d2d2d';

        warnings[i].innerHTML = '';
        warnings[i].appendChild(span);

        function removeElement() {
            setTimeout(() => {
                warnings[i].innerHTML = '';
            }, 2000);
        }

        // Função para aplicar animação
        requestAnimationFrame(removeElement);
    }
}
