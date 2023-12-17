import React from "react";
import { useEffect } from "react";
export default function Payment() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");
    
    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_MQI3EDbPx4Qmbl"; // Replace with your actual button ID
      rzpPaymentForm.appendChild(script);
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div className="App">
    {/* //   <h1>Hello World!</h1> */}
      <form id="rzp_payment_form"></form>
    {/* //   <h2>This line comes below the payment button</h2> */}
    </div>
  );
}
