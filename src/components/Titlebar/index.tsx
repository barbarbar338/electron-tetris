import { FC, useEffect } from "react";
import Icon from "../../assets/icon.png";
import { IoCloseOutline, IoRemove } from "react-icons/io5";

const { getCurrentWindow, app } = window.require("@electron/remote");

export const Titlebar: FC = () => {
	const currentWindow = getCurrentWindow();

	useEffect(() => {
		const icon = document.getElementById("icon") as HTMLElement;
		icon.ondragstart = () => false;
	});

	const onMinimize = () => currentWindow.minimize();

	const onQuit = () => app.quit();

	return (
		<div className="title-bar sticky top-0 select-none">
			<div className="menu-button-container">
				<img
					id="icon"
					src={Icon}
					className="menu-icon select-none"
					alt="icon"
				/>
			</div>
			<div className="app-name-container select-none">
				<p>Electron Tetris</p>
			</div>
			<div className="window-controls-container">
				<button
					className="minimize-button focus:outline-none hover:bg-gray-700"
					onClick={onMinimize}
				>
					<IoRemove />
				</button>
				<button
					className="close-button focus:outline-none hover:bg-gray-700"
					onClick={onQuit}
				>
					<IoCloseOutline />
				</button>
			</div>
		</div>
	);
};
