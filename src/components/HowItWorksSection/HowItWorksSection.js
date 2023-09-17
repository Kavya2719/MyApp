import Placed from '../../assests/placed.png'
import StepByStepGuide from "./StepByStepGuide";
import Button from '../Button/Button';
import { useState } from "react";
import allDetails from '../../assests/datafiles/3stepprocess.json';
import "./HowItWorksSection.css";

function HowItWorksSection() {
  const [carouselNumber, setCarouselNumber] = useState("1");
  const [details, setDetails] = useState(allDetails[0]);

  const handleChange = (e) => {
    setCarouselNumber(e.target.innerHTML);
    setDetails(allDetails[e.target.innerHTML-1]);
  };

  return (
    <div className={`main-container2`}>
      <div className={`placement-process-container`}>
        <div className={`placement-guide`}>
          <div className={`perfect-placement-guide`}>How it works</div>
          <div className={`placement-guide-container1`} style={{ marginTop: 'unset' }}>
            <div className={`placement-guide1 placed-container`}>
              3-step process to 
              <span style={{ color: 'var(--blue)' }}>&nbsp;get you&nbsp;</span>
              <span className="placed-container" style={{ marginTop: '5px'}}>
                <img src={Placed} alt='placed' id="placedPNG" />
              </span>
            </div>
          </div>
        </div>

        <div className={`placement-section`}>
          <div className={`container-with-images-and-numbers`}>
            <div className={`content-wrapper`}>
              <div className={`border-box-container`} />
            </div>

            <div className={`flex-column-container`}>
              <button className={carouselNumber==="1"? `purple-box coolvetica-text`: `bordered-rounded-container coolvetica-text1`} onClick={handleChange} >
                1
              </button>
            </div>

            <div className={`flex-column-container`}>
              <button className={carouselNumber==="2"? `purple-box coolvetica-text`: `bordered-rounded-container coolvetica-text1`} onClick={handleChange} >
                2
              </button>
            </div>

            <div className={`flex-column-container`}>
              <button className={carouselNumber==="3"? `purple-box coolvetica-text`: `bordered-rounded-container coolvetica-text1`} onClick={handleChange} >
                3
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`container`}>
        <StepByStepGuide stepName={details.title} stepDescription={details.description} image={details.imageUrl} />
        <Button
          buttonText={'Book Free Trial'}
          backgroundColor="#beeb42"
          color="#202020"
          margin={'40px 0 0 0'}
        />
      </div>
    </div>
  );
}

export default HowItWorksSection;
