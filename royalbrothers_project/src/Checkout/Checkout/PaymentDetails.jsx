// import styles from "./css/checkout.module.css"
// import { bikess } from "./data"
import { Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  "./PaymentDetails.css"
import Navbar from "../../amit/Navbar/Navbar"

import Footer from "../../amit/Footer/Footer"
export default function PaymentDetails() {
  
const navigate=useNavigate();
  const [bike, setBike] = useState({});
  const [pick, setPick] = useState({});
  const [drop, setDrop] = useState({});
  const [dtime, setdTime] = useState(0);
  return (
    <div>
      <Navbar />
    <div className="checMain">
      
      <div className="checMain1">
        <div className="checMain11">
          <div className="checHead">
            <p>SUMMARY</p>
          </div>
          <div className="bikeIm">
            <img
              src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811"
              alt="bike image"
            ></img>
            <p style={{fontSize:"20px",margin:"10px auto"}}>{bike.name}
            Honda Activa 5G</p>
          </div>
        </div>
        <div className="checMain12">
          <div className="slotTi">
            <div className="slotTi1">
              <p>09:00 am</p>
              <p>{pick.start}</p>
            </div>
            <div className="slotTi2">
              <p>to</p>
            </div>
            <div className="slotTi3">
              <p>{dtime}9:00 pm</p>
              <p>{drop.start}</p>
            </div>
          </div>
          <div className="checLocat">
            <p>CV Raman Nagar ,KBR Complex</p>
            <p>More Mega Store, 88, Ground Floor,</p>
            <p> Outer Ring Road, Opposite Langford Showroom,</p>
          </div>
          <div className="checPri">
            <div className="checPri1">
              <p>weekday - 35.0 hrs * ₹55.0/hr</p>
              <p>₹1501</p>
            </div>
            <div className="checPri2">
              <p>Total</p>
              <p>₹1501</p>
            </div>
            <div className="checPri3">
              <p>Number of Helmet. (?) </p>
              <input type="number" placeholder="1" />
            </div>
            <div className="checPri4">
              <input type="number" placeholder="Apply Coupons" />
              <Button width="200px" backgroundColor="#FDB605">
                Apply
              </Button>
            </div>
            <div className="checPri5">
              <p>Km Limit (?)</p>
              <p>420 km</p>
            </div>
            <div className="checPri5">
              <p>Excess Km Charge (?)</p>
              <p>₹6.0/km</p>
            </div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="checMain2">
        <div className="checMain21">
          <p>CHECKOUT</p>
        </div>
        <div className="checMain22">
          <p>Booking Fee</p>
          <p>₹1501</p>
        </div>
        <div className="checMain22">
          <p>GST (28%)</p>
          <p>₹290</p>
        </div>
        
        <div className="checMain25">
          <p>Refundeable deposit Fee</p>
          <p>₹00.0</p>
        </div>
        <div className="checMain26">
          <p>Total Payable Amount</p>
          <p>₹1791</p>
        </div>
        <Button
          marginLeft="40px"
          width="350px"
          marginTop="40px"
          backgroundColor="#FDB605"
          onClick={() => navigate("/Home/Product/PaymentDetails/Payment")}
        >
          Make Payment
        </Button>
      </div>
     
    </div>
    <Footer/>
    </div>
  );
}
