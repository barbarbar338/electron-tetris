const { app, BrowserWindow } = require("electron");
const { createTray } = require("./utils/createTray");
const { createMainWindow } = require("./utils/createMainWindow");
const { showNotification } = require("./utils/showNotification");
const AutoLaunch = require("auto-launch");
const remote = require("@electron/remote/main");
const config = require("./utils/config");

remote.initialize();

const autoStart = new AutoLaunch({
	name: config.appName,
});
if (!config.isDev) autoStart.enable();

app.on("ready", async () => {
	config.mainWindow = await createMainWindow();
	config.tray = createTray();

	await config.rpc
		.login({ clientId: config.client_id })
		.then((client) => {
			console.log("Discord RPC connected!");
			client.setActivity({
				details: "Playing Tetris",
				state: "Rotating tetrominos",
				startTimestamp: Date.now(),
				largeImageKey: "tetris",
				largeImageText: "Playing Tetris",
				instance: false,
			});
		})
		.catch(console.error);

	showNotification(
		config.appName,
		"Application running on background! See application tray.",
	);
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0)
		config.mainWindow = createMainWindow();
});
