export function createSeparationLines() {
    let divs = document.getElementsByClassName('separation-line');

    for (let i = 0; i < divs.length; i++) {
        let line = document.createElement('div');
        line.style.marginLeft = 'auto';
        line.style.marginRight = 'auto';
        line.style.background = '#FFFFFF';
        line.style.opacity = 0.7;
        line.style.width = '140px';
        line.style.height = '2px';

        divs[i].appendChild(line);
    }
}
