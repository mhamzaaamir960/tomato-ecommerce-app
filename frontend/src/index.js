import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Footer, Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
