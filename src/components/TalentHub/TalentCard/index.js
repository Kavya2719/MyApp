import { useCallback, useState, forwardRef } from "react";
import DeveloperCard from "../DeveloperCard";
import HrManagerComponent from "../HrManagerComponent";
import "./style.css";

function TalentCard() {
  return (
    <div className={`main-container`}>
      <div className={`developer-card`}>
        <div className={`software-developer-container1`}>
          <img className={`image-container9 img-content-a69daac8`} />
        </div>
        <div className={`software-developer-section`}>
          <DeveloperCard />
        </div>
      </div>
      <div className={`frontend-button-container`}>
        <button className={`hire-button`}>Hire Now</button>
      </div>
      <div className={`frontend-developer-section`}>
        <div className={`hr-manager-container`}>
          <HrManagerComponent />
        </div>
        <div className={`hr-manager-container1`}>
          <img className={`image-container9 img-content-15ccea3e`} />
        </div>
      </div>
    </div>
  );
}

export default TalentCard;
