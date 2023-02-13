import { bikes } from "./data";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Product from "../../components/Product";
export default function Fleet() {
  const navigate=useNavigate();

const navigateToProduct=()=>{
    
    navigate('/Home/Product');
}
  return (
    <>
    <p id={styles.fleetHeading}>OUR FLEET</p>
    <div className={styles.fleetContainer}>      
      {bikes.map((e) => {
        return (
          <div className={styles.fleetCard}>
            <p>{e.name}</p>
            <img src={e.img} alt="" /><br />
           <button onClick={()=>navigateToProduct()}> BOOK NOW</button>
          </div>
        );
      })}
    </div>
    <p id={styles.fleetFooter}>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
    </>
    
  );
}
