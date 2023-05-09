import { createRoot } from "react-dom/client";

import App from "./app/App.js";
import { store } from "./app/store.js";

import "../src/index.css";

const root = createRoot(document.getElementById("root"));

const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};

render();
store.subscribe(render);
