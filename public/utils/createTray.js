const { app, Tray, Menu, shell } = require("electron");
const config = require("./config");

exports.createTray = () => {
	const t = new Tray(config.icon);
	t.setToolTip(config.appName);
	t.setContextMenu(
		Menu.buildFromTemplate([
			{
				label: "Show App",
				click: () => {
					if (!config.mainWindow.isVisible())
						config.mainWindow.show();
				},
			},
			{
				label: "Creator",
				submenu: [
					{
						label: "GitHub @barbarbar338",
						click: () => {
							shell.openExternal(
								"https://github.com/barbarbar338",
							);
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

	return t;
};
