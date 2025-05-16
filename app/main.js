const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Use mock service in development
const openAIService = isDev 
  ? require('./services/ai/openai.mock')
  : require('./services/ai/openai');

// Verify API key is loaded
if (!isDev && !process.env.OPENAI_API_KEY) {
  console.error('Warning: OPENAI_API_KEY not found in environment variables');
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the app
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:5173' // Vite dev server URL
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );

  // Open the DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

// Set up IPC handler for AI prompts
ipcMain.handle('ai:sendPrompt', async (event, promptText) => {
  try {
    const response = await openAIService.sendPrompt(promptText);
    return { success: true, data: response };
  } catch (error) {
    console.error('AI Service Error:', error);
    return { success: false, error: error.message };
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 