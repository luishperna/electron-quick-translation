const { app, BrowserWindow, screen, globalShortcut, ipcMain, shell } = require('electron')

let win = null;
let minimizeAndMaximize = true;
let windowState = 'maximized';

const createWindow = (width, height) => {
    win = new BrowserWindow({
        width: 250,
        height: 350,
        icon: __dirname + '/src/assets/img/icons/icon.ico',
        resizable: false,
        alwaysOnTop: true,
        x: width - 255, // Subtrai a largura da janela da largura da tela
        y: height - 355, // Subtrai a altura da janela da altura da tela
        backgroundColor: '#2d2d2d', // Cor de fundo com transparência
        opacity: 0.76, // Define a opacidade da janela
        frame: false, // Removendo a barra superior
        webPreferences: {
            transparent: true,
            // Permitindo integrando do node no front-end
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
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
        if (minimizeAndMaximize) {
            win.resizable = true;
            win.setOpacity(0.2)
            win.loadFile('src/views/minimize.html');
            win.setSize(50, 50);
            win.resizable = false;
            win.setPosition(width - 55, height - 55);
            windowState = 'minimized';
        }
    });

    // Detectar quando a janela ganha o foco novamente
    win.on('focus', () => {
        if (minimizeAndMaximize) {
            win.resizable = true;
            win.setOpacity(0.76)
            win.loadFile('src/views/index.html');
            win.setSize(250, 350);
            win.resizable = false;
            win.setPosition(width - 255, height - 355);
            windowState = 'maximized';
        }
    });

    // Registrar o atalho global Ctrl + T
    globalShortcut.register('CommandOrControl+T', () => {
        // Quando o atalho for acionado, trazer a janela para frente
        if (win) {
            if (windowState === 'maximized') {
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

// Configura um ouvinte para a mensagem 'toggleMinimizeOnBlur'
ipcMain.on('minimizeAndMaximizeMode', (event, pinMode) => {
    if (pinMode === 'On') {
        minimizeAndMaximize = false;
    } else {
        minimizeAndMaximize = true;
    }
});

// Configura um ouvinte para a mensagem de fechar o aplicativo
ipcMain.on('closeApplication', () => {
    if (win) {
        win.close();
    }
});

// Configura um ouvinte para a mensagem de abrir link externo
ipcMain.on('open-external-link', (event, url) => {
    shell.openExternal(url);
});