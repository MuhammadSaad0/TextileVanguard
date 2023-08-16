import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.tsx";
import HomePage from "./HomePage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </React.StrictMode>
    
  </BrowserRouter>
);
