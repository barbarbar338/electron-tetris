import { FC, ReactNode } from "react";
import { Titlebar } from "../Titlebar";

export interface ILayout {
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<Titlebar />
			<div className="select-none">{children}</div>
		</>
	);
};
