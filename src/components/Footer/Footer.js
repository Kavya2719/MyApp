import Group289330 from "../../assests/Group 289330.svg";
import Copyright from "../../assests/copyright.png";
import "./Footer.css";

const Footer = ({ screenSize }) => {
  return (
    <div className="footer-dark">
      {
        (screenSize < 700) && 
        <div className="mobile-upper-footer">
          <div className="talentfinder2" style={{marginLeft: '30px'}}>
            <span>Talent</span>
            <span className="finder1">Finder</span>
          </div>
          <div className="line1" style={{height: '10px'}}/>
        </div>
      }

      <div className="footer-row">
        {(screenSize >= 900) &&
          <div className="rectangle-group">
            <img src={Group289330} alt="reworkLogo" />
          </div>
        }

        <div className="quick-links-parent">
          <div className="quick-links">Quick Links</div>
          <div className="mentorship-placement-parent">
            <div className="job-insurance">{`Mentorship & Placement`}</div>
            <div className="job-insurance">Placement</div>
            <div className="job-insurance">Hire</div>
          </div>
        </div>

        <div className="more-by-rework-parent">
          <div className="quick-links">More By Rework</div>
          <div className="mentorship-placement-parent">
            <div className="job-insurance">Job Insurance</div>
            <div className="job-insurance">AI Recruitment Platform</div>
          </div>
        </div>

        <div className="join-our-mailing-list-parent">
          <div className="quick-links" id="join">Join our mailing list</div>
          <div className="frame-parent5">
            <div className="enter-email-wrapper">
              <input name="email" type="text" className="enter-email" placeholder="Enter Email" autoComplete="on"/>
            </div>
            <div className="free-send-mail-icon-2574-thumb-parent">
              <img
                className="free-send-mail-icon-2574-thumb"
                alt=""
                src="/freesendmailicon2574thumb-1@2x.png"
              />
              <div className="subscribe">Subscribe</div>
            </div>
          </div>

          <div className="rectangle-parent">
            {/* <div className="rectangle-div" /> */}
            <input type="checkbox" className="rectangle-div" name="checkbox"/>
            <div className="i-agree-to">{`I agree to receive emails  from TalentFinder as per their Data & Privacy Policy.`}</div>
          </div>
        </div>
      </div>
      
      <div className="lowerFooter">
        {
          screenSize < 700 &&
          <div className="line1"/>
        }
        
        <div className="talentfinder-row">
          {
            (screenSize >= 700) && 
            <div className="talentfinder2">
              <span>Talent</span>
              <span className="finder1">Finder</span>
            </div>
          }

          <div className="social-icons-parent">
            <img className="social-icons" alt="" src="/social-icons.svg" />
            <img className="social-icons" alt="" src="/social-icons1.svg" />
            <img className="social-icons" alt="" src="/social-icons2.svg" />
            <img className="social-icons" alt="" src="/social-icons3.svg" />
          </div>
        </div>

        <div className="line1" />

        <div className="frame-parent4">
          <img src={Copyright} alt="c"/>
          <div className="talentfinder1">2023 TalentFinder</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
