const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
};

const createWindows = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200, // 800
    height: 630, // 600
    minWidth: 1100 + 16,
    minHeight: 630 + 79, // 366 + 79,
    maxWidth: 1400,
    maxHeight: 800,
    webPreferences: {
      preload: path.join(__dirname, 'js/preload.js'),
      nodeIntegration: true
    }
  });

  const summaryWindow = new BrowserWindow({
    width: 1100,
    height: 289,
    minWidth: 1080,
    minHeight: 310,
    maxWidth: 1400,
    maxHeight: 310,
    maximizable: false,
    parent: mainWindow,
    webPreferences: {
      preload: path.join(__dirname, 'js/preload.js'),
      nodeIntegration: true
    },
    frame: false,
    show: false
  });

  let algorithms = { 'algorithm1': 'md4', 'algorithm2': 'md4'};
  
  ipcMain.handle('get-summary', () => {
    return algorithms;
  });

  ipcMain.handle('show-summary', (e, algs) => {
    algorithms = algs;
    summaryWindow.reload();
    summaryWindow.show();
  });

  ipcMain.handle('hide-summary', () => summaryWindow.hide());

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'pages', 'index.html'));
  summaryWindow.loadFile(path.join(__dirname, 'pages', 'summary.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  // summaryWindow.webContents.openDevTools();

  // Remove menu from Window
  // mainWindow.removeMenu();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindows();
  };
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
