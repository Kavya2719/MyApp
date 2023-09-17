import Button from "../Button/Button";
import GetPlacedAt from '../GetPlacedAt/GetPlacedAt'
import PlacementMan from '../../assests/placement-man.png'
import JobMan from '../../assests/job-man.png';
import "./HeroCardForm.css";

const HeroCardForm = () => {
  const title = 'Get Placed in top companies.';
  const buttonTitle = 'Apply Now';
  const image = PlacementMan;

  // const title = 'Get Job-Ready with us.';
  // const buttonTitle = 'Book Free Trial';
  // const image = JobMan;

  return (
    <div className="hero1">
      <div className="hero-child1" />

      <div className="hero1-row">
        <div className="hero1-column">
          <div className="get-placed-in">
            {title}
            <div className="placement-man-md">
              <img src={image} alt="man-icon" className="placement-man-icon-md"/>
            </div>
          </div>

          <div className="lorem-ipsum-dolor2">
            Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer.
            Risus sapien nec volutpat ut lectus purus enim et a.
          </div>

          <Button
            buttonText={buttonTitle}
            backgroundColor="#beeb42"
            color="#202020"
          />
        </div>

        <img src={image} alt='man-icon' className="placement-man-icon" />
      </div>

      <GetPlacedAt />
    </div>
  );
};

export default HeroCardForm;
