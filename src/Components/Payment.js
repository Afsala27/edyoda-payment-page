import React from "react";

function Payment() {
  return (
    <div className="payment-form">
      <div className="top-buttons">
        <button className="circle-button">1</button>
        <br />
        <button className="circle-button">2</button>
        <br />
      </div>
      <div className="top-buttons-content">
        <p>Sign up</p>
        <p>Subscribe</p>
      </div>
      <h3>Select your subscription plan</h3>
      <div className="radio">
        <input type="radio" value="12" id="12" name="sub-plans" />
        <label>12 Months Subscription </label> <br/>
        
        

        <input type="radio" checked="true" value="12months" id="12months" name="sub-plans" />
        <label > <span>12 Months Subscription </span></label> <br/>

        <input type="radio" value="6-months" id="6-months" name="sub-plans"  />
        <label >6 Months Subscription</label> <br />

        <input type="radio" value="3-months" id="3-months" name="sub-plans" />
        <label >3 Months Subscription</label> <br/>


        <hr/>
        <div className="price">
          <span>Subscription Fee</span>
          <p>₹18,500</p>
        </div>
        <div className="offer">
          <span>Limited time offer <br/>
           Offer valid till 25th March 2023 </span>
          <p>- ₹18,401</p>
        </div>
        <div className="price-2">
          <span >Total(Incl. of 18% GST)</span>
          <p>₹149</p>
        </div>
        <div className="final-button">
          <button className="button-1">Cancel</button>
          <button className="button-2">Proceed to Pay</button>
        </div>
        <div className="logo-last">
          <img src="Razorpay Icon.png"></img>
        </div>
      </div>
        </div>
      

  );
}

export default Payment;
