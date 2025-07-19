import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // or './App.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
     <BrowserRouter basename="/dd-engineering"> {/* 👈 Add this line */}
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
