/*
    Client entry point

 */

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/EntriesContext";

import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
