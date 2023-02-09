import slider from "./slider.module.css";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <Carousel className={slider.mainCra} indicators={true} variant="dark">
        <Carousel.Item interval={1000}>
          <div className={slider.divIaa}>
            <div className={slider.divIa1a}>
              <p>#Ready to serve in 40+ cities</p>
              <p>
                Think of a city we are almost there.The next time you plan on
                exploring a city transport is sorted with royalbrothers.
              </p>
            </div>
            <img
              className="d-block w-100 "
              style={{ height: "600px" }}
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/slide3.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className={slider.divIaa}>
            <div className={slider.divIa1a}>
              <p>Bikes Maintained So Good.</p>
              <p>
                We obsses on giving you the best possible experience.That is why
                we have well bikes 24/7.
              </p>
            </div>
            <img
              className="d-block w-100 "
              style={{ height: "600px" }}
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/slide2.png"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className={slider.divIa}>
            <div className={slider.divIa1}>
              <p>We’re socially celebrated</p>
              <p>
                Our customer centric approch has got us amazing reviews. Be it
                any platform, you will see many users recommending our service
              </p>
            </div>
            <img
              className="d-block w-60 "
              style={{ height: "600px" }}
              src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/slide1.png"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
