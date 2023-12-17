import React, { useState, useEffect } from "react";

import Payment from "./Payment";
import '../pages/../Styles/Cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);


 useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleSubmit = () => {
    const options = {
      key: 'rzp_test_6WGZeGWQTHXIIt',
      key_secret: 'nsuvbD3Y5GLKOB52kKDf3K2Z',
      amount: price* 100, 
      currency: 'INR',
      name: 'Agrihack',
      description: 'Payment for Cart Items',
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert("Payment successful");
      },
      prefill: {
        name: 'jaswanth',
        email: 'jaswanthmota2002@gmail.com',
        contact: '8179628702',
      },
      theme: {
        color: '#F37254',
      },
    };

     const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <article  >
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
        <div className="kill">
          <payment/>
        <button type="submit" onClick={handleSubmit}>{<Payment/>}</button>
        {<Payment/>}
        </div>
        </div>
    </article>
  );
};
export default Cart;