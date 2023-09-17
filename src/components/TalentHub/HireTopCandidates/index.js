import { useCallback, useState, forwardRef } from "react";
import TalentSection from "../TalentSection";
import PreVetted from '../../../assests/pre-vetted.png';
import "./style.css";

function HireTopCandidates() {
  return (
    <div className={`candidate-section`}>
      <div className={`top-candidates-section`}>
        <div className={`placement-guide`}>
          <div className={`placement-guide-container1`}>
            <div className={`placement-guide1 hire-heading`}>
              Hire India's Top, 
              <span className="pre-vetted-container">
                <img src={PreVetted} alt="Pre-Vetted" id="prevettedimg"/>
              </span>
              Candidates
            </div>
          </div>
        </div>

        <div className={`time-saving-message time-saving-message-container-sm`}>
          <p>Save time and resources.</p>
          <p>Hire and directly manage remote or on-site talent with confidence.</p>
        </div>

        <div className={`frontend-button-container time-saving-message-container-sm`} id='btn-sm'>
          <button className={`hire-button`}>Hire Now</button>
        </div>
      </div>
      <TalentSection />
    </div>
  );
}

export default HireTopCandidates;
