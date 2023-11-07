const { app, BrowserWindow, screen, globalShortcut, ipcMain, shell } = require('electron')

let win = null;
let pinModeState = false;
let windowState = 'maximized';

const createWindow = (width, height) => {
    win = new BrowserWindow({
        width: 250,
        height: 350,
        icon: __dirname + '/src/assets/img/icons/icon.ico',
        resizable: false,
        alwaysOnTop: true,
        x: width - 255, // Largura da tela - ( largura do aplicativo + 5 de espaçamento )
        y: height - 355, // Altura da tela - ( altura do aplicativo + 5 de espaçamento )
        backgroundColor: '#2d2d2d',
        opacity: 0.76,
        frame: false, // Removendo barra superior da página
        webPreferences: {
            transparent: true,
            // Permitindo integração do node no front-end
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

    // Detectando quando a janela perde o foco (quando o usuário clica fora dela)
    win.on('blur', () => {
        if (!pinModeState) {
            win.resizable = true;
            win.setOpacity(0.2)
            win.loadFile('src/views/minimize.html');
            win.setSize(50, 50);
            win.resizable = false;
            win.setPosition(width - 55, height - 55);
            windowState = 'minimized';
        }
    });

    // Detectando quando a janela ganha o foco novamente
    win.on('focus', () => {
        if (!pinModeState) {
            win.resizable = true;
            win.setOpacity(0.76)
            win.loadFile('src/views/index.html');
            win.setSize(250, 350);
            win.resizable = false;
            win.setPosition(width - 255, height - 355);
            windowState = 'maximized';
        }
    });

    // Registrando o atalho global Ctrl + T
    globalShortcut.register('CommandOrControl+T', () => {
        // Maximizando a janela quando o atalho for acionado
        if (win) {
            if (windowState === 'maximized') {
                win.blur();
            } else {
                win.focus();
            }
        }
    });

    // Encerrando o aplicativo quando a janela for fechada
    win.on('closed', () => {
        // Cancelando registro do atalho global Ctrl + T
        globalShortcut.unregisterAll();
        win = null;
    });
}

app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    createWindow(width, height)
})

// Configurando um ouvinte para a mensagem de estado do modo pin
ipcMain.on('pinModeState', (event, pinMode) => {
    pinModeState = pinMode === 'On' ? true : false;
});

// Configurando um ouvinte para a mensagem de fechar o aplicativo
ipcMain.on('closeApplication', () => {
    if (win) {
        win.close();
    }
});

// Configurando um ouvinte para a mensagem de abrir link externo
ipcMain.on('open-external-link', (event, url) => {
    shell.openExternal(url);
});