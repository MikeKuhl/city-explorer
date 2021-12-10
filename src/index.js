import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Footer } from "./components/Footer";
import Search from "./components/Search";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./styles/card.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Search />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
