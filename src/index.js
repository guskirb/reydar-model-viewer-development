import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./base/reset.scss";
import "./base/mixins.scss";
import "./base/constants.scss";
import "./base/typography.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
