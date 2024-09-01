import React from "react";
import OrderBox from "./OrderBox";
import ProductImage from "./ProductImage";

function ProductPage() {
  return (
    <div className="product-container">
      <ProductImage />
      <OrderBox />
    </div>
  );
}

export default ProductPage;
