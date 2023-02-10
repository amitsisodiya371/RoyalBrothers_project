import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img
        src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page_web-986bff386c60dfaf5106b17c40f7c04228518a95dff9b04ccd88c81465cec0be.jpg"
        alt=""
      />
      <form className={styles.inputBox}>
        <p id={styles.heading}>Search your next ride</p>
        <div>
          <p>Pickup</p>
          <input type="date" name="start" placeholder="Date" />&nbsp;
          <input type="time" name="end" placeholder="Time" />
        </div>
        <br />
        <div>
          <p>Dropoff</p>
          <input type="date" name="start" placeholder="Date" />&nbsp;
          <input type="time" name="end" placeholder="Time" />
        </div>
        <br /><br />
        <button>Search</button>
      </form>
    </div>
  );
}
