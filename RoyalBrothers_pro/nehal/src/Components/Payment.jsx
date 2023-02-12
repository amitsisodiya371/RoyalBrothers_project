// import React from "react";

// export default function Payements() {
//   return (
//     <div className="Main_Container_page" style={{border:"1px solid black"}}>

//       <div className="Payments_page">
//       <div style={{padding:"20px"}}><h2>SUMMARY</h2></div>

//         <div className="inner_summary_div">
//         <div><hr/></div>
//         <div><hr/></div>
//         <div><p>Weekday - 2 days * rupee650.0/day</p></div>
//         <div><p>Weekday - 2 days * rupee650.0/day</p></div>
//         <div><p>Peak pricing</p></div>
//         <div><h3>Total</h3></div>
//         <p>Number of Helmets(?)</p>
//         </div>
//       </div>
//       <div className="CheckOut_Payment_page">

//         <div><h3>CHECKOUT</h3></div>
//         <div><p>Booking Fee</p></div>
//         <div><p>IGST(28%)</p></div>
//         <div><p>Refundable Deposit</p></div>
//         <div><h3>Total Payable Amount</h3></div>
//         <div><button className="make_payment_btn">Make payment</button></div>
//       </div>
//     </div>
//   );
// }

// import styles from "./css/payment.module.css"
// import styles from "../Components/Payments.modules.css";
// import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router";

export default function Payment() {
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("id"));
    axios.get(`https://royal-brother.herokuapp.com/bike/${ids}`).then((res) => {
      setBike(res.data);
    });
  }, []);
  const [bike, setBike] = useState({});
  // let navigate = useNavigate();
  const [details, setDetails] = useState({
    card: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  function handlePay() {
    for (let j in details) {
      if (!details[j]) return;
      // navigate("/paymentconfirm");
    }
  }
  return (
    <>
      <div className="mainBod">
        <div className="mainBod1">
          <div className="Choose_payments_mthd">
            <p style={{marginTop:"5px",marginLeft:"-65%"}}>CHOOSE PAYMENT METHOD</p>
          </div>
          <div className="mainBod1m">
            <div className="mainBod1m1">
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                Credit card
              </button>
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                Debit card
              </button>
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                Net Banking
              </button>
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                Upi Banking
              </button>
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                <img
                  className="paytm"
                  // style={:"center"}}
                  src="https://www.passionateinmarketing.com/wp-content/uploads/2022/09/ZestMoney.png"
                  alt="card"
                ></img>
              </button>
              <button
                style={{width:"250px",
                height:"40px",
                borderRadius:"0px",
                border:"none",
                borderBottom:"1px solid lightgrey"}}
              >
                <img
                  className="paytm"
                  src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                  alt="card"
                ></img>
              </button>
            </div>
            <div className="mainBod1m2">
              <div className="mainBod1m2a">
                <p>Enter Card Details</p>
              </div>
              <div className="mainBod1m2a1">
                <div className="mainBod1m2a1a">
                  <input type="radio"></input>
                  <img
                    src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
                    alt="card"
                  ></img>
                </div>
                <div className="mainBod1m2a1a">
                  <input type="radio"></input>
                  <img
                    src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png"
                    alt="card"
                  ></img>
                </div>
                <div className="mainBod1m2a1a">
                  <input type="radio"></input>
                  <img
                    src="https://1000logos.net/wp-content/uploads/2020/04/Diners-Club-International-logo.jpg"
                    alt="card"
                  ></img>
                </div>
                <div className="mainBod1m2a1b">
                  <input type="radio"></input>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"
                    alt="card"
                  ></img>
                </div>
              </div>
              <div className="mainInp">
                <p className="card_number">Card Number</p>
                <input
                  type="number"
                  value={details.card}
                  name="card"
                  onChange={handleChange}
                  placeholder=" Enter your card Number"
                  className="Card_of_name"
                ></input>
                <p className="Card_of_name">Name on the card</p>
                <input
                  type="text"
                  value={details.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter name on the card"
                  className="Card_of_name"
                ></input>
                <div className="expi">
                  <p>Expiry</p>
                  <p>Cvv</p>
                </div>
                <div className="expii">
                  <input
                  style={{width:"30%"}}
                    type="number"
                    value={details.month}
                    name="month"
                    onChange={handleChange}
                    placeholder="mm"
                  ></input>
                  <input
                  style={{width:"30%"}}
                    type="number"
                    value={details.year}
                    name="year"
                    onChange={handleChange}
                    placeholder="yy"
                  ></input>
                  <input 
                  style={{width:"30%", marginRight:"30px"}}
                    type="number"
                    value={details.cvv}
                    name="cvv"
                    onChange={handleChange}
                    placeholder="cvv"
                  ></input>
                </div>
                {/* <button
                  style={{marginTop:"60px",
                  marginLeft:"15px",
                  width:"200px",
                  backgroundColor:"#FDB605"}}
                  onClick={handlePay}
                >
                  Make Payment
                </button> */}
              </div>
              <button
                style={{
                  marginTop: "14px",
                  marginLeft: "30px",
                  width: "200px",
                  backgroundColor: "rgb(254,210,80)",
                  padding: "10px",
                borderRadius:"5px",border:"none"}}
                onClick={handlePay}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
        <div className="mainBod2" style={{borderRadius:"5px"}}>
          <div className="mainBod2H">
            <p style={{marginTop:"5px",marginLeft:"-65%"}}>SUMMARY</p>
          </div>
          <div className="paym">
            <p>Total Payable Amount</p>
            <p>₹ {bike.price * 4 + Math.floor(bike.price * 4 * 0.28)}</p>
          </div>
          <div className="timer" style={{color:"black"}}>
            <CountdownCircleTimer
              isPlaying
              duration={180}
              colors={[
                ["#000000", 0.33],
                ["#000000", 0.33],
                ["#000000", 0.33],
              ]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
      <div className="note" style={{textAlign:"center"}}>
        <p>
          <strong>Note:</strong> Making Payments on RoyalBrothers.com is 100%
          safe. Your transaction is processed through a secure https internet
          connection based on secure socket layer technology. Your payment
          details are only used for processing the transaction and never stored.
        </p>
      </div>
    </>
  );
}
