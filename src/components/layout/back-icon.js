export function createBackButton() {
    let backIcons = document.getElementsByClassName('back-icon');

    for (let i = 0; i < backIcons.length; i++) {
        let backIcon = document.createElement('img');
        backIcon.src = '../assets/img/icons/back.png';
        backIcon.style.height = '32px';
        backIcon.style.position = 'fixed';
        backIcon.style.bottom = '5px';
        backIcon.style.left = '10px';

        backIcon.addEventListener('click', function () {
            window.location.href = "../views/index.html";
        });

        // Adicionando efeito de hover ao passar o mouse
        backIcon.addEventListener('mouseenter', function () {
            backIcon.style.transition = 'transform 0.5s ease';
            backIcon.style.transform = 'scale(1.2)';
            backIcon.style.cursor = 'pointer';
        });

        // Removendo efeito de hover quando o mouse sai
        backIcon.addEventListener('mouseleave', function () {
            backIcon.style.transition = 'transform 0.5s ease';
            backIcon.style.transform = 'scale(1)';
        });

        backIcons[i].appendChild(backIcon);
    }
}