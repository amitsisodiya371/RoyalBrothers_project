import slider from "./slider.module.css";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <p id={slider.heading}>WE BELIEVE IN QUALITY</p>
      <Carousel className={slider.sliderContainer} nextIcon={false} prevIcon={false} indicators={true} variant="dark">
        
        <Carousel.Item interval={1500}>
          <div className={slider.sliderCard}>
            <div className={slider.sliderCard_p}>
              <p>Ready to serve you in 40+ cities!</p>
              <p>
                Think of a city & we are almost there.The next time you plan on
                exploring a city, know that your means of transport is sorted with Royal Brothers. #BhaiHaiNa
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
        <Carousel.Item interval={1500}>
          <div className={slider.sliderCard}>
            <div className={slider.sliderCard_p}>
              <p>Bikes Maintained So Good, you will feel it is brand-new</p>             
              <p>
                We obsess on giving you the best possible experience. 
                This is not only with well serviced bikes but also with a 24/7 support team available just a call away.
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
        <Carousel.Item interval={1500}>
          <div className={slider.sliderCard}>
            <div className={slider.sliderCard_p}>
              <p>We're socially celebrated</p>
              <p>
                Our customer centric approach has got us amazing reviews. Be it
                any platform, you will see many users recommending our service.
              </p>
            </div>
            <img 
              className="d-block w-60 "
              style={{ height: "600px", width:"100%" }}
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg"
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
