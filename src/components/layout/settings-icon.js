export function createSettingsButton() {
    let settingsIcons = document.getElementsByClassName('settings-icon');

    for (let i = 0; i < settingsIcons.length; i++) {
        let settingsIcon = document.createElement('img');
        settingsIcon.src = '../assets/img/icons/settings.png';
        settingsIcon.style.width = '26px';
        settingsIcon.style.height = '26px';
        settingsIcon.style.position = 'fixed';
        settingsIcon.style.bottom = '10px';
        settingsIcon.style.right = '10px';

        settingsIcon.addEventListener('click', function () {
            window.location.href = "../views/settings.html";
        });

        // Adiciona o efeito de hover ao passar o mouse
        settingsIcon.addEventListener('mouseenter', function () {
            settingsIcon.style.transition = 'transform 0.5s ease';
            settingsIcon.style.transform = 'scale(1.2)';
            settingsIcon.style.cursor = 'pointer';
        });

        // Remove o efeito de hover quando o mouse sai
        settingsIcon.addEventListener('mouseleave', function () {
            settingsIcon.style.transition = 'transform 0.5s ease';
            settingsIcon.style.transform = 'scale(1)';
        });

        settingsIcons[i].appendChild(settingsIcon);
    }
}