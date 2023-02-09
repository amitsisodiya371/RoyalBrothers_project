import styles from "./styles.module.css";

export default function Home(){
    return(
        <>
            <div>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg" alt="" />
                <div className={style.dataBox}>
                    <h2 >Search your next ride</h2>
                    <p>Pickup</p>
                    <div>
                        <input type="date" name="start"  placeholder="Date"/>
                        <input type="time" name="end" placeholder="Time" />
                    </div>
                    <p>Dropoff</p>
                    <div>
                        <input type="date" name="start" placeholder="Date" />
                        <input type="time" name="end" placeholder="Time" />
                    </div>
                    <button>Search</button>

                </div>
                <div>
                    <div>
                        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png" alt="" />
                        <p>Sanitized Vehicles</p>
                    </div>
                    <div>
                        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png" alt="" />
                        <p>Vehicle Insurance</p>
                    </div>
                    <div>
                        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png" alt="" />
                        <p>24/7 Roadside Assistance</p>
                    </div>
                    <div>
                        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png" alt="" />
                        <p>Bike Maintenance</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>OUR FLEET</h1>
                <div>

                </div>
                <p>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
            </div>
        </>        
        
    )
}