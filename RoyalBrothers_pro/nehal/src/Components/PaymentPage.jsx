// import styles from "./Components/Payments.modules.css";
// // import { Button } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import { useNavigate } from "react-router";

// export default function Payment() {
//   useEffect(() => {
//     const ids = JSON.parse(localStorage.getItem("id"));
//     axios.get(`https://royal-brother.herokuapp.com/bike/${ids}`).then((res) => {
//       setBike(res.data);
//     });
//   }, []);
//   const [bike, setBike] = useState({});
//   const navigate = useNavigate();
//   const [details, setDetails] = useState({
//     card: "",
//     name: "",
//     month: "",
//     year: "",
//     cvv: "",
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setDetails({ ...details, [name]: value });
//   }

//   function handlePay() {
//     for (let j in details) {
//       if (!details[j]) return;
//       navigate("/paymentconfirm");
//     }
//   }
//   return (
//     <>
//       <div className={styles.mainBod}>
//         <div className={styles.mainBod1}>
//           <div className={styles.mainBod1H}>
//             <p>CHOOSE PAYMENT METHOD</p>
//           </div>
//           <div className={styles.mainBod1m}>
//             <div className={styles.mainBod1m1}>
//               <button
//                 width="250px"
//                 height="40px"
//                 borderRadius="0px"
//                 borderBottom="2px solid lightgrey"
//               >
//                 Credit card
//               </button>
//               <button
//                 width="250px"
//                 height="40px"
//                 borderRadius="0px"
//                 borderBottom="2px solid lightgrey"
//               >
//                 Debit card
//               </button>
//               <button
//                 width="250px"
//                 height="40px"
//                 borderRadius="0px"
//                 borderBottom="2px solid lightgrey"
//               >
//                 Net Banking
//               </button>
//               <button
//                 width="250px"
//                 height="40px"
//                 borderRadius="0px"
//                 borderBottom="2px solid lightgrey"
//               >
//                 Upi Banking
//               </button>
//               <button
//                 width="250px"
//                 height="40px"
//                 borderRadius="0px"
//                 borderBottom="2px solid lightgrey"
//               >
//                 <img
//                   className={styles.paytm}
//                   src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
//                   alt="card"
//                 ></img>
//               </button>
//             </div>
//             <div className={styles.mainBod1m2}>
//               <div className={styles.mainBod1m2a}>
//                 <p>Enter Card Details</p>
//               </div>
//               <div className={styles.mainBod1m2a1}>
//                 <div className={styles.mainBod1m2a1a}>
//                   <input type="radio"></input>
//                   <img
//                     src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2022.png"
//                     alt="card"
//                   ></img>
//                 </div>
//                 <div className={styles.mainBod1m2a1a}>
//                   <input type="radio"></input>
//                   <img
//                     src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2021%20(1).png"
//                     alt="card"
//                   ></img>
//                 </div>
//                 <div className={styles.mainBod1m2a1a}>
//                   <input type="radio"></input>
//                   <img
//                     src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2020%402x.png"
//                     alt="card"
//                   ></img>
//                 </div>
//                 <div className={styles.mainBod1m2a1b}>
//                   <input type="radio"></input>
//                   <img
//                     src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2023%20(1).png"
//                     alt="card"
//                   ></img>
//                 </div>
//               </div>
//               <div className={styles.mainInp}>
//                 <p className={styles.cardst}>Card Number</p>
//                 <input
//                   type="number"
//                   value={details.card}
//                   name="card"
//                   onChange={handleChange}
//                   placeholder="Card Number"
//                   className={styles.cardsi}
//                 ></input>
//                 <p className={styles.cardst}>Name on Card</p>
//                 <input
//                   type="text"
//                   value={details.name}
//                   name="name"
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className={styles.cardsi}
//                 ></input>
//                 <div className={styles.expi}>
//                   <p>Expiry</p>
//                   <p>Cvv</p>
//                 </div>
//                 <div className={styles.expii}>
//                   <input
//                     type="number"
//                     value={details.month}
//                     name="month"
//                     onChange={handleChange}
//                     placeholder="mm"
//                   ></input>
//                   <input
//                     type="number"
//                     value={details.year}
//                     name="year"
//                     onChange={handleChange}
//                     placeholder="yy"
//                   ></input>
//                   <input
//                     type="number"
//                     value={details.cvv}
//                     name="cvv"
//                     onChange={handleChange}
//                     placeholder="cvv"
//                   ></input>
//                 </div>
//                 <button
//                   marginTop="10px"
//                   marginLeft="19px"
//                   width="250px"
//                   backgroundColor="#FDB605"
//                   onClick={handlePay}
//                 >
//                   Make Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.mainBod2}>
//           <div className={styles.mainBod2H}>
//             <p>SUMMARY</p>
//           </div>
//           <div className={styles.paym}>
//             <p>Total Payable Amount</p>
//             <p>₹ {bike.price * 4 + Math.floor(bike.price * 4 * 0.28)}</p>
//           </div>
//           <div className={styles.timer}>
//             <CountdownCircleTimer
//               isPlaying
//               duration={180}
//               colors={[
//                 ["#000000", 0.33],
//                 ["#000000", 0.33],
//                 ["#000000", 0.33],
//               ]}
//             >
//               {({ remainingTime }) => remainingTime}
//             </CountdownCircleTimer>
//           </div>
//         </div>
//       </div>
//       <div className={styles.note}>
//         <p>
//           <strong>Note:</strong> Making Payments on RoyalBrothers.com is 100%
//           safe. Your transaction is processed through a secure https internet
//           connection based on secure socket layer technology. Your payment
//           details are only used for processing the transaction and never stored.
//         </p>
//       </div>
//     </>
//   );
// }
