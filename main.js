const { app, BrowserWindow, screen } = require('electron')

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
        autoHideMenuBar: true,
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
}

app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    createWindow(width, height)
})