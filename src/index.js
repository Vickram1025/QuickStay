import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterComponents from "./component/router/RouterComponents";
import ScrollToTop from "./ScrollToTop "





const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <BrowserRouter>
  <ScrollToTop />
  <RouterComponents />
  </BrowserRouter>
 
    );

    