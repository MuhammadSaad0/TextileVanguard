import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.tsx";
import HomePage from "./HomePage.tsx";
import "./index.css";
import ContactPage from "./ContactPage.tsx";
import ProductPage from "./ProductPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
