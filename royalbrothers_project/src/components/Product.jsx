import styles from './Product.module.css';
import { Button } from "@chakra-ui/react"
import Navbar from "../amit/Navbar/Navbar"
import Footer from "../amit/Footer/Footer"

import { useNavigate } from "react-router-dom";


  


export default function Product(){
    const pay=useNavigate();
    const PaymentD=()=>{
    
        pay('/Home/Product/PaymentDetails');
    }
   
    return(
        
        
        
        <div className={styles.sMain}>
            <Navbar />
        <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Header%20of%204%20or%207%20days.png" alt="header"></img>
        <div className={styles.sMain1}>
        <div className={styles.sMain11}>
        <div className={styles.sMain11d}>
        <div className={styles.filter}>
        {/* <p className='fill'>Filters</p> */}
       
        </div>
            <input placeholder="Search Date & Time"></input>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1a}>
                    <p>Pickup Date</p>
                    <input type="text" value="2023-02-14"></input>
                </div>
                <div className={styles.sMain11d1b}>
                    <p>Time</p>
                    <input type="text" value="09:00"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1a}>
                    <p>Dropoff Date</p>
                    <input type="text" value="2023-02-15"></input>
                </div>
                <div className={styles.sMain11d1b}>
                    <p>Time</p>
                    <input type="text" value="09:00"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1c}>
                    <p>Search Duration</p>
                    <input type="text"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1d}>
                    <p>Search by location</p>
                    <input type="text" value="Agra" placeholder="Search Location"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
            <div className={styles.sLoc}>
            <p>Achhnera.</p>
            <p>Bamrauli Katara.</p>
            <p>Churiyari.</p>
            <p>Dulhara.</p>
            <p>Fatehpur Sikri.</p>
            <p>Karoi.</p>
            <p>Kiraoli.</p>
            <p>Rojhauli.</p>
            <p>Rohta.</p>
            <p>sarsa.</p>
            <p>Sarendra.</p>
            <p>Malpura.</p>
            <p>Midhakur.</p>
            <p>Rajender Nagar.</p>
            <p>Aminjikarai </p>
            <p>Ayanavaram </p>
            <p>Mambalam </p>
            <p>Tondiarpet </p>
            </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1d}>
                    <p>Search by location</p>
                    <input type="text" placeholder="Search Location"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
            <div className={styles.sLoc}>
            <p>Basavanagudi.</p>
            <p>Basavanagudi.</p>
            <p>Jayanagar.</p>
            <p>Koramangala.</p>
            <p>Malleshwaram.</p>
            <p>Rajaji Nagar.</p>
            <p>Frazer Town.</p>
            <p>Sadashivanagar.</p>
            <p>Chandni Chowk.</p>
            <p>Daryaganj.</p>
            <p>Shastri Nagar.</p>
            <p>Kishanganj.</p>
            <p>Karol Bagh.</p>
            <p>Rajender Nagar.</p>
            <p>Aminjikarai </p>
            <p>Ayanavaram </p>
            <p>Mambalam </p>
            <p>Tondiarpet </p>
            </div>
            </div>
            <Button backgroundColor="#FDB605" className={styles.buttona}>Apply Filters</Button>
        </div>
        </div>
        <div className={styles.sMain12}>
            <div className={styles.filters}>
            <button>Sort By</button>
            <button>Relevance</button>
            <button>Price Low To High</button>
            <button>Price Hight To Low</button>
            </div>
            <div className={styles.bikesB}>
            {/* {bikes.map((e)=> */}
            <div className={styles.hello}>
                <div key="1" className={styles.biTile}>
                <div className={styles.biHed}>
                    {/* <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2082.png" alt="best"></img> */}
                    <p>zero deposit</p>
                </div>
                <div className={styles.bikeInfo}>
                <p>Honda Activa 5G</p>
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="hello"></img>
                </div>
                <div className={styles.bikeLoct}>
                <p>Available at</p>
                    <input type="text" placeholder="Location" value="Agra"></input>
                </div>
                <div className={styles.bikeDa}>
                    <div className={styles.bikeDa1}>
                    <p>09:00 AM</p>
                    <p>2023-02-14</p>
                    </div>
                    <div className={styles.bikeDa2}>
                    <p>TO</p>
                    </div>
                    <div className={styles.bikeDa3}>
                    <p>09:00 PM</p>
                    <p>2023-02-15</p>
                    </div>
                </div>
                <div className={styles.lastB}>
                <div className={styles.lastB1}>
                <p>₹1501</p>
                <p>85 km included</p>
                </div>
                <div className={styles.lastB2}>
                <Button marginLeft="30px" width="130px" backgroundColor="#FDB605" onClick={()=>{PaymentD()}}>BOOK</Button>
                </div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
        </div>
        <Footer />
        </div>
        
        
    )



 }