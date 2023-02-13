import "./Tarrif.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Tarrif(){
    return(
        <div>
            <Navbar />
            <div id ="biketext">
                <h1>Bike rental tariffs in Agra</h1>
                <p>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
            </div>

            <div id="bikedetails">
               <div> <h3>Honda Activa 5G</h3>
                    <img id="bikeimg" src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="" />
                </div>
                <button style={{width:"100%",padding:"14px",border:"none",boxShadow:"0 0 2px black",backgroundColor:"white",borderBottom:"3px solid  #eba904"}}>DAILY</button>
            </div>
        
            <div id ="schdule">
                <div style={{textAlign:"left", marginTop:"-20px"}}> 
                    <h5 style={{margin:"20px"}}>Mon-Thu</h5>
                    <div style={{display:"flex", gap:"128px", margin:"-30px 0 0 28px", marginTop:"-30px",fontSize:"11px"}}>
                        <p>Full day</p>
                        <p>₹ 650 /day</p>
                    </div>
                </div>
                <div style={{textAlign:"left",marginTop:"-20px"}}> 
                    <h5 style={{marginLeft:"20px"}}>Fri-Sat</h5>
                    <div style={{display:"flex", gap:"130px", margin:"-30px 0 0 28px",fontSize:"11px"}}>
                        <p>Full day</p>
                        <p>₹ 650 /day</p>
                    </div>
                </div>
                <div style={{textAlign:"left",marginTop:"-20px"}}> 
                    <h5 style={{marginLeft:"20px"}}>Excess charges</h5>
                    <div style={{display:"flex", gap:"121px", margin:"-30px 0 0 28px", marginTop:"-30px",fontSize:"11px"}}>
                        <p>Excess Km</p>
                        <p>₹ 4.0/km</p>
                        
                    </div>
                    <div style={{display:"flex", gap:"130px", margin:"-20px 0 0 28px", marginTop:"-20px",fontSize:"11px"}}>
                        <p>Km Limit</p>
                        <p>₹ 120.0/day</p>
                    </div>
                </div>
                <div><p style={{fontSize:"10px",padding:"10px"}}>*A day is calculated as 08:00 am to next day 07:30 am. | Min of 1.0 days billing cycle.</p></div>
                <br /><br /><br />
                <button style={{width:"100%",backgroundColor:"#eba904",padding:"14px",border:"none",borderRadius:"0 0 5px 5px"}}>Book Now</button>
               </div>
               <br /><br />
               <Footer />
        </div>
    )
}
export default Tarrif;