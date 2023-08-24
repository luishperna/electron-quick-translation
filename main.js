const { app, BrowserWindow, screen, globalShortcut } = require('electron')

let windowState = 'maximized';

const createWindow = (width, height) => {
    const win = new BrowserWindow({
        width: 250,
        height: 350,
        resizable: false,
        alwaysOnTop: true,
        x: width - 255, // Subtrai a largura da janela da largura da tela
        y: height - 355, // Subtrai a altura da janela da altura da tela
        backgroundColor: '#2d2d2d', // Cor de fundo com transparência
        opacity: 0.76, // Define a opacidade da janela
        frame: false, // Removendo a barra superior
        webPreferences: {
            transparent: true,
        }
    })

    win.webContents.on('dom-ready', () => {
        win.webContents.insertCSS(`
            html {
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
    
                font-family: 'Inter', sans-serif;
            }
        `);
    });

    win.loadFile('src/views/index.html')

    // Detectar quando a janela perde o foco (quando o usuário clica fora dela)
    win.on('blur', () => {
        win.resizable = true;
        win.setOpacity(0.2)
        win.loadFile('src/views/minimize.html');
        win.setSize(50, 50);
        win.resizable = false;
        win.setPosition(width - 55, height - 55);
        windowState = 'minimized';
    });

    // Detectar quando a janela ganha o foco novamente
    win.on('focus', () => {
        win.resizable = true;
        win.setOpacity(0.76)
        win.loadFile('src/views/index.html');
        win.setSize(250, 350);
        win.resizable = false;
        win.setPosition(width - 255, height - 355);
        windowState = 'maximized';
    });

    // Registrar o atalho global Ctrl + T
    globalShortcut.register('CommandOrControl+T', () => {
        // Quando o atalho for acionado, trazer a janela para frente
        if (win) {
            if (windowState === 'maximized'){
                win.blur();
            } else {
                win.focus();
            }
        }
    });

    // Fechar o aplicativo quando a janela for fechada
    win.on('closed', () => {
        // Desregistrar o atalho global antes de sair
        globalShortcut.unregisterAll();
        win = null;
    });
}

app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    createWindow(width, height)
})