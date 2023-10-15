export function createSeparationLines() {
    let lines = document.getElementsByClassName('separation-line');

    for (let i = 0; i < lines.length; i++) {
        let line = document.createElement('div');
        line.style.marginLeft = 'auto';
        line.style.marginRight = 'auto';
        line.style.background = '#ffffff';
        line.style.opacity = 0.7;
        line.style.width = '140px';
        line.style.height = '2px';

        lines[i].appendChild(line);
    }
}
