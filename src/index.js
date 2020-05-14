import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  rootElement
);
