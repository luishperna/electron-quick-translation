import { createBodyToMinimize } from "../helpers/style/body-to-minimize.js";

function createMinimizePage() {
    let minimizePage = document.getElementById('minimize-page');

    let img = document.createElement('img');
    img.src = '../assets/img/icons/expand.png';
    img.alt = 'Expand screen';
    img.style.width = '30px';
    img.style.height = '30px';

    minimizePage.appendChild(img);
}

createBodyToMinimize();
createMinimizePage();