import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path_to_logo" alt="RS Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search by keyword or part no" />
      </div>
      <div className="user-actions">
        <a href="#">Login / Sign Up</a>
        <div className="cart">
          <span>MYR0.00</span>
          <img src="path_to_cart_icon" alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
