import { useState } from "react";
// import { Navbar } from "react-bootstrap";
import Bar from "./Components/Bar";
import Fleet from "./Components/Fleet";
import Slider from "./Components/Slide/Slider";
import Slider2 from "./Components/Slide/Slider2";
import styles from "./Components/styles.module.css";
import Navbar from "../amit/Navbar/Navbar"
import Footer from "../amit/Footer/Footer"

export default function Home() {
const [pickup, setPickup]=useState({
  start:"",
  end:""
})

const [dropOff,setDropoff] = useState({
  start:"",
  end:""
})

function handlePickup(e){
  const{name, value}=e.target;
  setPickup({...pickup, [name]:value})
  // console.log(pickup);
  localStorage.setItem("pickUp", JSON.stringify(pickup));
}

function handleDrop(e){
  const {name, value}=e.target;
  setDropoff({...dropOff, [name]:value})
  // console.log(dropOff);
  localStorage.setItem("dropOff", JSON.stringify(dropOff));
}

  return (
    <>
    <Navbar />
        <div className={styles.homeContainer}>
        <img
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg"
          alt=""
        />
        <div className={styles.inputBox}>
          <p id={styles.heading}>Search your next ride</p>
          <div>
            <p>Pickup</p>
            <input type="date" name="start" value={pickup.start} onChange={handlePickup} placeholder="Date"></input>&nbsp;
            <input type="time" name="end" value={pickup.end} onChange={handlePickup} className={styles.times} placeholder="Time"></input>
          </div>
          <br />
          <div>
            <p>Dropoff</p>
            <input type="date" name="start" value={dropOff.start} onChange={handleDrop} placeholder="Date"></input>&nbsp;
            <input type="time" name="end" value={dropOff.end} onChange={handleDrop} className={styles.times} placeholder="Time"></input>
          </div>
          <br /><br />
          <button >Search</button>
        </div>
      </div>
      <Bar/>
      <Fleet/>
      <Slider/>
      <Slider2/>
      <Footer />
    </>
    
  );
}
