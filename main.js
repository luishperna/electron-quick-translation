const { app, BrowserWindow, screen } = require('electron')

const createWindow = (width, height) => {
    const win = new BrowserWindow({
        width: 250,
        height: 350,
        resizable: false,
        alwaysOnTop: true,
        x: width - 260, // Subtrai a largura da janela da largura da tela
        y: height - 320, // Subtrai a altura da janela da altura da tela
        backgroundColor: '#2d2d2d', // Cor de fundo com transparência
        opacity: 0.76, // Define a opacidade da janela
        autoHideMenuBar: true,
       
    })

    win.loadFile('src/views/index.html')
}

app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    createWindow(width, height)
})