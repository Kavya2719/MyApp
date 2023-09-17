import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import GetPlacedAt from "../GetPlacedAt/GetPlacedAt";
import Frame109 from "../../assests/Frame 109.png";
import JobMan from "../../assests/job-man.png";
import tickWhite from "../../assests/tickWhite.png";

const Hero = () => {
  const title = "Get Job-Ready with us.";
  const buttonTitle = "Book Now";
  const image = JobMan;

  return (
    <div className="hero1 horo2">
      <div className="hero-child1 hero-child2"/>

      <div className="hero1-row hero2-row">
        <div className="hero1-column hero2-column">
          <div className="get-placed-in get-placed-in2">
            {title}
            <div className="placement-man-md placement-man-md-2">
              <img
                src={image}
                alt="man-icon"
                className="placement-man-icon-md placement-man-icon-md-2"
              />
            </div>
          </div>

          <div className="lorem-ipsum-dolor2">
            Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a
            integer. Risus sapien nec volutpat ut lectus purus enim et a.
          </div>

          <div className="frame-parent10">
            <div className="btn-container">
              <Button
                buttonText={buttonTitle}
                backgroundColor="#beeb42"
                color="#202020"
              />
            </div>

            <div>
              <div className="frame-parent11">
                <img src={tickWhite} alt="c" className="tick"/>
                <span className="talentfinder1">7-day free trial</span>
              </div>

              <div className="frame-parent11">
                <img src={tickWhite} alt="c" className="tick"/>
                <span className="talentfinder1">No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={image}
          alt="man-icon"
          className="placement-man-icon placement-man-icon2"
        />
      </div>

      <GetPlacedAt />
    </div>
  );
};

export default Hero;
