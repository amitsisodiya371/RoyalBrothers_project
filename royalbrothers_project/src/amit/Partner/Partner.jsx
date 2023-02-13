import "./Partner.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Partner(){
return(
    <div>
        <Navbar />
        <div id="backimg">
            
            <h1>Partner with India's Largest Bike <br/>Rental Company</h1>
        </div>

        <h1>What is in store for you</h1>
        <div style={{display:"flex"}}>
           <div id="text"> <h3>A Brand trusted by many</h3>
                <p>1,00,000+ customers served across the nation in 43 different cities. Our consistency in quality can be seen by the 4.5+ star reviews we’ve received across all social channels.</p>
            </div>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/partner_one-0d7574590527a8b3adbea8bc0c9c2bddb5c62aca1b2d8ffe5e20c2b06a3f148e.png" alt="" />
        </div>

        <div style={{display:"flex"}}>
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/partner_one-0d7574590527a8b3adbea8bc0c9c2bddb5c62aca1b2d8ffe5e20c2b06a3f148e.png" alt="" />
           <div id="text"> <h3>A Brand trusted by many</h3>
                <p>1,00,000+ customers served across the nation in 43 different cities. Our consistency in quality can be seen by the 4.5+ star reviews we’ve received across all social channels.</p>
            </div>
           </div>

        <div style={{display:"flex"}}>
           <div id="text"> <h3>A Brand trusted by many</h3>
                <p>1,00,000+ customers served across the nation in 43 different cities. Our consistency in quality can be seen by the 4.5+ star reviews we’ve received across all social channels.</p>
            </div>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/partner_one-0d7574590527a8b3adbea8bc0c9c2bddb5c62aca1b2d8ffe5e20c2b06a3f148e.png" alt="" />
        </div>

        <div style={{display:"flex"}}>
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/partner_one-0d7574590527a8b3adbea8bc0c9c2bddb5c62aca1b2d8ffe5e20c2b06a3f148e.png" alt="" />
           <div id="text"> <h3>A Brand trusted by many</h3>
                <p>1,00,000+ customers served across the nation in 43 different cities. Our consistency in quality can be seen by the 4.5+ star reviews we’ve received across all social channels.</p>
            </div>
           </div>
           <Footer />
    </div>
)
}
export default Partner;