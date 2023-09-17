import HowItWorksGirl from "../../../assests/howitworksgirl.jpeg";
import "./style.css";

function StepByStepGuide({ stepName, stepDescription, image }) {
  return (
    <div className={`container-with-image-and-text`}>
      <div className={`step-name-container`}>
        <p className={`coolvetica-heading`}>{stepName}</p>
        <p className={`tristique-venenatis-elementum-liber`}>
          {stepDescription}
        </p>
      </div>
      
      <div className={`container-image`}>
        <img src={image} alt='HowItWorksGirl' className="HowItWorksGirl" />
      </div>
    </div>
  );
}

export default StepByStepGuide;
