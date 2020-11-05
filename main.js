const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: true,
        autoHideMenuBar: true,
        resizable: false,
        transparent: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }
    })
    win.loadFile("index.html")
}
app.whenReady().then(createWindow)