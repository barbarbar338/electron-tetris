const { app, Tray, Menu, shell } = require("electron");
const config = require("./config");

exports.createTray = () => {
	const t = new Tray(config.icon);
	t.setToolTip(config.appName);
	t.setContextMenu(
		Menu.buildFromTemplate([
			{
				label: "Links",
				submenu: [
					{
						label: "Download",
						click: () => {
							shell.openExternal(
								"https://github.com/barisbored/electron-tetris/releases",
							);
						},
					},
					{
						label: "Source Code",
						click: () => {
							shell.openExternal(
								"https://github.com/barisbored/electron-tetris",
							);
						},
					},
				],
			},
			{
				label: "Creator",
				submenu: [
					{
						label: "GitHub @barisbored",
						click: () => {
							shell.openExternal("https://github.com/barisbored");
						},
					},
					{
						label: "Webpage",
						click: () => {
							shell.openExternal("https://338.rocks");
						},
					},
					{
						label: "E-Mail demirci.baris38@gmail.com",
						click: () => {
							shell.openExternal("mailto:hi@338.rocks");
						},
					},
				],
			},
			{
				label: "Quit",
				click: () => {
					config.isQuiting = true;
					app.quit();
				},
			},
		]),
	);

	t.on("click", (_, bounds) => {
		if (config.mainWindow.isVisible()) config.mainWindow.hide();
		else config.mainWindow.show();
	});

	return t;
};
