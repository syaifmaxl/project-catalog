import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage"; 
import CategoriDetailPage from "../pages/CategoriDetailPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/detail-kategori/:categoryName" element={<CategoriDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
