import React from "react";

const OrderBox = () => {
  return (
    <div className="order-box">
      <p>Price Each: MYR143.18</p>
      <input type="number" min="1" value="1" />
      <button>Back Order</button>
      <p>
        Temporarily out of stock - back order for dispatch 18/09/2024, delivery
        within 4 working days from dispatch date
      </p>
      <p>FREE delivery for orders over MYR700.00</p>
    </div>
  );
};

export default OrderBox;
