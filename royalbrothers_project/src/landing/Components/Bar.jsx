import styles from "./styles.module.css";

export default function Bar(){
    return (
        <div id={styles.barDiv}>
            <div className={styles.barCard}>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png" alt="" />
                <p>Sanitized Vehicles</p>
            </div>
            <div className={styles.barCard}>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png" alt="" />
                <p>Vehicle Insurance</p>
            </div>
            <div className={styles.barCard}>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png" alt="" />
                <p>24/7 Roadside Assistance</p>
            </div>
            <div className={styles.barCard}>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png" alt="" />
                <p>Bike Maintenance</p>
            </div>
        </div>
    )
}