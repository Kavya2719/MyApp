import Reviews from "../../assests/reviewsWhite.png";
import testimonialsLadyGreen from "../../assests/testimonialsLadyGreen.png";
import testimonialsLadyWhite from "../../assests/testimonialsLadyWhite.png";
import MicrosoftLogo from '../../assests/MicrosoftLogo.png';
import { useState } from "react";
import allDetails from '../../assests/datafiles/testimonials.json';
import "./TestimonialsContainer.css";

const TestimonialsContainer = ({ screenSize}) => {
  const [carouselNumber, setCarouselNumber] = useState("1");
  const [details, setDetails] = useState(allDetails[0]);

  const handleChange = (e) => {
    setCarouselNumber(e.target.value);
    setDetails(allDetails[e.target.value-1]);
  }

  return (
    <div className="testimonials">
      <div className="row">
        <div className="reviews-parent">
          <img src={Reviews} alt='reviews' className="reviews"/>
          <div className="placement-guide1 what-our-clients">What our clients say</div>
        </div>
      </div>

      <div className="testimonials-inner">
        <div className="group-parent1">
          {
            (screenSize >= 750) &&
            <img className="frame-child3" alt="" src={testimonialsLadyWhite} />
          }
          
          <div className="frame-parent7">
            <div className="frame-parent8">
              <div className="testimonials-row">
                <div className="testimonials-inner-row">
                  <div>
                    <div className="nandini-rawat-software-engine-parent">
                      <div className="nandini-rawat-software-container">
                        <span className="nandini-rawat">{`${details.name},  `}</span>
                        <span className="software-engineer">{details.jobRole}</span>
                      </div>
                    </div>
                    
                    <div className="microsoft-parent">
                      <img src={MicrosoftLogo} alt='microsoft-logo'/>
                      <span className="microsoft">Microsoft</span>
                    </div>
                  </div>

                  <div>
                    <img className="frame-item1" alt="5-stars" src="/group-289348.svg" />
                  </div>
                </div>

                {
                  (screenSize < 750) &&
                  <div className="pic-parent">
                    <div className="person-pic-small">
                      <img className="frame-child3" alt="" src={testimonialsLadyGreen} />
                    </div>
                  </div>
                }
              </div>


              <div className="testimonials-description">
                <div className="unlocking-opportunities">
                  {details.title}
                </div>

                <div className="lorem-ipsum-dolor5">
                  {details.description}
                </div>
              </div>
            </div>

            <div className="rectangle-parent1">
              <button value="1" className={carouselNumber==="1"? "frame-inner1": "rectangle-div1"} onClick={handleChange} />
              <button value="2" className={carouselNumber==="2"? "frame-inner1": "rectangle-div1"} onClick={handleChange} />
              <button value="3" className={carouselNumber==="3"? "frame-inner1": "rectangle-div1"} onClick={handleChange} />
              <button value="4" className={carouselNumber==="4"? "frame-inner1": "rectangle-div1"} onClick={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
