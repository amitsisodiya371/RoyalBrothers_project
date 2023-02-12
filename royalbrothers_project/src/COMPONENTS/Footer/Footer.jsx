import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        {/* <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto"}}> */}
        <div>
          <h4>Royal Brothers</h4>
          <div className={styles.Footer__highlight}></div>
         <a href="https://www.instagram.com/royalbrothersrentals/"><div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png"
                alt="mail"
              ></img>
            </div>
            <div>support@royalbrothers.com</div>
          </div></a> 
          <div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png"
                alt="mail"
              ></img>
            </div>
            <div>+917795687594</div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h4>Policies</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Tariff</p>
            <p>Offers</p>
            <p>Riding Gears</p>
            <p>Own a franchise</p>
            <p>Earn with us</p>
            <p>Indian bike routes</p>
          </div>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className={styles.Footer__highlight}></div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                width="25px"
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Insta-e068316ffc568b3c0162ef129542c4ec473fedb2317cc8132168a07a0616b475.png"
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Facebook-ad24f92a1479ca4c5b308092f11f91d3ad2189d505ba2a737f376943a89b721b.png"
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Linkedin-685bfa4464dc2263601740aad98014e02801299c7f2104be70458ac13d061fa1.png"
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/Youtube-35dbc9202b8e7b71d09c782934215b9f6a78a1b3b11d190b5ad275c004484295.png"
                alt="social"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className={styles.Footer__desc}>
        <h2>Travel Solo and Travel Safely with Bike Rentals in Agra
        <div className={styles.Footer__highlight}></div>
        </h2>
        
        <p>
          Royal Brothers is the first startup to obtain a license to operate
          bike rentals in Agra. We offer a wide variety of vehicles starting
          from scooters such as Activa, Dio, Aprilia SR, TVS Ntorq, Ather,
          Aviator to powerful bikes such as Royal Enfield Classic 350, KTM Duke
          200, BMW, Yamaha Fazer etc. With the mission to “Reimagine mobility
          powered by trust”, our single point of focus has been to provide a
          seamless customer experience. Royal Brothers is now providing our
          customers a safer way to travel and commute. We have made safety as
          our top priority. We are ensuring the two wheelers are sanitized
          before every ride. We are also providing Zero Contact Home Delivery so
          that our customers do not have to step out of the house. All our team
          members use masks and gloves to ensure higher customer safety. All
          these measures ensure that we provide safe bikes for rent in Agra.
        </p>
      </div>
      <div className={styles.Footer__end}>
        <h3>
          Made with
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/like-b8b570f724101252e5c39d8bd66246607fb226e93e3ba17b0516209b20832345.png"
            alt="love"
          ></img>
          by team Royal Brothers
        </h3>
      </div>
    </>
  );
}

export default Footer;
