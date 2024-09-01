import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import OrderBox from "./OrderBox";
import "./styles.css";
import ProductPage from "./ProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb />
      <div className="main-content">
        <ProductDetails />
        <ProductPage />
      </div>
    </div>
  );
}

export default App;
