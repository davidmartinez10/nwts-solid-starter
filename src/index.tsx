import "./index.css";

import { render } from "solid-js/web";

import App from "./App";

const root = document.createElement("div") as HTMLElement;
document.body.appendChild(root);

render(() => <App />, root);
