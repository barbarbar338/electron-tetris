import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/tailwind.css";
import "./styles/tetris.css";
import "./styles/titlebar.css";

import { Router } from "./router";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
	<StrictMode>
		<Router />
	</StrictMode>,
);
