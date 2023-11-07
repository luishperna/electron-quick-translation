export function getPinModeState() {
    return localStorage.getItem('pinMode');
}

export function setPinModeState(pinMode) {
    localStorage.setItem('pinMode', pinMode);
}