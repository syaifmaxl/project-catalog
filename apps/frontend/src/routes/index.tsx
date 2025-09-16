import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage"; 

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
