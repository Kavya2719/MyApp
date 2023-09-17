import React from "react";
import Card from "../Card/card.js";
import personPNG from "../../assests/person.png";
import Group1 from '../../assests/Group 39942.jpg'
import Group2 from '../../assests/Group 39943.jpg'
import Group3 from '../../assests/Group 39944.jpg'
import "./PerfectPlacementGuide.css";

const PerfectPlacementGuide = () => {
  return (
    <div className={`placement-guide-section`}>
      <div className={`placement-guide`}>
        <div className={`perfect-placement-guide`}>Why us?</div>
        <div className={`placement-guide-container1`}>
          <div className={`placement-guide1`}>
            We&apos;ll guide you to your
            <span>
              <img src={personPNG} alt="person" id="personPNG" />
            </span>
            placement.
          </div>
        </div>
      </div>

      <div className={`mentorship-section`}>
        <div className={`mentorship-section1`}>
          <Card
            mentorTitle={"Expert Mentor"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Group1}
          />
          <Card
            mentorTitle={"1 to 1 Mentorship"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Group2}
          />
          <Card
            mentorTitle={"Stand Out"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Group3}
          />
        </div>
      </div>
    </div>
  );
};

export default PerfectPlacementGuide;
