import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./admin/contexts/ContextProvider";
import { BrowserRouter } from "react-router-dom";
import serviceworker from "./serviceworker";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <ToastContainer/>
  <BrowserRouter>
    <ContextProvider>
      <App />    
    </ContextProvider>
  </BrowserRouter>
</>
);

serviceworker();
