// import FormContainer from "../FormContainer/FormContainer";
import Card from '../Card/card'
import listRequirements from '../../assests/listRequirements.png'
import getAListOfProfiles from '../../assests/getAListOfProfiles.png'
import interviewCandidates from '../../assests/interviewCandidates.png'
import startWorking from '../../assests/startWorking.png'
import Button from '../Button/Button'
import "./ContainerStepsForm.css";

const ContainerStepsForm = () => {
  return (
    <div className={`placement-guide-section`}>
      <div className={`placement-guide`}>
        <div className={`placement-guide-container1`}>
          <div className={`placement-guide1`}>
          Top-quality remote hiring in&nbsp; <span style={{ color: 'var(--blue-shade'}}> 4 simple steps </span>
          </div>
        </div>
        <div className="textWhyUs" id="stepsText">
          <p>Begin your journey today or preview a sample profile.</p>
          <p>Your next career move awaits!</p>
        </div>
      </div>

      <div className={`mentorship-section`}>
        <div className={`mentorship-section1`}>
          <Card
            mentorTitle={"List requirements"}
            mentorDesctiption={
              "Our team will contact you to understand your requirements. Our team will contact you to."
            }
            image={listRequirements}
            padding={'24px'}
          />
          <Card
            mentorTitle={"Get a list of profiles"}
            mentorDesctiption={
              "Our team will contact you to understand your requirements. Our team will contact you to."
            }
            image={getAListOfProfiles}
            padding={'24px'}
          />
          <Card
            mentorTitle={"Interview candidates"}
            mentorDesctiption={
              "You save time by only interviewing engineers shortlisted for you."
            }
            image={interviewCandidates}
            padding={'24px'}
          />
          <Card
            mentorTitle={"Start working"}
            mentorDesctiption={
              "We handle all the compliance-related paperwork and legalese so your candidates."
            }
            image={startWorking}
            padding={'24px'}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerStepsForm;
