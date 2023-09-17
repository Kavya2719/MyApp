import "./BenefitsContainer.css";
import Success from '../../assests/success.png';
import SuccessGirl from '../../assests/successgirl.png';

const BenefitsContainer = () => {
  return (
    <div className="benefits">
      <div className="jobs-benefits-container">
        <span>{`Jobs + Benefits = `}</span>
        <span className="your-success">Your</span>
        {/* <span className="success"> */}
          <img className="success-icon" alt="" src={Success} />
        {/* </span> */}
      </div>

      <div className="benefits-row">
        <img src={SuccessGirl} alt='successgirl-icon' className="success-girl"/>

        <div className="benefits-column">
          <div className="are-you-on-container">
            <p className="are-you-on">{`Are you on the hunt for your dream job? `}</p>
            <p className="are-you-on">
              Here's why you should take advantage of our platform:
            </p>
          </div>

          <div className="frame-parent6">
            <div className="frame-group1">
              <div className="diverse-opportunities-container">
                <div className="effortless-applications">Diverse Opportunities</div>
              </div>
              <div className="lorem-ipsum-dolor-container">
                <p className="are-you-on">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</p>
                <p className="are-you-on">{`ut labore et dolore magna `}</p>
              </div>
            </div>

            <div className="frame-group1">
              <div className="diverse-opportunities-container">
                <div className="effortless-applications">
                  Effortless Applications
                </div>
              </div>

              <div className="lorem-ipsum-dolor-container1">
                <p className="are-you-on">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</p>
                <p className="are-you-on">{`ut labore et dolore magna `}</p>
              </div>
            </div>

            <div className="frame-group1">
              <div className="tailored-job-matching-wrapper">
                <div className="effortless-applications">Tailored Job Matching</div>
              </div>

              <div className="lorem-ipsum-dolor-container2">
                <p className="are-you-on">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</p>
                <p className="are-you-on">{`ut labore et dolore magna `}</p>
              </div>
            </div>

            <div className="frame-group1">
              <div className="mentorship-wrapper">
                <div className="effortless-applications">Mentorship</div>
              </div>

              <div className="lorem-ipsum-dolor-container3">
                <p className="are-you-on">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</p>
                <p className="are-you-on">{`ut labore et dolore magna `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsContainer;
