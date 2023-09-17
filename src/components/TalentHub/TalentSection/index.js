import { useCallback, useState, forwardRef } from "react";
import TalentCard from "../TalentCard";
import "./style.css";

function TalentSection() {
  return (
    <div className={`frontend-container`}>
      <div className={`main-container1`}>
        <div className="time-saving-message-container-lg">
          <div className={`time-saving-message`}>
            <p>Save time and resources.</p>
            <p>Hire and directly manage remote or on-site talent with confidence.</p>
          </div>
        </div>

        <div>
          <TalentCard />
          <div className="card-row">
            <div className={`green-box`}>
              <img className={`image-container9 img-content-17a46534`} />
            </div>

            <div className={`product-designer-container1`}>
              <p className={`software-developer`}>Product designer</p>
              <div className={`product-designer-container`}>
                <div className={`image-container13`}>
                  <img className={`image-container8 img-content-96ddc92`} />
                </div>
                <div className={`image-container13`}>
                  <img className={`image-container13 img-content-293d76ce`} />
                </div>
                <div className={`image-container13`}>
                  <img className={`image-container17 img-content-a24951ab`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentSection;
