import React from "react";
import '../Styles/Navbar.css';

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop text-light" onClick={() => setShow(true)}>
        Products
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span><i class="bi bi-cart4"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;