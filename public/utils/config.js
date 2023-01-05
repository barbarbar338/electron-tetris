const { join } = require("path");
const isDev = require("electron-is-dev");
const DiscordRPC = require("discord-rpc");

const client_id = "1060481622006304789";

DiscordRPC.register(client_id);

let config = {
	appName: "Electron Tetris",
	icon: join(__dirname, "..", "/favicon.ico"),
	tray: null,
	isQuiting: false,
	mainWindow: null,
	isDev,
	client_id,
	rpc: new DiscordRPC.Client({ transport: "ipc" }),
	startTimestamp: new Date(),
};

module.exports = config;
