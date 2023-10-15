export function createBodyToMinimize() {
    const style = `
        body {
            margin: 0;
            overflow: hidden;
            background-color: #ffffff;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        body div {
            display: flex;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
}