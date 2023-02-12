import slider from "./slider.module.css";
import { Carousel } from "react-bootstrap";

export default function Slider2() {
  return (
    <>
      <p id={slider.heading}>FEATURED IN</p>
      <Carousel
        className={slider.Slider2Container}
        indicators={false}
        controls={false}
        variant="dark"
      >
        <Carousel.Item interval={1000}>
          <div className={slider.cardDiv}>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news2-b2db5fe5ecf6968d4e47cba7876d3ae8a959a5de65901b5a6292032987a38bdd.png"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                
                src="https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg?w=300&dpr=2.6"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                style={{width: "150px"}}
                src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className={slider.cardDiv}>
            <div className={slider.cardImg}>
              <img
                style={{width: "150px"}}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%207.png"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                style={{width: "150px"}}
                src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                style={{width: "150px"}}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/times%20of%20india.png"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className={slider.cardDiv}>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                style={{width: "150px"}}
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/the_better_india-09cca403fbe2fe19974cb1701aaa87fce8e587f32a18bc477ebf28f05e1c1788.png"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                style={{width: "150px"}}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/hindu.png"
                alt="First slide"
              />
            </div>
            <div className={slider.cardImg}>
              <img
                // className="d-block w-100 "
                
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%203.png"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
