import React from "react";

import ReactDOM from "react-dom/client";

import Routing from "./routes/root.routes";

import withProviders from "./app/providers";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Root = withProviders(() => <Routing />);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Root />);
