export function createAlignmentAndSpacing() {
    const styles = `
        .quick-icons {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

        .change-between-languages {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 14px;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}
