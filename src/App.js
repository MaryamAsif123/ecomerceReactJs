import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Categories from "./Pages/Categories/Categories";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/page-not-found" element={<PageNotFound />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/*" element={<Navigate to="/page-not-found" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
