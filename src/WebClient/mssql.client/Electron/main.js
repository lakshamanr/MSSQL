const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const url = require('url');

let win;
let apiProcess;

// Function to create the Electron window
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Disable Node.js integration
            contextIsolation: true, // Isolate context for security
            enableRemoteModule: false, // Disable remote module
        },
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, '/dist/mssql/index.html'),
            protocol: 'file:',
            slashes: true,
        })
    );
    win.on('closed', () => {
        win = null;
    });
}

// Function to start the ASP.NET Core Web API and return a Promise that resolves when the API is ready
function startApi() {
    return new Promise((resolve, reject) => {
        // Path to the Web API DLL or executable
        const apiPath = path.join(__dirname, '/API/API.dll');  // Or 'MyApi.exe' if published as self-contained executable

        console.log("Starting API at path: " + apiPath);
        try {
            // Start the Web API using dotnet CLI if it's a DLL, or run directly if it's an EXE
            apiProcess = spawn('dotnet', [apiPath]);

            apiProcess.stdout.on('data', (data) => {
                console.log(`Web API stdout: ${data}`);

                // Check for a specific message in stdout to know when the API is ready
                if (data.toString().includes("Now listening on")) {
                    resolve(); // Resolve the promise when API is successfully started
                }
            });

            apiProcess.stderr.on('data', (data) => {
                console.error(`Web API stderr: ${data}`);
            });

            apiProcess.on('close', (code) => {
                console.log(`Web API process exited with code ${code}`);
                reject(new Error(`API process exited with code ${code}`));
            });
        } catch (ex) {
            console.error("Error starting API: ", ex);
            reject(ex);
        }
    });
}

// When Electron is ready, create the window and start the Web API
app.whenReady().then(async () => {
    try {
        await startApi(); // Wait until the API is started
        console.log("API started successfully. Now creating Electron window.");
       
    } catch (error) {
        console.error("Failed to start API:", error);
        app.quit(); // Quit the Electron app if the API fails to start
    }
    try
    {
      createWindow();   // Create Electron window after API starts
    }
    catch(errors)
    {
      console.error("Failed to Angular app:", errors);
    }
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // Close the Web API process when the app is closed
    if (apiProcess) {
        apiProcess.kill();
    }

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recreate the window when the app is activated (macOS behavior)
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
